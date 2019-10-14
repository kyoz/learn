import React, { Component } from 'react';

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'female',
      address: '',
      isDev: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Submit form: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name:
          <input name="name" type="input"
                 value={ this.state.name }
                 onChange={ this.handleInputChange } />
        </label>

        <br />

        <label>
          Gender:
          <select name="gender"
                  value={ this.state.gender }
                  onChange={ this.handleInputChange }>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <br />

        <label>
          Address:
          <textarea name="address"
                    value={ this.state.address}
                    onChange={ this.handleInputChange }>
          </textarea>
        </label>

        <br />

        <label>
          Is developer:
          <input name="isDev" type="checkbox"
                 value={ this.state.isDev}
                 onChange={ this.handleInputChange }/>
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ReactForm;
