import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Components
import { RenderingElementFn, RenderingElementClass } from './components/1.rendering-elements';
import ComponentProperties from './components/2.component-properties';
import StateAndLifeCycle from './components/3.state-and-lifecycle';
import HandlingEvents from './components/4.handling-events';

class App extends Component {
  render() {
    return (
      <div>
        <h3>1. Rendering Element</h3>
        <RenderingElementFn />
        <RenderingElementClass />
        <hr />

        <h3>2. Component Properties</h3>
        <ComponentProperties name="This pass through property"/>
        <hr />

        <h3>3. State & Lifecycle</h3>
        <StateAndLifeCycle />
        <hr />

        <h3>4. HandlingEvents</h3>
        <HandlingEvents />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
