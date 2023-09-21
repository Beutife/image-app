import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { auth } from "../FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css"; // Import your custom CSS file for styling

const Login = ({ userSignOut, authUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <div>{authUser ? <p>User is logged in</p> : <p>User is logged out</p>}</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button onClick={signin} variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn" type="dark" />
        </div>
        <div className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
        <div className="d-grid gap-2 mt-3">
          <Button onClick={userSignOut} variant="primary" type="Submit">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
