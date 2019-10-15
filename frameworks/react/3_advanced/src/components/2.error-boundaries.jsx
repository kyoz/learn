import React, { Component } from 'react';

class ErrorBoundaryExample extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div>This is normal text</div>
        <ErrorComponent /> 
      </ErrorBoundary>
    );
  }
}

class ErrorComponent extends Component {
  state = {
    user: undefined
  };

  render() {
    return (
      // Uncomment this line to emulate error
      // <div>{this.state.user.name}</div>
      <div>hihi</div>
    );
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null
    };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo
    });

    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div style={{color: 'red'}}>Something went wrong.</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundaryExample;
