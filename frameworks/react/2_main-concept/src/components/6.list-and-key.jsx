import React, { Component } from 'react';

class ListAndKey extends Component {
  render() {
    // return (
    //   <ol>
    //     {this.props.data.map(item => 
    //       <li key={item}>
    //         Item { item }
    //       </li>
    //     )}
    //   </ol>
    // );
    const items = this.props.data.map(item =>
      <li key={item}>
        Item { item }
      </li>
    );

    return (
      <ol>
        { items }
      </ol>
    );
  }
}

export default ListAndKey;
