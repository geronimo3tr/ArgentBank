import React from "react";

function Feature(props) {
  return (
    <>
      <div className="icon-container">
        <img className="icon" src={props.icon} alt={props.alt} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default Feature;
