import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/reducer/profileSlice";

const EditUsername = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to update username in Redux store
    dispatch(setUsername(newUsername));
    onClose(); // Close the edit username modal
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

export default EditUsername;
