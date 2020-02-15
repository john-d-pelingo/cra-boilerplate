import React from 'react'

interface RenderPropOptions {
  on: boolean
  toggle: () => void
}

interface ToggleProps {
  children: (renderPropOptions: RenderPropOptions) => React.ReactNode
}

interface ToggleState {
  on: boolean
}

class Toggle extends React.Component<ToggleProps, ToggleState> {
  state = { on: false }

  render() {
    return this.props.children({ on: this.state.on, toggle: this.toggle })
  }

  private toggle = (): void => this.setState(({ on }) => ({ on: !on }))
}

export default Toggle
