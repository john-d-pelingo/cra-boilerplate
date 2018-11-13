import 'jest-dom/extend-expect'

import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { IFadeProps as MockedIFadeProps } from '../Fade'
import HiddenMessage from '../HiddenMessage'

jest.mock('react-transition-group', () => ({
  CSSTransition: (props: MockedIFadeProps) =>
    props.in ? props.children : null,
}))

describe('components/HiddenMessage', () => {
  it('shows hidden message when toggle is clicked', () => {
    const myMessage = 'Hello boy!'
    const { getByText, queryByText } = render(
      <HiddenMessage>{myMessage}</HiddenMessage>,
    )
    const toggleButton = getByText(/toggle/i)

    expect(queryByText(myMessage)).not.toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(getByText(myMessage)).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(queryByText(myMessage)).not.toBeInTheDocument()
  })
})