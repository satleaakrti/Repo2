import {DETAILS} from './Type';

const initialState ={
   fname : '',
   lname: '',
   email : '',
   password : '',
   contact : ''
   }

   const formReducer= (state=initialState, action) => {
       
      switch(action.type){
          case DETAILS:
      return {
        ...state,
       fname : action.payload,
       lname : state.lname,
       email : state.email,
       password : state.password,
       contact : state.contact
      }
          
          default:
              return state;
      }
  }
  
  
  export default formReducer;