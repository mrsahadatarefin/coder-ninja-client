import React from "react";
import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authprovider/AuthProvider";



const LOgin = () => {
  const { singIN } = useContext(AuthContext);
  const navigate  =useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    singIN(email,password)
    .then (result =>{
      const user = result.user;
      console.log(user)
      form.reset()
      navigate('/course')
    })
    .catch (error =>console.error(error))
      
    
  };
  return (
    <Form onSubmit={handleSubmit} style={{ margin: "auto", width: "30vw" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
        sing in with google
      </Button>
    </Form>
  );
};

export default LOgin;
