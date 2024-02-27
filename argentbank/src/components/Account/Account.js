import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/action/profile";

function Account() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.profile.username);

  const fetchUserProfile = () => {
    dispatch(profile());
  };

  useEffect(() => {
    fetchUserProfile();
  }, [name]);

  return (
    <>
      <main className="dark-background">
        <article className="title-edit">
          <h1>welcome back {name} </h1>
          <button className="edit-button" onClick={fetchUserProfile}>
            Edit Name
          </button>
        </article>
      </main>
    </>
  );
}

export default Account;
