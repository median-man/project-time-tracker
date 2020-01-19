import React from "react";
import { useAuth } from "../utils/auth";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome {user && user.email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
