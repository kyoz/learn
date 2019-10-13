import React, { Component } from 'react';

function RenderingElementFn() {
  return <div>- with function</div>;
}

class RenderingElementClass extends Component {
  render() {
    return <div>- with class</div>;
  }
}

export {
  RenderingElementFn,
  RenderingElementClass
};
