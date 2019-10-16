import React, { PureComponent, StrictMode } from 'react';

class StrictModeExample extends PureComponent {
  render() {
    return (
      <>
        <div>Child component will be check in strict mode</div>
        <StrictMode>
          <ChildComponent />
        </StrictMode>
      </>
    );
  }
}

class ChildComponent extends PureComponent {
  render() {
    return <div>This is child component</div>;
  }
}

export default StrictModeExample;
