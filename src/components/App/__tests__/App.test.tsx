import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import React from 'react'

import App from '../App'

describe('components/App', () => {
  it('renders an image', () => {
    const { getByAltText } = render(<App />)
    const image = getByAltText('App Logo')

    expect(image).toHaveClass('appLogo')
  })
})
