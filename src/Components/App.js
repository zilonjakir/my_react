import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Watch from './Pages/Watch';
import User from './Pages/User';




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <div className="container">
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/watch" component={Watch}/>
            <Route path="/user" component={User}/>
          </Switch>         
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
