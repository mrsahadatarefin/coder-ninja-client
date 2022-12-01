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
    <div>
        <Table striped>
      <thead>
        <tr>
          
          
          <th> Name</th>
          <th>Course</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>{user?.displayName}</td>
          <td>{name}</td>
          <td>PRice:{price} $</td>
        </tr>
       
      </tbody>
    </Table>
    </div>
  );
};

export default Checkout;
