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
      <div className="overlay"></div>
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <label>New Username</label>
          <i className="fa-solid fa-xmark edit-close" onClick={onClose}></i>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            value={tempNewUsername}
            onChange={handleUsernameChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default EditUsername;
