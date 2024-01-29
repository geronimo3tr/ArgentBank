import React from "react";

function Icon(props) {
  return (
    <>
      <div className="icon-container">
        <img className="icon" src={props.icon} alt="test" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default Icon;
