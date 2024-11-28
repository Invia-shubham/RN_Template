import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {hasError: false};

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;