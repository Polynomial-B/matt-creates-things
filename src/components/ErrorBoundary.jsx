import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Image template without content" />;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
