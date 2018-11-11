import 'jest-dom/extend-expect'

import * as React from 'react'
import { render } from 'react-testing-library'

import App from '../App'

describe('components/App', () => {
  it('renders an image', () => {
    const { getByAltText } = render(<App />)
    const image = getByAltText('App Logo')

    expect(image).toHaveClass('appLogo')
  })
})
