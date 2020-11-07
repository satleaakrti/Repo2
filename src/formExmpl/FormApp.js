import React, {Component} from 'react';

class TestRun extends Component{
constructor(props){ 
    super(props) 
    this.state = {
    fname:'',
    lname:'', 
    email:'',
     password:''
     ,phoneNo:''
    } 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  } 
  
   
  handleSubmit(event){ 
    const { fname, lname, email, password, phoneNo } = this.state 
    event.preventDefault() 
    alert(` 
      ____Your Details____\n
      FirstName : ${fname} 
      LastName : ${lname}  
      Email : ${email} 
      Password : ${password} 
      Phone No : ${phoneNo} 
    `) 
  } 
  
 
  handleChange(event){ 
    this.setState({ 
      [event.target.name] : event.target.value 
    }) 
  } 
  
  render(){ 
    return( 
      <form onSubmit={this.handleSubmit}> 
      <div>
      <h3> Welcome to React App</h3>
       <div> 
          <label >First Name</label> 
          <input 
            name='fname' 
            placeholder='First Name'
            value={this.state.fname} 
            onChange={this.handleChange} 
          /> 
        </div>
        <div> 
          <label >Last Name</label> 
          <input 
            name='lname' 
            placeholder='Last Name'
            value={this.state.lname} 
            onChange={this.handleChange} 
          /> 
        </div>
        <div> 
          <label >Email</label> 
          <input  
            name='email'
            placeholder='Email' 
            value = {this.state.email} 
            onChange={this.handleChange} 
          /> 
        </div> 
        
        <div> 
          <label>Password</label> 
          <input 
            type='password'
            name='password' 
            placeholder='Password'
            value={this.state.password} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label>Phone Number</label> 
          <input 
            name='phoneNo' 
            placeholder='Phone No'
            value={this.state.phoneNo} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <button>Click</button> 
        </div> 
        </div>
      </form> 
    ) 
  } 
}

  export default TestRun;