import React, { Component } from 'react';

export default class HandlingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Parent button</button>
        <span>{ this.state.toggle + '' }</span>
        <br />
        <HandlingEventChild />
      </div>
    );
  }
}

class HandlingEventChild extends Component {
  constructor() {
    super();
    this.state = { toggle: true };
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle.bind(this)}>Child button</button>
        {/* <button onClick={ () => this.setState({ toggle: !this.state.toggle }) }>Child button</button> */}
        <span>{ this.state.toggle + '' }</span>
      </div>
    );
  }
}
