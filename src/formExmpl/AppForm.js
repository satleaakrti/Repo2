import React, { Component, useState } from "react";



class TestRun extends Component{
  constructor(props){ 
    super(props) 
  this.state = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    contactNo : '',
    showForm: 'false'
};
}

handleSubmit =(event) => { 
  this.setState( {
    showForm : true
  })
} 

handleSubmitEdit =(event) => { 
  this.setState( {
    showForm :  false
  })
} 

handleChange = (event) => {
  const value = event.target.value;
  this.setState({
  [event.target.name]: value
});
} 

 /*  handleChangeFname = (event) => {
    const value = event.target.value;
  this.setState({
    [event.target.firstName]: value
  });
 }

 handleChangeLname = (event) => {
  const value = event.target.value;
this.setState({
  [event.target.lastName]: value
});
}

handleChangeEmail = (event) => {
  const value = event.target.value;
this.setState({
  [event.target.email]: value
});
}

handleChangePwd = (event) => {
  const value = event.target.value;
this.setState({
  [event.target.password]: value
});
}

handleChangeContact = (event) => {
  const value = event.target.value;
this.setState({
  [event.target.contactNo]: value
});
} */

    render(){
        console.log(this.state);
        return (
          <div className= "AppForm">
        
          <h3>Hii, Welcome to React App</h3>
          <div >  
          <label> FirstName:</label>
          {
            this.state.showForm == true ?  
              <label>
                { this.state.firstName }
              </label>
              : <input type="text"
              name= "firstName"
               value= {this.state.firstName } 
               onChange={this.handleChange}
              />
          }
            </div>
            <div>
            <label> LastName: </label>
            {
              this.state.showForm == true ? 
              <label> {this.state.lastName}
              </label>
              : <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
           }
         </div>

            <div>
            <label> Email: </label>
            {  this.state.showForm == true ? 
              <label> {this.state.lastName}
              </label>
              : <input type="text"  
              name= "email"
              value={this.state.email} 
               onChange={this.handleChange}
              />
              }
            </div>

            <div>
            <label> Password:   </label>
             { this.state.showForm == true ? 
             <label>{ this.state.password}</label>
             : <input type="password" 
              name= "password"
               value ={this.state.password}
               onChange={this.handleChange} />
             }
            </div>
            
            <div>
            <label> Contact No.: </label>
            { this.state.showForm == true ? 
            <label>{this.state.contactNo}</label> 
            : <input type="text" 
              name= "contactNo" 
              value ={ this.state.contactNo} 
             onChange={this.handleChange}
              />
              }
            </div>

          <p> { this.state.showForm == true ? <button onClick = {this.handleSubmitEdit}>Edit</button> 
          : <button onClick ={this.handleSubmit}>Click</button>
          }</p>
         
          </div>
        
        );
      } 
 }

export default TestRun;