import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
// Switch component helps us to render the components only when path
// matches otherwise it fallbacks to the not found component.
import './index.css';
import * as serviceWorker from './serviceWorker';

// Components
import App from './App';
import Users from './components/Users';
import Contacts from './components/Contacts';
import NotFound from './components/Notfound';

const routing = (
  <Router>
    <div>
      <ul>
        {/* <li><Link exact to="/">Home</Link></li> */}
        {/* <li><Link to="/users">Users</Link></li> */}
        {/* <li><Link to="/contacts">Contacts</Link></li> */}

        // NavLink is same Link but have capability to add style for activating route
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
        <li><NavLink to="/contacts" activeClassName="active">Contacts</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
