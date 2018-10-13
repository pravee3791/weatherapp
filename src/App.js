import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';
import Home from './view/Home'
import Weather from './view/weather';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

constructor(){
  super();
 
}

  render() {
    return (
      <div>
      <Router basename=''>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </Router>
  </div>
    );
  }
}

export default App;
