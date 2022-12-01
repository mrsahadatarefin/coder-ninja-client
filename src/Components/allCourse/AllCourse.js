import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllCourse = ({ course }) => {
  const { _id, name, title, description, image } = course;

  return (
    
      <Container>
        <Row>
          <Col lg="4">
            <div style={ {height:"300px"}}>
              <h4>
                <Link to={`/details/${_id}`}  style={{color:'black',margin:'20px'}}>{name} </Link>
              </h4>
            </div>
          </Col>

          <Col lg="6">
            <div
              style={{
                display: "grid",
                justifyItems: "center",
                margin: "20px",
              }}
            >
              <Card style={{ width: "35rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button variant="outline-primary">
                    <Link to={`/details/${_id}`}>Details </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
   
  );
};

export default AllCourse;
