import React from 'react'

interface CountdownState {
  remainingTime: number
}

class Countdown extends React.Component<{}, CountdownState> {
  state = { remainingTime: 10000 }

  interval: number | null = null

  componentDidMount() {
    const end = Date.now() + this.state.remainingTime

    this.interval = window.setInterval(() => {
      const remainingTime = end - Date.now()
      if (remainingTime <= 0) {
        if (this.interval) {
          clearInterval(this.interval)
        }

        this.setState({ remainingTime: 0 })
      } else {
        this.setState({
          remainingTime,
        })
      }
    })
  }

  componentWillUnmount() {
    if (this.interval) {
      window.clearInterval(this.interval)
      this.interval = null
    }
  }

  render() {
    return this.state.remainingTime
  }
}

export default Countdown
