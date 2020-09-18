import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authorize } from "../../firebase";

import "./Login.css";

function Login() {
   const history = useHistory();
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const signIn = (event) => {
    event.preventDefault();

    authorize
      .signInWithEmailAndPassword(email, password)
      .then((authorize) => {
        if (authorize) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //some fancy firebase login code ...
  };

  const register = (evnt) => {
    evnt.preventDefault();

    //create user login with credentials
    authorize
      .createUserWithEmailAndPassword(email, password)
      .then((authorize) => {
        //it successfully created a new uuser with email and password
        console.log(authorize);
        if (authorize) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //do some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h2>Sign-in</h2>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(evnt) => setPassword(evnt.target.value)}
          />

          <button className="login__SigninButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE Condition of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
