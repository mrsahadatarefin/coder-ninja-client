import { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authprovider/AuthProvider";

const Checkout = () => {
  const courses = useLoaderData();
  const {user}=useContext(AuthContext)
   const{_id,name,title,description,image,price} =courses

  console.log(courses);
  return (
    <div style={{ display:'grid',justifyItems:"center",margin:"20px"}} >
<Card style={{ width: '70rem' }}>
        <Card.Img  style={{ height:"50vh"}} src={image} />
        <Card.Body>

        <Card.Title> User name: {user.displayName}</Card.Title>
        <Card.Title> Course name : {name}</Card.Title>
        <Card.Title> Price: {price} $</Card.Title>
       
         
          
        </Card.Body>
      </Card>
       </div>
  );
};

export default Checkout;
