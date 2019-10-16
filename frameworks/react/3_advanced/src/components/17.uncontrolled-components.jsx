import React, { PureComponent } from 'react';

class UncontrolledComponentExample extends PureComponent {
  constructor() {
    super();
    this.nameRef= React.createRef();
    this.genderRef = React.createRef();
    this.locationRef = React.createRef();
    this.fileRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log({
      name: this.nameRef.current.value,
      gender: this.genderRef.current.value,
      location: this.locationRef.current.value,
      files: this.fileRef.current.files
    });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.nameRef} defaultValue="default name" />
        </label>

        <br />

        <label>
          Gender
          <select defaultValue="female" ref={this.genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <br />

        <label>
          From vietnam
          <input type="checkbox" ref={this.locationRef} defaultChecked />
        </label>

        <br />

        <label>
          Attachments
          <input type="file" ref={this.fileRef} />
        </label>

        <br />

        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default UncontrolledComponentExample;
