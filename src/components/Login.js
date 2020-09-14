import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase.js";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
    setEmail("");
    setPassword("");
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/images/amazon2.png" alt="logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login} className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to <strong>Fake Amazon Clone</strong>{" "}
          conditions of Use & Sale. Please see our privacy notice, our cookies
          notice and our intrest-based Ads notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
};
