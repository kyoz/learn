import React, { Component, Fragment } from 'react';

class RefsExample extends Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.refs.myInput.focus();
  }

  render() {
    return (
      <Fragment>
        <span>Example 1</span>
        <input ref="myInput" />
        <button onClick={this.focus}>Focus input</button>
      </Fragment>
    );
  }
}

class RefsExample2 extends Component {
  constructor() {
    super();
    this.testRef = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    console.log(this.testRef);
    this.testRef.current.focus();
  }

  render() {
    return (
      <Fragment>
        <br />
        <span>Example 2</span>
        <input ref={this.testRef} />
        <button onClick={this.focus}>Focus input</button>
      </Fragment>
    );
  }
}

export { RefsExample, RefsExample2 };

