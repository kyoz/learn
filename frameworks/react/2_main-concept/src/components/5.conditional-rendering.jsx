import React, { Component } from 'react';

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.login = this.login.bind(this);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {isLoggedIn ? (
          <div>You are logged in, welcome</div>
        ) : (
          <div>
            <button onClick={this.login}>Login</button>
          </div>
        )}
      </div>
    );
  }

  login() {
    this.setState({ isLoggedIn: true });
  }
}

export default ConditionalRendering;
