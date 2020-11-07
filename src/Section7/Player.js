import React from 'react';

const player = (props) => {
   return (
      <div>
         <p onClick={props.click}>I'm a Player: My name {props.name} and my score is {props.score}            </p>
         {props.children}
      </div>
   );
}
export default player;