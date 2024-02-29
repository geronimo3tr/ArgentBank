import React from "react";

function Account(props) {
  return (
    <>
      <article className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.title}</h3>
          <p className="account-amount">{props.amount}</p>
          <p className="account-amount-description">{props.description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">view transaction</button>
        </div>
      </article>
    </>
  );
}

export default Account;
