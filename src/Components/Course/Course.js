import React from "react";


import { useLoaderData } from "react-router-dom";
import AllCourse from "../allCourse/AllCourse";


const Course = () => {
  const courses = useLoaderData();
  console.log(courses)
  

  return (
    <div>
      {courses.map((course) => (
        <AllCourse key={course._id} course={course}></AllCourse>
      ))}

     
    </div>
  );
};

export default Course;
