import React, { Component, useState } from 'react';

export default function LifeCycleExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show example</button>
      {show && <ExampleComponent />}
    </div>
  );
}

class ExampleComponent extends Component {
  /*
   * Mounting lifecycle methods
   */

  // Common Use: Setting up state, creating refs and method binding.
  constructor() {
    super();
    this.state = { count: 1 };
    console.log('constructor');
  }

  // Common Use: Returning a state object based on the initial props.
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', { props, state });
    return { count: 2 };
  }

  // Common Use: Returning component JSX
  render() {
    console.log('render');

    return (
      <>
        <div>Count is {this.state.count}</div>
        <button onClick={() => this.setState({ count: (Math.random() * 100) })}>Random</button>
      </>
    );
  }

  // Common Use: Starting AJAX calls to load in data for your component.
  componentDidMount() {
    console.log('componentDidMount');
  }

  /*
   * Updating lifecycle methods
   */
  
  // Not use in PureComponent since PureComponent support it by default
  // Common Use: Controlling exactly when your component will re-render.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', { nextProps, nextState });

    // Condition to return here to prevent re-render for performance
    return true;
  }

  // Common Use: Taking a look at some attribute of the current DOM,
  // and passing that value on to componentDidUpdate.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', { prevProps, prevState });

    // This data will be passing to componentDidUpdate
    return 'hihi';
  }

  // Common Use: Reacting (hah!) to committed changes to the DOM.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', { prevProps, prevState, snapshot });
  }

  // Common Use: Cleaning up any leftover debris from your component.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /*
   * Error lifecycle methods
   */

  // Common Use: Updating state to display an error screen
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError');
    return { hasError: true };
  }

  // Note that componentDidCatch only works for errors in the render/lifecycle methods.
  // If your app throws an error in a click handler, it will not be caught.
  // Common Use: Catching and logging errors.
  componentDidCatch(error, info) {
    console.log('componentDidCatch');
  }
}
