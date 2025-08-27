import React from "react";
import './Hello.css';

const Hello = (props) => {
  // return (
  //   <div>
  //     Hello, {props.name}
  //   </div>
  // )

  return React.createElement(
    "div",
    {id:"hello",className:"container"},
    React.createElement("h1", null, "Hello, Saiprasad")
  );
};

export default Hello;
