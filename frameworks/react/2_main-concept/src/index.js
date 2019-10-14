import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import { RenderingElementFn, RenderingElementClass } from './components/1.rendering-elements';
import ComponentProperties from './components/2.component-properties';
import StateAndLifeCycle from './components/3.state-and-lifecycle';
import HandlingEvents from './components/4.handling-events';
import ConditionalRendering from './components/5.conditional-rendering';
import ListAndKey from './components/6.list-and-key';
import ReactForm from './components/7.forms';
import LiftingStateUp from './components/8.lifting-state-up';
import Composition from './components/9.composition';
import ThinkingInReact from './components/10.thinking-in-react';

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

        <h3>4. Handling Events</h3>
        <HandlingEvents />
        <hr />

        <h3>5. Conditional Rendering</h3>
        <ConditionalRendering />
        <hr />

        <h3>6. List and Key</h3>
        <ListAndKey data={[1,2,3,4,5]} />
        <hr />

        <h3>7. Forms</h3>
        <ReactForm />
        <hr />

        <h3>8. Lifting State Up</h3>
        <LiftingStateUp />
        <hr />

        <h3>9. Composition</h3>
        <Composition />
        <hr />

        <h3>10. Thinking in React</h3>
        <ThinkingInReact />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
