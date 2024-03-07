import Account from "../../components/Account/Account";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/action/profile";
import EditForm from "../../components/Edit/EditForm";

function User() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const displayUsername = useSelector((state) => state.profile.username);

  const fetchUserProfile = () => {
    dispatch(profile());
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <main className="dark-profile-background">
        <article className="title-edit">
          <h1>welcome back {displayUsername} </h1>
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        </article>
        {isEditing && <EditForm onClose={() => setIsEditing(false)} />}
        <section className="account-card">
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </section>
      </main>
    </>
  );
}

export default User;
