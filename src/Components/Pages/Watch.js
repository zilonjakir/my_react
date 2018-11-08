import React, { Component } from 'react';
import Title from '../Title/Title';
import CountDown from '../CountDown/CountDown'

import Controller from '../Controller/Controller'

import Laps from '../laps/laps'


class Watch extends Component {

    constructor (props){
        super(props)
        this.state = {
          time:{
            min:0,
            sec:0,
            mili:0
          },
          laps: []
        }
    }
  
  
    getStart(){
      this.intervelID = setInterval(()=>{
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
  
  
    getPauseID(){
      clearInterval(this.intervelID)
    }
  
  
    getReset(){
      this.setState({
        time:{
          min:0,
          sec:0,
          mili:0
        },
        laps: []
      })
    }
  
    getLap(){
      let time = {
        ...this.state.time
      }
      this.setState({
        ...this.state,
        laps: [time, ...this.state.laps]
      })
      console.log(this.state.laps)
    }
  
    render() {
      return (
          <div className="App">
          <div className="container">
            
            <h1 className="display-3">Twinkle Cats </h1>
            <Title/>
            <CountDown time={this.state.time}/>
            <Controller 
              start = {this.getStart.bind(this)}
              pause = {this.getPauseID.bind(this)}
              reset = {this.getReset.bind(this)}
              lap = {this.getLap.bind(this)} />
              <Laps className="my-5" laps={this.state.laps}/>
          </div>
        </div>
      );
    }
  }

export default Watch;