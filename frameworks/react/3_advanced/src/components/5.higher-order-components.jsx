import React, { Component } from 'react';

const withRedBorder = WrappedComponent => class NewComponent extends Component {
  styles = {
    width: '180px',
    border: '1px solid red',
    padding: '8px',
    margin: '8px'
  };

  render() {
    return (
      <div className="red-border-wrapper" style={this.styles}>
        <WrappedComponent {...this.props} />
      </div>
    );
  }
}

function ComponentA() {
  return <input placeholder="Type some text" />
}

function ComponentB() {
  return (
    <label>
      Check me
      <input type="checkbox" />
    </label>
  );
}

function ComponentC() {
  return <span>WrappedComponent</span>
}

const ComponentAWithRedBorder = withRedBorder(ComponentA);
const ComponentBWithRedBorder = withRedBorder(ComponentB);
const ComponentCWithRedBorder = withRedBorder(ComponentC);

class HigherOrderComponentsExample extends Component {
  render() {
    return (
      <>
        <ComponentAWithRedBorder />
        <ComponentBWithRedBorder />
        <ComponentCWithRedBorder />
      </>
    );
  }
}

export default HigherOrderComponentsExample;
