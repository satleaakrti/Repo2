import {DETAILS} from './FormType';

const initialState ={
   // userData : {}
   fname : '',
   lname: '',
   email : '',
   password : '',
   contact : ''
   }

   const formAppReducer= (state=initialState, action) => {
       
      switch(action.type){
         /* case DETAILS:
          {
            fname= this.state.fname,
            lname= this.state.lname,
            email=this.state.email,
            password=this.state.password,
            contact=this.state.contact
          } */
          case DETAILS:
      return {
        ...state,
       // userData : action.payload
       fname : action.fname,
       lname : action.lname,
       email : action.email,
       password : action.password,
       contact : action.contact
      }
          
          default:
              return state;
      }
  }
  
  
  export default formAppReducer;