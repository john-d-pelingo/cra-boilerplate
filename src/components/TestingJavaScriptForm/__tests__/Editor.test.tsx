import 'jest-dom/extend-expect'

import React from 'react'
import { Redirect as MockedRedirect } from 'react-router-dom'
import { fireEvent, render, wait, waitForElement } from 'react-testing-library'
import { build, fake, sequence } from 'test-data-bot'

import { savePost as mockedSavePost } from '../../../helpers/api'
import Editor from '../Editor'

jest.mock('react-router-dom', () => ({
  Redirect: jest.fn(() => null),
}))

jest.mock('../../../helpers/api', () => ({
  savePost: jest.fn(() => Promise.resolve()),
}))

afterEach(() => {
  // Keep tests isolated
  ;(mockedSavePost as any).mockClear()
  ;(MockedRedirect as any).mockClear()
})

const postBuilder = build('Post').fields({
  content: fake((f: any) => f.lorem.paragraphs().replace(/\r/g, '')),
  tags: fake((f: any) => [f.lorem.word(), f.lorem.word(), f.lorem.word()]),
  title: fake((f: any) => f.lorem.words()),
})

const userBuilder = build('User').fields({
  id: sequence((s: any) => `user-${s}`),
})

function renderEditor() {
  const fakePost = postBuilder()
  const fakeUser = userBuilder()
  const utils = render(<Editor user={fakeUser} />)
  const submitButton = utils.getByText(/submit/i)
  ;(utils.getByLabelText(/content/i) as HTMLInputElement).value =
    fakePost.content
  ;(utils.getByLabelText(
    /tags/i,
  ) as HTMLInputElement).value = fakePost.tags.join(', ')
  ;(utils.getByLabelText(/title/i) as HTMLInputElement).value = fakePost.title

  return {
    ...utils,
    fakePost,
    fakeUser,
    submitButton,
  }
}

describe('components/Editor', () => {
  it('renders a form with title, content, tags and a submit button', async () => {
    const { fakePost, fakeUser, submitButton } = renderEditor()

    const preDate = Date.now()
    fireEvent.click(submitButton)

    expect(submitButton).toBeDisabled()
    expect(mockedSavePost).toHaveBeenCalledTimes(1)
    expect(mockedSavePost).toHaveBeenCalledWith({
      ...fakePost,
      authorId: fakeUser.id,
      date: expect.any(String),
    })

    const postDate = Date.now()
    const date = new Date(
      (mockedSavePost as any).mock.calls[0][0].date,
    ).getTime()
    expect(date).toBeGreaterThanOrEqual(preDate)
    expect(date).toBeLessThan(postDate)

    await wait(() => expect(MockedRedirect).toHaveBeenCalledTimes(1))
    expect(MockedRedirect).toHaveBeenCalledWith({ to: '/' }, {})
  })

  it('renders an error message from the server', async () => {
    const testError = 'test error'
    ;(mockedSavePost as any).mockRejectedValueOnce({
      data: { error: testError },
    })

    const { getByTestId, submitButton } = renderEditor()

    fireEvent.click(submitButton)

    const postError = await waitForElement(() => getByTestId('post-error'))
    expect(postError).toHaveTextContent(testError)
    expect(submitButton).not.toBeDisabled()
  })
})
