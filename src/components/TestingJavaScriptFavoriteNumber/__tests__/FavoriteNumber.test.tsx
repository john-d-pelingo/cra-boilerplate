import 'jest-dom/extend-expect'

import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'

import FavoriteNumber from '../FavoriteNumber'

describe('components/FavoriteNumber', () => {
  it('entering an invalid value shows an error message', () => {
    const { getByTestId, getByLabelText, queryByTestId, rerender } = render(
      <FavoriteNumber />,
    )
    const input = getByLabelText(/favorite number/i)
    fireEvent.change(input, { target: { value: 10 } })

    expect(getByTestId('error-message')).toHaveTextContent(
      /the number is invalid/i,
    )

    rerender(<FavoriteNumber max={10} />)

    expect(queryByTestId('error-message')).not.toBeInTheDocument()
  })
})
