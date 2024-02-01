import React from "react";

function Card(props) {
  return (
    <>
      <h3 className="card-title">{props.title}</h3>
      {props.description && <p className="card-text">{props.description}</p>}
    </>
  );
}

export default Card;
