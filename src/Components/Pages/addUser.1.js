import React, { Component } from 'react';

class addUser extends Component {

  constructor (props){
    super(props)
    this.state = {
      isLoading:false,
      userdata:[]
    }
  }
  
  

  componentDidMount(){
    // fetch('http://43.224.117.211/uro-cola2/test-url')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     this.setState({
    //       isLoading:true,
    //       userId:data
    //     })
    //   })
  }

  add(e){
      e.preventDefault();
      let myName = this.nameValue.value;
      alert(myName);
    }




    render() {
      return (
        <div>
          <form ref="myForm" onSubmit={this.add.bind(this)}>
            <div className="form-group">
              <label>Name:</label>            
              <input type="text" ref={el=>this.nameValue=el} className="form-control"/>
            </div>
            <div className="form-group">
              <label>Email:</label>            
              <input type="text" name="email" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Phone:</label>            
              <input type="text" ref="phone" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      )
    }
  }

export default addUser;