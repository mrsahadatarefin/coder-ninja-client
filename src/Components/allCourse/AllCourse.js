import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllCourse = ({ course }) => {
  const { _id, title, description, image } = course;

  return (
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
  );
};

export default AllCourse;
