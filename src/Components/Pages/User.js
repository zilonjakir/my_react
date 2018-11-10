import React, { Component } from 'react';

const axios = require('axios');
class User extends Component {

  constructor (props){
    super(props)
    this.state = {
      userId:[]
    }
  }
  

  // componentDidMount1(){
  //   fetch('http://192.168.0.37/apsisengine/id-test')
  //     .then(res=>res.json())
  //     .then(data=>{
  //       this.setState({
  //         userId:data
  //       })
  //     })
  // }

  componentDidMount(){
    
    axios.get('http://192.168.0.37/apsisengine/id-test',{
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    })
    .then(results => console.log(results))
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