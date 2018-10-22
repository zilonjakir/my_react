import React, { Component } from 'react';

import './App.css';
import Title from './Title/Title';
import CountDown from './CountDown/CountDown'

import Controller from './Controller/Controller'

class App extends Component {

  constructor (props){
      super(props)
      this.state = {
        time:{
          min:0,
          sec:0,
          mili:0
        }
      }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="display-3">Twinkle Cats </h1>
          <Title/>
          <CountDown time={this.state.time}/>
          <Controller/>
        </div>
      </div>
    );
  }
}

export default App;
