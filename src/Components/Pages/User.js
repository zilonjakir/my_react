import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { Link } from "react-router-dom";

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
        const columns = [
          {
            Header:"Name",
            accessor:"name",
            style:{
              textAlign:"left"
            }
          },{
            Header:"Email",
            accessor:"email"
          },{
            Header:"Mobile",
            accessor:"mobile"
          },{
            Header:"User Name",
            accessor:"username",
            sortable:false,
            filterable:false,
            width:100,
            maxWidth:100,
            minWidth:100
          },
          {
            Header:"Action",
            Cell:props=>{
              return(
                <div>
                  <button className="btn btn-success">Edit</button>
                  <span> </span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              )
            },
            sortable:false,
            filterable:false,
          }
        ]
        return (
          <div>
            <div className="text-right">
              <Link className="btn btn-primary" to="/add-new-user">Add</Link>
            </div>
            <ReactTable
              columns={columns}
              data={this.state.userId}
              filterable
              defaultPageSize={50}
              // showPaginationTop
              noDataText={"Please Wait"}
            >

            </ReactTable>
          </div>
        )
        // return (<h1> 
        //       {
        //         this.state.userId.map((x, i) => 
        //           <li key={i}>{x.id}</li>)
        //       }
        //     </h1>);
      }
    }
  }

export default User;