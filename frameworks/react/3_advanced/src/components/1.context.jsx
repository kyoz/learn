import React, { Component } from 'react';

class Context extends Component {
  render() {
    return <Red />
  }
}

class Red extends Component {
  render() {
    return (
      <div className="red">
        <Blue />
      </div>
    );
  }
}

class Blue extends Component {
  render() {
    return (
      <div className="blue">
        <Green />
      </div>
    );
  }
}

class Green extends Component {
  render() {
    return <div class="green">10</div>
  }
}

export default Context;
