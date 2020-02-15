import React from 'react'

import Fade from './Fade'

interface HiddenMessageState {
  show: boolean
}

class HiddenMessage extends React.Component<{}, HiddenMessageState> {
  state = { show: false }

  toggle = (): void => {
    this.setState(({ show }) => ({ show: !show }))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <Fade in={this.state.show}>
          <div>{this.props.children}</div>
        </Fade>
      </div>
    )
  }
}

export default HiddenMessage
