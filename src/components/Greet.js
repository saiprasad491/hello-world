import React from "react";

// function Greet(){
//   return <h1>Hello Vishwas</h1>
// }

// export const Greet=()=> <h1> Hello Vishwas </h1>
const Greet = (props) => {
  return (
    <>
      <h1> Hello, {props.name} ! </h1>
      {props.children}
    </>
  );
};

export default Greet;
