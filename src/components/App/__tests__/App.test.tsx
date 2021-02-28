import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import { App } from '../App'

describe('App', () => {
  it('renders an image', () => {
    const { getByAltText } = render(<App />)

    getByAltText('App Logo')
  })
})
