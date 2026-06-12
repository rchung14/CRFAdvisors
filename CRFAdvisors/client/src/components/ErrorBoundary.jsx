import React from 'react'

/**
 * Generic page-level error boundary. The fallback intentionally exposes no
 * stack traces, file paths, or component names.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-fallback">
          <h1>Something went wrong</h1>
          <p>
            An unexpected error occurred while loading this page. Please refresh
            the page or return to the homepage.
          </p>
          <a className="btn btn--primary" href="/">
            Back to Home
          </a>
        </main>
      )
    }
    return this.props.children
  }
}
