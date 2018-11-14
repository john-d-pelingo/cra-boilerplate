import React from 'react'

interface IRenderPropOptions {
  on: boolean
  toggle: () => void
}

interface IToggleProps {
  children: (renderPropOptions: IRenderPropOptions) => React.ReactNode
}

interface IToggleState {
  on: boolean
}

class Toggle extends React.Component<IToggleProps, IToggleState> {
  state = { on: false }

  render() {
    return this.props.children({ on: this.state.on, toggle: this.toggle })
  }

  private toggle = (): void => this.setState(({ on }) => ({ on: !on }))
}

export default Toggle
