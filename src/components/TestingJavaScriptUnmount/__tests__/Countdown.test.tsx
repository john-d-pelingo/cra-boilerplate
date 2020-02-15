/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import React from 'react'

import Countdown from '../Countdown'

jest.useFakeTimers()

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => null)
})

afterEach(() => {
  // eslint-disable-next-line no-extra-semi
  ;(console as any).error.mockRestore()
})

describe('components/Countdown', () => {
  it('does not attempt to set state when unmounted (to prevent memory leaks)', () => {
    const { unmount } = render(<Countdown />)
    unmount()
    jest.runOnlyPendingTimers()
    expect(console.error).not.toHaveBeenCalled()
  })
})
