import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const AllCourse = ({course}) => {
    const {id,name,title,description,image}=course
    
    return (
        <div>
             <Container>
        <Row>
          <Col lg="4">
          
          <div style={{margin:"20px" }}><h4><Link to={`/details/${id}`}>{name} </Link></h4></div>
          
          
          </Col>


          <Col lg="6">

          <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
      
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="outline-primary"><Link to={`/details/${id}`}>Details </Link></Button>
      </Card.Body>
    </Card>

          </Col>
        </Row>
      </Container>
            
        </div>
    );
};

export default AllCourse;