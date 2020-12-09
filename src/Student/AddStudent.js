import React from 'react';  
import axios from 'axios';  
//import './AddStudent.css';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Student_ID: '',  
Student_Name:'',  
School_Name:''
}  
}   
Addstudent=()=>{  
  axios.post('http://localhost:3000/api/students', {sid:this.state.Student_ID,sname:this.state.Student_Name,  
  scl_name:this.state.School_Name})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Studentlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Studentlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Student Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Student_ID</Label>  
          <Col sm={10}>  
            <Input type="text" name="sid" onChange={this.handleChange} value={this.state.Student_ID} placeholder="Enter Id" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Student_Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="sname" onChange={this.handleChange} value={this.state.Student_Name} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="address" sm={2}>School_Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="scl_name" onChange={this.handleChange} value={this.state.School_Name} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addstudent;  