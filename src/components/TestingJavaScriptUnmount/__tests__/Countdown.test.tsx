import 'jest-dom/extend-expect'

import React from 'react'
import { render } from 'react-testing-library'

import Countdown from '../Countdown'

jest.useFakeTimers()

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => null)
})

afterEach(() => {
  ;(console as any).error.mockRestore()
})

describe('components/Countdown', () => {
  it('does not attempt to set state when unmounted (to prevent memoty leaks)', () => {
    const { unmount } = render(<Countdown />)
    unmount()
    jest.runOnlyPendingTimers()
    expect(console.error).not.toHaveBeenCalled()
  })
})