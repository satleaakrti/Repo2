
 const details = (data) => {
   console.log(data);
    return (dispatch)=>{
        dispatch({
            type: DETAILS,
           payload : data
        })
      }
    
}

export default details;