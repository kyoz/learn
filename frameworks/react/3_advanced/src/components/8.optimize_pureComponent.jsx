import React, { PureComponent } from 'react';

class OptimizeWithPureComponentExample extends PureComponent {
  state = { count: 1 };

  render() {
    return (
      <>
        <button onClick={() => this.setState(state => ({ count: state.count + 1}))}>
          Increase Parent
        </button>
        <ChildComponent parentCount={this.state.count} />
      </>
    );
  }
}

class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState(state => ({ count: state.count + 1}))}>
          Increase child
        </button>
        <div>Parent count: {this.props.parentCount}</div>
        <div>Child count: {this.state.count}</div>
      </>
    );
  }
}

export default OptimizeWithPureComponentExample;
