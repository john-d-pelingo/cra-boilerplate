import 'jest-dom/extend-expect'

import * as React from 'react'
import { render } from 'react-testing-library'

import Toggle from '../Toggle'

function setup() {
  const childrenArg = {} as any
  const children = (arg: any) => {
    Object.assign(childrenArg, arg)
    return null
  }
  render(<Toggle>{children}</Toggle>)
  return {
    childrenArg,
  }
}

describe('components/Toggle', () => {
  it('renders with on state and toggle function', () => {
    const { childrenArg } = setup()

    expect(childrenArg).toEqual({
      on: false,
      toggle: expect.any(Function),
    })
    childrenArg.toggle()
    expect(childrenArg).toEqual({
      on: true,
      toggle: expect.any(Function),
    })
  })
})