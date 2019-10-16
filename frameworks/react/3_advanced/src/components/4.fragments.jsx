import React, { Component, Fragment } from 'react';

class FragmentExample extends Component {
  render() {
    return (
      <>
        <div>Child 1</div>
        <div>Child 2</div>
      </>
    );
  }
}

class FragmentExample2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' }
      ]
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.onInputKeyup = this.onInputKeyup.bind(this);
  }

  add() {
    const newValue = this.refs.input.value;
    const currentData = this.state.data;
    let newId = currentData.length > 0 ?  Math.max(...currentData.map(d => d.id)) + 1 : 1;

    if (newValue.length === 0) {
      return;
    }

    this.setState({
      data: [
        ...currentData,
        { id: newId, name: newValue }
      ]
    });

    // Clear input and refocus
    this.refs.input.value = '';
    this.refs.input.focus();
  }

  remove(id) {
    const currentData = this.state.data;
    const newData = currentData.filter(d => d.id !== id);

    this.setState({
      data: [
        ...newData
      ]
    });
  }

  onInputKeyup(e) {
    if (e.key !== 'Enter') {
      return;
    }

    this.add();
  }

  render() {
    return (
      <>
        <input type="text" ref="input" onKeyUp={this.onInputKeyup}/>
        <button onClick={this.add}>Add</button>
        <DataList data={this.state.data} onRemove={this.remove}/>
      </>
    );
  }
}

class DataList extends Component {
  render() {
    return (
      <div className="data-list">
        {this.props.data.map(item => (
          <Fragment key={item.id}>
            <div id={item.id}>
              <b>{item.id}</b>
              <span>{` - Item ${item.name}`}</span>
              <button onClick={() => this.props.onRemove(item.id)}>X</button>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}

export { FragmentExample, FragmentExample2 };
