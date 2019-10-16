import React, { PureComponent } from 'react';

class RefsAndDomExample extends PureComponent {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <>
        <input ref={this.textInput} placeholder="Try to focus me" />
        <button onClick={this.focusInput}>Focus</button>
      </>
    );
  }
}

export default RefsAndDomExample;
