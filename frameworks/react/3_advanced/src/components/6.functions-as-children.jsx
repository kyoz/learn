import React, { Component } from 'react';

class FunctionAsChildrenExample extends Component {
  render() {
    return (
      <ListOfTenThings />
    );
  }
}

function Repeat(props) {
  let items = [];
  const styles = {
    border: '1px solid red',
    width: '180px',
    padding: '8px',
    margin: '8px'
  };

  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div className="Repeat" style={styles}>{items}</div>
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={4}>
      {index => <div key={index}>This is item {++index} in the list</div>}
    </Repeat>
  );
}

export default FunctionAsChildrenExample;
