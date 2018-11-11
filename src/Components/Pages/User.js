import React, { Component } from 'react';


class User extends Component {

  constructor (props){
    super(props)
    this.state = {
      isLoading:false,
      userId:[]
    }
  }
  

  componentDidMount(){
    fetch('http://43.224.117.211/uro-cola2/test-url')
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          isLoading:true,
          userId:data
        })
        //console.log(data);
      })
  }

  
    render() {
      var {isLoading,userId} = this.state;

      if(!isLoading)
      {
        return <div>Loading....</div>
      }
      else
      {
        return (<h1> 
              {
                this.state.userId.map((x, i) => 
                  <li key={i}>{x.id}</li>)
              }
            </h1>);
      }
    }
  }

export default User;