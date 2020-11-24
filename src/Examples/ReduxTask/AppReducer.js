import {DETAILS} from './FormType';

const initialState ={
    userData : { fname : '',
    lname: '',
    email : '',
    password : '',
    contact : ''
    }
  
   }

   const formAppReducer= (state=initialState, action) => {
       
      switch(action.type){
          case DETAILS:
      return {
        ...state,
        userData : action.payload
      }
          
          default:
              return state;
      }
  }
  
  
  export default formAppReducer;