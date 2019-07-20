import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import Main from '../Main'

function renderMain(
  ui: React.ReactElement<any>,
  {
    route = '/',
    history = createMemoryHistory({
      initialEntries: [route],
    }),
    ...options
  }: { history?: MemoryHistory; route?: string } = {
    history: createMemoryHistory({
      initialEntries: ['/'],
    }),
    route: '/',
  },
) {
  return {
    ...render(<Router history={history}>{ui}</Router>, options as any),
    history,
  }
}

describe('components/Main', () => {
  it('main renders about and home and I can navigate to those pages', () => {
    const { getByTestId, getByText, queryByTestId } = renderMain(<Main />)

    expect(getByTestId('home-screen')).toBeInTheDocument()
    expect(queryByTestId('about-screen')).not.toBeInTheDocument()

    fireEvent.click(getByText(/about/i))

    expect(queryByTestId('home-screen')).not.toBeInTheDocument()
    expect(getByTestId('about-screen')).toBeInTheDocument()
  })

  it('landing on a bad page shows no match component', () => {
    const { getByTestId } = renderMain(<Main />, {
      route: '/something-that-does-not-match',
    })

    expect(getByTestId('no-match-screen')).toBeInTheDocument()
  })
})
