import React, { Component } from 'react';

class LiftingStateUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 0
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    if (value && name && !isNaN(value)) {
      this.setState({
        [name]: +value
      });
    }
  }

  render() {
    return (
      <div>
        <LiftingStateUpChild name="firstValue" onValueChange={ this.onValueChange } />
        <LiftingStateUpChild name="secondValue" onValueChange={ this.onValueChange } />
        <div>
          Total: <b>{ this.state.firstValue + this.state.secondValue }</b>
        </div>
      </div>
    );
  }
}

class LiftingStateUpChild extends Component {
  render() {
    return (
      <label>
        { this.props.name }
        <input type="number" name={ this.props.name }
               onChange={ this.props.onValueChange } />
        <br />
      </label>
    );
  }
}

export default LiftingStateUp;
