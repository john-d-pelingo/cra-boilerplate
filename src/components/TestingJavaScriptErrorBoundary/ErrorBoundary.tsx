import React from 'react'

import { reportError } from '../../helpers/api'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true })
    reportError(error, errorInfo)
  }

  tryAgain = (): void => this.setState({ hasError: false })

  render() {
    return this.state.hasError ? (
      <div>
        <div>There was a problem.</div>{' '}
        <button onClick={this.tryAgain}>Try again?</button>
      </div>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
