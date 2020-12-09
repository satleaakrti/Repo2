import { FORM_TYPE} from './FormType';

const initialState ={
   userData : {}
  //  fname : '',
  //  lname: '',
  //  email : '',
  //  password : '',
  //  contact : ''
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
          case FORM_TYPE.DETAILS:
      return {
        ...state,
       userData : action.payload
      //  fname : action.payload,
      //  lname : state.lname,
      //  email : state.email,
      //  password : state.password,
      //  contact : state.contact
      }
          
          default:
              return state;
      }
  }
  
  
  export default formAppReducer;