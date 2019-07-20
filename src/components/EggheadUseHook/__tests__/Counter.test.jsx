import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Counter from '../Counter'

afterEach(() => {
  window.localStorage.removeItem('count')
})

describe('components/Counter', () => {
  it('increments the counter count', () => {
    const { container } = render(<Counter />)
    const button = container.firstChild

    expect(button.textContent).toBe('0')
    fireEvent.click(button)
    expect(button.textContent).toBe('1')
  })

  it('reads and updates localStorage', () => {
    window.localStorage.setItem('count', 3)
    const { container, rerender } = render(<Counter />)
    const button = container.firstChild

    expect(button.textContent).toBe('3')
    fireEvent.click(button)
    expect(button.textContent).toBe('4')

    // Force the useEffect to run
    rerender(<Counter />)

    expect(window.localStorage.getItem('count')).toBe('4')
  })
})
