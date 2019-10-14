import React, { Component } from 'react';

class Composition extends Component {
  constructor() {
    super();
    this.state = { value: 'child' };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    alert(this.state.value);
  }

  render() {
    const children = (
      <div>
        <span>This is children pass though props.children</span>
        <button onClick={ this.onClick }>Click me</button>
      </div>
    );

    return (
      <CompositionTest children={ children } />
    );
  }
}

class CompositionTest extends Component {
  constructor() {
    super();
    this.state = { value: 'parent' };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    alert(this.state.value);
  }

  render() {
    return (
      <div>
        <h3>Title</h3>
        <button onClick={ this.onClick }>Click title</button>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Composition;
