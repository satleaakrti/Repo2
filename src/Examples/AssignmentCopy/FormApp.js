import React, { useState } from 'react';
import details from './FormAction';
import { connect } from 'react-redux';
// import { Route, Switch, BrowserRouter } from 'react-router-dom';
//  import submit from './Submit';
// import { useHistory } from 'react-router-dom';

const FormApp = (props) => {

  /* const inputData = event => {
    this.props.actions.addToDo({ name: event.target.value });
  };

     const submitData = event => {
    console.log(this.props.name);
    // console.log(this.props.mobile);
    event.preventDefault();
  } */

  // const FormApp = (props) =>{
  //console.log(props.userData);
  //const history = useHistory();

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNo: ''
  })

  const handleClick = () => {
    // history.push('/submit');
     props.details(userDetails);
   }
  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }))
  }

  console.log(props.userData, "---props.userData---42")

  return (
    <div className="FormApp">
      <h3>Hii, Welcome to React App</h3>
      <div >
        <label> FirstName: </label>
        <input type="text" name="firstName" value={userDetails.firstName} onChange={e => handleChange(e)} />
      </div>
      <div>
        <label> LastName: </label>
        <input type="text" name="lastName" value={userDetails.lastName} onChange={e => handleChange(e)} />
      </div>

      <div>
        <label> Email: </label>
        <input type="text" name="email" value={userDetails.email} onChange={e => handleChange(e)} />
      </div>

      <div>
        <label> Password:   </label>
        <input type="password" name="password" value={userDetails.password} onChange={e => handleChange(e)} />
      </div>

      <div>
        <label> Contact No.: </label>
        <input type="text" name="contactNo" value={userDetails.contactNo} onChange={e => handleChange(e)} />
      </div>

      <p>
        <input type="button" value="Save" onClick={handleClick} />
      </p>
       {/* <BrowserRouter>
        <Switch>
          <Route path="/submit" component={submit} /></Switch>
      </BrowserRouter>  */}

    </div>
    // </Provider>
  );

}



const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    details: (data) => dispatch(details(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormApp);