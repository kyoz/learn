import React, { Component } from 'react';

export default class StateAndLifeCycle extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h4 style={{ color: 'blue' }}>{ this.state.date.toLocaleTimeString() }</h4>
      </div>
    )
  }
}
