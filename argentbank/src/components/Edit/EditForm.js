import React, { useState } from "react";
import { editUsername } from "../../redux/action/editUsername";
import { useDispatch, useSelector } from "react-redux";

const EditForm = ({ onClose }) => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.profile.firstname);
  const lastName = useSelector((state) => state.profile.lastname);
  const username = useSelector((state) => state.profile.username);

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
            <h1>Edit user info</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>User name</label>

              <input
                type="text"
                id="username"
                name="username"
                placeholder={username}
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="read-only-label">First Name</label>

              <input type="text" id="firstname" name="firstname" value={firstName} readOnly required disabled />
            </div>
            <div className="input-wrapper">
              <label className="read-only-label">Last Name</label>

              <input type="text" id="lastname" name="lastname" value={lastName} readOnly required disabled />
            </div>

            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button type="submit" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditForm;
