import React, { Fragment } from 'react';
import './App.css';

// Components
import ContextExample from './components/1.context';
import ErrorBoundaryExample from './components/2.error-boundaries';
import { RefsExample, RefsExample2 } from './components/3.refs';
import { FragmentExample, FragmentExample2 } from './components/4.fragments';
import HigherOrderComponentsExample from './components/5.higher-order-components';
import FunctionAsChildrenExample from './components/6.functions-as-children';
import OptimizeShouldComponentUpdateExample from './components/7.optimize_shouldComponentUpdate';
import OptimizeWithPureComponentExample from './components/8.optimize_pureComponent.jsx';
import OptimizeListWithPureComponentExample from './components/9.optimize_list_pureComponent';
import OptimizeListWithImmerExample from './components/10.optimize_list_with_immer';
import PortalExample from './components/11.portal';
import ProfilerExample from './components/12.profiler';
import RefsAndDomExample from './components/13.refs-and-dom';
import RenderPropsExample from './components/14.render-props';

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

      <h3>7. Optimize react with shouldComponentUpdate</h3>
      <OptimizeShouldComponentUpdateExample />
      <hr />

      <h3>8. Optimize with PureComponent</h3>
      <OptimizeWithPureComponentExample />
      <hr />

      <h3>9. Optimize list with PureComponent</h3>
      <OptimizeListWithPureComponentExample />
      <hr />

      <h3>10. Optimize list with Immer</h3>
      <OptimizeListWithImmerExample />
      <hr />

      <h3>11. Portal Example</h3>
      <PortalExample />
      <hr />

      <h3>12. Profiler Example</h3>
      <ProfilerExample />
      <hr />

      <h3>13. Refs and DOM Example</h3>
      <RefsAndDomExample />
      <hr />

      <h3>14. Render Props Example</h3>
      <RenderPropsExample />
      <hr />
    </Fragment>
  );
}

export default App;
