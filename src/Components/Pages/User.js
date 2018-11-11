import React, { Component } from 'react';


class User extends Component {

  constructor (props){
    super(props)
    this.state = {
      userId:[]
    }
  }
  

  componentDidMount(){
    fetch('http://192.168.0.37/apsisengine/id-test')
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          userId:data
        })
      })
  }

  
    render() {
      return (
          <div className="container">
            <h1>Hello User</h1>
          </div>
      );
    }
  }

export default User;