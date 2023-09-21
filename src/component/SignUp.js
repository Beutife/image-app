import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext"
import Login from "./Login";


const Signup = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      const { signUp} = useUserAuth();

      const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
          await signUp(email, password)
        }catch (err) {
          setError(err.message)
        }
      }
      return (
    <>
      <div className="m-5 box w-50 p-5">
        <h2 className="mb-3">Sign Up</h2>
        <Form onSubmit={ handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button onClick={Login} variant="primary" type="submit">
             Sign Up
            </Button>
          </div>
        </Form>
        <div className="p-4 mt-3 text-center">
        Already have an account <Link to="/"> Log In </Link>
      </div>
      </div>
      
    </>
  );
};
export default Signup;