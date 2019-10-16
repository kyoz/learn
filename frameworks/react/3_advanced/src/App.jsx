import React, { Fragment } from 'react';
import './App.css';

// Components
import ContextExample from './components/1.context';
import ErrorBoundaryExample from './components/2.error-boundaries';
import { RefsExample, RefsExample2 } from './components/3.refs';
import { FragmentExample, FragmentExample2 } from './components/4.fragments';
import HigherOrderComponentsExample from './components/5.higher-order-components';
import FunctionAsChildrenExample from './components/6.functions-as-children';

function App() {
  return (
    <Fragment>
      <h3>1. Context</h3>
      <ContextExample />
      <hr />

      <h3>2. Error Boundary</h3>
      <ErrorBoundaryExample />
      <hr />

      <h3>3. Refs Example</h3>
      <RefsExample />
      <RefsExample2 />
      <hr />

      <h3>4. Fragment Example</h3>
      <FragmentExample />
      <FragmentExample2 />
      <hr />

      <h3>5. Higher Order Components</h3>
      <HigherOrderComponentsExample />
      <hr />

      <h3>6. Functions as Children</h3>
      <FunctionAsChildrenExample />
      <hr />
    </Fragment>
  );
}

export default App;
