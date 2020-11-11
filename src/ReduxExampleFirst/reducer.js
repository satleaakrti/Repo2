 const iState = {
     name: "John",
     wishes: ["eat" ,"code"]
 }

 const reducer = (state = iState, action) => {
     if(action.type === "CHANGE_NAME"){
         return {
             name: action.payload
         }
     }
    return state;
 }

 export default reducer;