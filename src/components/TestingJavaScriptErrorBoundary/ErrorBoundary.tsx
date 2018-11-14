import React from 'react'

import { reportError } from '../../helpers/api'

interface IErrorBoundaryProps {
  children: React.ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
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
