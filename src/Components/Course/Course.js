import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link, useLoaderData } from "react-router-dom";
import AllCourse from "../allCourse/AllCourse";

const Course = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <div  >
              {courses.map((course) => (
                <h4 key={course._id}>
                  <Link
                    to={`/details/${course._id}`}
                    style={{ color: "black", margin: "30px", textDecoration:"none", padding:"10px", }}
                  >
                    {course.name}{" "}
                  </Link>
                </h4>
              ))}
            </div>
          </Col>

          <Col lg="8">
            {courses.map((course) => (
              <AllCourse key={course._id} course={course}></AllCourse>
            ))}
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Course;
