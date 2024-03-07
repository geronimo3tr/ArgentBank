import React, { useState } from "react";
import { editUsername } from "../../redux/action/editUsername";
import { useDispatch } from "react-redux";

const EditForm = ({ onClose }) => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    editUsername(newUsername, dispatch);
    onClose();
  };

  return (
    <>
      <div className="overlay">
        <section className="edit-username-form">
          <div className="title">
            <i className="fas fa-xmark"></i>
            <h1>New Username</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>New Username</label>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditForm;
