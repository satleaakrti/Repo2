import React from "react";
import './Person.css';

const person = (props) => {
    const rn = Math.random();
    if(rn > 0.7){
      throw new Error("something went wrong");
    }

    return (
       
        <div className="Person" >
        <p onClick={props.click}>I am a {props.name} and I am {props.age} years old</p>
        <input type= "text" onChange={props.changed} value={props.name} />
        </div>
    )
};
export default person;
