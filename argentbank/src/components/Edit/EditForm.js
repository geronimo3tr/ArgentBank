import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importing useSelector from react-redux

import { editUsername } from "../../redux/reducer/profileSlice";

const EditForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");

  // Using useSelector to access Redux state
  const profileId = useSelector((state) => state.profile.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUsername(newUsername));
    localStorage.setItem(`username_${profileId}`, newUsername);
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
