import '@testing-library/jest-dom/extend-expect'

import { render, within } from '@testing-library/react'
import React from 'react'

import Modal from '../Modal'

describe('components/Modal', () => {
  it('modal shows the children', () => {
    render(
      <Modal>
        <div>test</div>
      </Modal>,
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { getByText } = within(document.getElementById('modal-root')!)

    expect(getByText('test')).toBeInTheDocument()
  })
})
