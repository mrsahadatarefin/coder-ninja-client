import React from "react";


import { useLoaderData } from "react-router-dom";
import AllCourse from "../allCourse/AllCourse";

const Course = () => {
  const courses = useLoaderData();

  return (
    <div>
      {courses.map((course) => (
        <AllCourse key={course.id} course={course}></AllCourse>
      ))}

     
    </div>
  );
};

export default Course;
