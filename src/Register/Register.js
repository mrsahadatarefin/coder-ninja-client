import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../Contexts/Authprovider/AuthProvider";
const Register = () => {
  const { providerLogin,createUser} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()

  const handleSubmit=event=>{
event.preventDefault();
const form =event.target;
const name =form.name.value;
const email = form.email.value;
const password = form.password.value;
console.log( name,email,password)

createUser(email,password)
    .then(result =>{
        const userId =result.user ;
        console.log(userId);
    })
    
.catch(e =>console.error(e));
}
  const handleGoogleSingIn = (event) => {


    providerLogin(googleProvider)

    .then(result =>{
      const user = result.user ;
      console.log(user) 
    })
    .catch (error => console.error(error))

    
  };
  return (
    <Form onSubmit={handleSubmit} style={{ margin: "auto", width: "30vw" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Enter name" />
      </Form.Group>
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
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Button
        onClick={handleGoogleSingIn}
        variant="primary"
        style={{ marginTop: "10px" }}
      >
        sing in with google
      </Button>
    </Form>
  );
};

export default Register;
