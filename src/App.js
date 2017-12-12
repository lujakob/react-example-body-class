import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Manipulate body class example</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="page-wrapper">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
