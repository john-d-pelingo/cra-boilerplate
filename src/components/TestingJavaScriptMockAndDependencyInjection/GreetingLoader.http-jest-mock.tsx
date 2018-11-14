import React from 'react'

import { loadGreeting } from '../../helpers/api'

interface IGreetingLoaderState {
  greeting: string
}

class GreetingLoader extends React.Component<{}, IGreetingLoaderState> {
  inputRef = React.createRef<HTMLInputElement>()

  state = { greeting: '' }

  render() {
    return (
      <form onSubmit={this.loadGreetingForInput}>
        <label htmlFor="name">Name</label>
        <input id="name" ref={this.inputRef} />
        <button type="submit">Load Greeting</button>
        <div data-testid="greeting">{this.state.greeting}</div>
      </form>
    )
  }

  private loadGreetingForInput = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const inputNode = this.inputRef.current

    if (inputNode) {
      const { data } = await loadGreeting(inputNode.value)
      this.setState({ greeting: data.greeting })
    }
  }
}

export default GreetingLoader
