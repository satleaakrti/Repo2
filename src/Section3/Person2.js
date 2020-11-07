import React from "react";

// functional component with output dynamic content
const person2 =() => {
    return <p>I am a Person and I am {Math.floor(Math.random() *30)} years old</p>
};
export default person2;