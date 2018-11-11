import 'jest-dom/extend-expect'

import * as React from 'react'
import { fireEvent, render, wait } from 'react-testing-library'

import { loadGreeting as mockedLoadGreeting } from '../api'
import GreetingLoader from '../GreetingLoader.http-jest-mock'

jest.mock('../api', () => ({
  loadGreeting: jest.fn(subject =>
    Promise.resolve({
      data: {
        greeting: `Hi ${subject}!`,
      },
    }),
  ),
}))

describe('components/GreetingLoader', () => {
  it('loads greetings on click', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <GreetingLoader />,
    )
    const nameInput = getByLabelText(/name/i) as HTMLInputElement
    const loadButton = getByText(/load/i)
    nameInput.value = 'Theda'
    fireEvent.click(loadButton)

    expect(mockedLoadGreeting).toHaveBeenCalledTimes(1)
    expect(mockedLoadGreeting).toHaveBeenCalledWith('Theda')
    await wait(() =>
      expect(getByTestId('greeting')).toHaveTextContent('Hi Theda!'),
    )
  })
})
