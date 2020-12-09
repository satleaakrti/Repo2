
    import React, { Component } from 'react';  
    import axios from 'axios';  
    import Table from './Table';  
      
    export default class Studentlist extends Component {  
      
      constructor(props) {  
          super(props);  
          this.state = {business: []};  
        }  
        componentDidMount(){  
          debugger;  
          axios.get('http://localhost:3000/api/student/:id')  
            .then(response => {  
              this.setState({ business: response.data });  
              debugger;  
      
            })  
            .catch(function (error) {  
              console.log(error);  
            })  
        }  
          
        tabRow(){  
          return this.state.business.map(function(object, i){  
              return <Table obj={object} key={i} />;  
          });  
        }  
      
        render() {  
          return (  
            <div>  
              <h4 align="center">Student List</h4>  
              <table className="table table-striped" style={{ marginTop: 10 }}>  
                <thead>  
                  <tr>  
                    <th>Student_ID</th>  
                    <th>Student_Name</th>  
                    <th>School_Name</th>  
                    <th colSpan="3">Action</th>  
                  </tr>  
                </thead>  
                <tbody>  
                 { this.tabRow() }   
                </tbody>  
              </table>  
            </div>  
          );  
        }  
      }  
