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


  getStart(){
    setInterval(()=>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if(mili >= 10){
        sec = sec + 1
        mili = 0
      }

      if(sec >= 60){
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time:{
          min,
          sec,
          mili: mili + 1
        }
      })
    },100)
  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="display-3">Twinkle Cats </h1>
          <Title/>
          <CountDown time={this.state.time}/>
          <Controller start = {this.getStart.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
