import {DETAILS} from './FormType';

 const details = (data) => {
    return (dispatch)=>{
        dispatch({
            type: DETAILS,
           payload : data
        })
      }
    
}

export default details;