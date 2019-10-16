import React, { PureComponent } from 'react';
import axios from 'axios';

class RenderPropsExample extends PureComponent {
  render() {
    return (
      <>
        <Counter
          render={({ increment, decrement, count }) => (
            <div>
              <div>Render props counter</div>
              <div>
                <p>{ count }</p>
                <button onClick={() => decrement()}>Decrement -</button>
                <button onClick={() => increment()}>Increment +</button>
              </div>
            </div>
          )}
        />

        <hr />
        <DataList
          link="https://jsonplaceholder.typicode.com/users"
          render={({ list, isLoading, error }) => (
            <div>
              <div>Random users</div>
              { error ? <div style={{color: "red"}}>{error.message}</div> : null }
              { isLoading ? (
                <div>Is loading..........</div>
              ) : (
                <ul>
                  { list.map(user => (
                  <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        />
      </>
    );
  }
}

class Counter extends PureComponent {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  }

  decrement() {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count
        })}
      </div>
    )
  }
}

class DataList extends PureComponent {
  constructor() {
    super();
    this.state = { isLoading: true, error: null, list: [] };

  }

  fetchData() {
    axios.get(this.props.link)
      .then(res => {
        this.setState({
          list: res.data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        });
      })
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    }, this.fetchData);
  }

  render() {
    return this.props.render(this.state);
  }
}

export default RenderPropsExample;
