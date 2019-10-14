import React, { Fragment } from 'react';
import './App.css';

// TODO: https://hackernoon.com/how-to-use-the-new-react-context-api-fce011e7d87

// Components
import Context from './components/1.context';

function App() {
  return (
    <Fragment>
      <h3>Context</h3>
      <Context />
      <hr />
    </Fragment>
  );
}

export default App;
