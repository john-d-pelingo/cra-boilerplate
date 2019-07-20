import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { reportError as mockedReportError } from '../../../helpers/api'
import ErrorBoundary from '../ErrorBoundary'

jest.mock('../../../helpers/api', () => ({
  reportError: jest.fn(() => Promise.resolve({ success: true })),
}))

function Bomb({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error('💣')
  }

  return null
}

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn())
})

afterEach(() => {
  ;(console.error as any).mockRestore()
})

describe('components/ErrorBoundary', () => {
  it('calls reportError and renders that there was a problem', () => {
    const { container, getByText, rerender } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    )
    rerender(
      <ErrorBoundary>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    )

    expect(mockedReportError).toHaveBeenCalledTimes(1)
    const error = expect.any(Error)
    const errorInfo = {
      componentStack: expect.stringContaining('Bomb'),
    }
    expect(mockedReportError).toHaveBeenCalledWith(error, errorInfo)
    expect(container).toHaveTextContent('There was a problem.')
    expect(console.error).toHaveBeenCalledTimes(2)

    // Clear out mocks from this point and forward
    ;(console.error as any).mockClear()
    ;(mockedReportError as any).mockClear()

    rerender(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    )
    fireEvent.click(getByText(/try again/i))

    expect(mockedReportError).not.toHaveBeenCalled()
    expect(container).not.toHaveTextContent('There was a problem.')
    expect(console.error).not.toHaveBeenCalled()
  })
})
