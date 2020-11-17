const iState = {
    name: "John",
    age: "22"
}

const reducer = (state = iState, action) => {
    if(action.type === "CHANGE_NAME"){
        return {
            name: action.payload,
            age: state.age
        }
    }
   return state;
}

export default reducer;