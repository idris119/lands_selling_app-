import React, { useContext } from 'react';
import { AuthContext } from '../context/authcontext';

export default function Profile() {
  const { current_user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>
        Hello <span>{current_user && current_user.username}</span>
      </h2>
      <i></i>
      <h3>Information</h3>
      <hr />
      <div>
        <p>Email:</p>
        <h6>{current_user && current_user.email}</h6>
      </div>
      <div>
        <p>Username:</p>
        <h6>{current_user && current_user.username}</h6>
      </div>
      <div>
        <p>Joined on:</p>
        <h6>{current_user && current_user.created_at}</h6>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
