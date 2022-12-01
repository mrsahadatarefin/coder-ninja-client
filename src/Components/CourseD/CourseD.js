import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CourseD = () => {
    const Details=useLoaderData()
    const{_id,name,title,description,image} = Details
    

    return (
       <div style={{ display:'grid',justifyItems:"center",margin:"20px"}} >
<Card style={{ width: '70rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title >{title}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <Button variant="warning" > 
          <Link to={`/checkout/${_id}`}>Get premium</Link></Button>{' '}
        </Card.Body>
      </Card>
       </div>
        
    );
};

export default CourseD;