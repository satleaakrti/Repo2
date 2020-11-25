import FORM_TYPE from './FormType';

   const details = (data) => {
   console.log(data);
    return (dispatch)=>{
        dispatch({
            type: FORM_TYPE.DETAILS,
            payload: data
         
        })
      }
    
}

export default details;