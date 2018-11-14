import 'jest-dom/extend-expect'

import React from 'react'
import { render, within } from 'react-testing-library'

import Modal from '../Modal'

describe('components/Modal', () => {
  it('modal shows the children', () => {
    render(
      <Modal>
        <div>test</div>
      </Modal>,
    )

    const { getByText } = within(document.getElementById('modal-root')!)

    expect(getByText('test')).toBeInTheDocument()
  })
})
