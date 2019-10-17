import React from 'react'

class User extends React.Component {
  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    const { params } = this.props.match;

    return (
      <>
        <h1>User with id {params.id}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}

export default User
