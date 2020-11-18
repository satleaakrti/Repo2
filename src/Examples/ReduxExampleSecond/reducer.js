const iState = {
    fname: "John",
    lname: "Sinha",
    email: "abc@gmail.com",
    password: "john",
    contact: "9879798700"
}

const reducer = (state = iState, action) => {
    if(action.type === "CHANGE_NAME"){
        return {
            fname: action.payload,
            lname: state.lname,
            email: state.email,
            password: state.password,
            contact: state.contact
            
        }
    }
   return state;
}

export default reducer;