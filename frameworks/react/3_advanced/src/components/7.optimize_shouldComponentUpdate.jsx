import React, { Component } from 'react';

class OptimizeShouldComponentUpdateExample extends Component {
  state = { count: 1 };

  render() {
    return (
      <>
        <button onClick={() => this.setState(state => ({ count: state.count + 1}))}>
          Increase parent
        </button>
        <ChildComponent parentCount={this.state.count}/>
      </>
    );
  }
}

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.parentCount !== nextProps.parentCount) {
      return true;
    }

    if (this.state.count !== nextState.count) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState(state => ({ count: state.count + 1}))}>
          Increase child
        </button>
        <div>Child count: {this.state.count}</div>
        <div>Parent count: {this.props.parentCount}</div>
      </>
    );
  }
}

export default OptimizeShouldComponentUpdateExample;
