import {DETAILS} from './FormType';

const initialState ={
    userData : {}
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
        userData : action.payload
      }
          
          default:
              return state;
      }
  }
  
  
  export default formAppReducer;