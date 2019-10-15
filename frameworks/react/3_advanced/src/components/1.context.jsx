import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({ number: this.state.number + 1 })
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        { this.props.children }
      </AppContext.Provider>
    );
  }
}

class ContextExample extends Component {
  render() {
    return <Red />
  }
}

class Red extends Component {
  render() {
    return (
      <AppProvider>
        <div className="red">
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
          <Blue />
        </div>
      </AppProvider>
    );
  }
}

class Blue extends Component {
  render() {
    return (
      <div className="blue">
        <AppContext.Consumer>
          {(context) => <button onClick={context.inc}>Click me</button>}
        </AppContext.Consumer>
        <Green />
      </div>
    );
  }
}

class Green extends Component {
  render() {
    return (
      <div className="green">
        <AppContext.Consumer>
          {(context) => context.number}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default ContextExample;
