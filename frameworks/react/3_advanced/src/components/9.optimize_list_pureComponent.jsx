import React, { PureComponent } from 'react';

class OptimizeListWithPureComponentExample extends PureComponent {
  constructor() {
    super();
    this.state = { list: [ { id: 1, name: 'Hi' } ] };
    this.add = this.add.bind(this);
  }

  add() {
    const value = this.refs.name.value;

    if (value.length === 0) {
      return;
    }

    this.setState({
      list: this.state.list.concat({ id: this.generateNewId(), name: value })
    });

    // Clean input
    this.refs.name.value = '';
    this.refs.name.focus();
  }

  generateNewId() {
    if (this.state.list.length === 0) {
      return 1;
    }

    return Math.max(...this.state.list.map(d => d.id)) + 1;
  }

  render() {
    return (
      <>
        <input ref="name" placeholder="Name" />
        <button onClick={this.add}>Add</button>
        {this.state.list.map(item => (
          <div key={item.id}>
            <b>{item.id} </b>-
            <span> {item.name}</span>
          </div>
        ))}
      </>
    );
  }
}

export default OptimizeListWithPureComponentExample;
