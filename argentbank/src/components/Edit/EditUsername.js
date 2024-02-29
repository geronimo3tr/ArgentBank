import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewUsername } from "../../redux/reducer/profileSlice";

function EditUsername({ onClose }) {
  const dispatch = useDispatch();
  const [tempNewUsername, setTempNewUsername] = useState("");
  const newUsername = useSelector((state) => state.profile.newUsername);

  const handleUsernameChange = (e) => {
    setTempNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewUsername(tempNewUsername));
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
                value={tempNewUsername}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default EditUsername;
