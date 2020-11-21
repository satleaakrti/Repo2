

export const ageUp = (val) => {
    return (dispatch)=>{
        dispatch({
            type: "AGE_UP",
           value: val
        })
      }
};

export const ageDown = (val) => {

    return (dispatch)=>{
        dispatch({
            type: "AGE_DOWN",
           value: val
        })
      }
   };