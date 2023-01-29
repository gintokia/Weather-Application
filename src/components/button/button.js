import React from "react";
import './button.css';

//USAGE:  <Btn name="text" />, 
//where name is the text that the button displays
function Btn(props){
  return(
    <button className={"btn"}>{props.name}</button>
  );
}

export default Btn;