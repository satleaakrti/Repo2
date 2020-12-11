
    import React from 'react';   
    import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
    import axios from 'axios'  
    import './AddStudent.css'  
    class Edit extends React.Component {  
        constructor(props) {  
            super(props)  
         
        this.onChangeId = this.onChangeId.bind(this);  
        this.onChangeName = this.onChangeName.bind(this);  
        this.onChangeSclName = this.onChangeSclName.bind(this);  

        this.onSubmit = this.onSubmit.bind(this);  
      
             this.state = {  
                Student_Id: '',  
                Student_Name : '',  
                School_Name: '',   
      
            }  
        }  
      
      componentDidMount() {  
          axios.get('http://localhost:3000/api/student/:id='+this.props.match.params.sid)  
              .then(response => {  
                  this.setState({   
                    Student_Id: response.data.sid, 
                    Student_Name: response.data.sname,  
                    SChool_Name: response.data.scl_name,  
                    });  
      
              })  
              .catch(function (error) {  
                  console.log(error);  
              })  
        }  
      
      onChangeId(e) {  
        this.setState({  
            Student_Id: e.target.value  
        });  
      }  
      onChangeName(e) {  
        this.setState({  
            Student_Name: e.target.value  
        });    
      }  
      onChangeSclName(e) {  
        this.setState({  
            School_Name: e.target.value  
        });  
    }  

      
      onSubmit(e) {  
        debugger;  
        e.preventDefault();  
        const obj = {  
            Student_Id:this.props.match.params.sid,  
           Student_Name: this.state.sname,  
          School_Name: this.state.scl_name,  
        };  
        axios.post('http://localhost:3000/api/students', obj)  
            .then(res => console.log(res.data));  
            debugger;  
            this.props.history.push('/Studentlist')  
      }  
        render() {  
            return (  
                <Container className="App">  
      
                 <h4 className="PageHeading">Update Student Informations</h4>  
                    <Form className="form" onSubmit={this.onSubmit}>  
                        <Col>  
                            <FormGroup row>  
                                <Label for="name" sm={2}>Student_Id</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="sid" value={this.state.Student_Id} onChange={this.onChangeId}  
                                    placeholder="Enter Id" />  
                                </Col>  
                            </FormGroup>  
                            <FormGroup row>  
                                <Label for="name" sm={2}>Student_Name</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="sname" value={this.state.Student_Name} onChange={this.onChangeName} placeholder="Enter Name" />  
                                </Col>  
                            </FormGroup>  
                             <FormGroup row>  
                                <Label for="address" sm={2}>School_Name</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="sname" value={this.state.School_Name} onChange={this.onChangeSclName} placeholder="Enter School Name" />  
                                </Col>  
                            </FormGroup>  
                    
                        </Col>  
                        <Col>  
                            <FormGroup row>  
                                <Col sm={5}>  
                                </Col>  
                                <Col sm={1}>  
                              <Button type="submit" color="success">Submit</Button>{' '}  
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
      
    export default Edit;  
