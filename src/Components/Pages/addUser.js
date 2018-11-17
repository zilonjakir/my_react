import React, { Component } from 'react';

class addUser extends Component {

  constructor (props){
    super(props)
    this.state = {
      title:"User Entry Form",
      inFeedBack:[],
      userdata:[]
    }
  }
  
  

  componentDidMount(){
    this.refs.name.focus();
    // fetch('http://43.224.117.211/uro-cola2/test-url')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     this.setState({
    //       isLoading:true,
    //       userId:data
    //     })
    //   })
  }

  // add(e){
  //     e.preventDefault();
  //     let myName = this.nameValue.value;
  //     alert(myName);
  //   }


  fSubmit = (e)=>{
    e.preventDefault();
    let userdata = this.state.userdata;
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;

    let data = {name,email,phone}

    userdata.push(data);

    this.setState({
      userdata:userdata
    })



    var dataFor = {
      "username": "ja",
      "password": "jakak"
   }


  //  fetch('https://mywebsite.com/endpoint/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       firstParam: 'yourValue',
  //       secondParam: 'yourOtherValue',
  //     })
  //   })



    fetch('http://softsenseit.com/university/add-new-user',{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    }).then(res=>res.json())
      .then(data=>{
        this.setState({
          inFeedBack:data
        })
        console.log(data);
      })
  }

  // componentWillMount(){
    

  // }




    render() {
      return (
        <div>
          <form ref="myForm">
            <div className="form-group">
              <label>Name:</label>            
              <input type="text" ref="name" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Email:</label>            
              <input type="text" ref="email" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Phone:</label>            
              <input type="text" ref="phone" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-default" onClick={(e)=>this.fSubmit(e)}>Submit</button>
          </form>
        </div>
      )
    }
  }

export default addUser;