import {DETAILS} from './Type';

 const details = (fname) => {
  // console.log(data);
    return (dispatch)=>{
        dispatch({
            type: DETAILS,
           payload : fname
        })
      }
    
}

export default details;