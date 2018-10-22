import React, {Component} from 'react'

class  Controller extends Component{
    constructor(props){
        super(props)
        this.state = {
            start : true,
            pause : false,
            lap : false,
            reset : false
        }
    }

    pauseHandler()
    {
        this.setState({
            ...this.state,
            start : true,
            pause : false,
            lap : false,
            reset:true
        })
    }

    lapHandler(){

    }

    resetHandler(){
        this.setState({
            ...this.state,
            start : true,
            pause : false,
            lap : false,
            reset : false
        })
    }

    startHandler(){
        this.setState({
            ...this.state,
            start : false,
            pause : true,
            lap : true
        })
    }

    getController(){
        let output = null

        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                    className="btn btn-success btn-lg ml-5" 
                    onClick={event=>this.startHandler()}
                    style={{marginTop:20}}>Start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output = (
                <div>
                    <button 
                        className="btn btn-primary btn-lg ml-5" 
                        onClick={event=>this.pauseHandler()}
                        style={{marginTop:20}}>Pause</button>
                        
                    <button 
                        className="btn btn-warning btn-lg ml-5" 
                        onClick={event=>this.lapHandler()}
                        style={{marginTop:20}}>Lap</button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button 
                        className="btn btn-success btn-lg ml-5" 
                        onClick={event=>this.startHandler()}
                        style={{marginTop:20}}>Start</button>
                        
                    <button 
                        className="btn btn-danger btn-lg ml-5" 
                        onClick={event=>this.resetHandler()}
                        style={{marginTop:20}}>Reset</button>
                </div>
            )
        }
        return output
    }


    render(){
        return(
            this.getController()
        )
    }
}

export default Controller