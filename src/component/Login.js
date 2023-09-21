import React ,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { auth } from "../FireBase"
import { signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";

const Login = ({userSignOut , authUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((user)=>{
        console.log(user)
        navigate('/home');
    }).catch((error)=>{
        console.log(error)
        alert(error)
    })
    console.log(`'This is your' ${email} and ${password}`)
}
 
  return (
    <>
      <div className="p-5 container box w-50 m-5 w-md-25">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <div>
          {authUser ? <p>User is logged in</p>:<p>User is logged out</p>}
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
             value={email} 
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"/>
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
          <GoogleButton
            className="g-btn w-100 w-md-50 "
            type="dark"/>
        </div>
        <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <div className="d-grid gap-2">
            <Button onClick={userSignOut} variant="primary" type="Submit">
              Log Out 
            </Button>
          </div>
      </div>
      
    </>
  );
};

export default Login;