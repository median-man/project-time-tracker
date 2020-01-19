import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Login = () => {
  const { login, isPending, isLoggedIn, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // onSubmit(email, password);
    login(email, password);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (isPending) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            required
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button> <Link to="/signup">Sign up</Link>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
