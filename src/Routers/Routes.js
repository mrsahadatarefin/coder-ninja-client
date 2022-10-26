import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Course/Course";
import CourseD from "../Components/CourseD/CourseD";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Main from "../layout/Main";

export const router =createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',
    element:<Home></Home>},
    {
        path:'/course',
        element:<Course></Course>,
        loader:()=>fetch('http://localhost:5000/allCourse')
        
    },
    {
        path:'/details/:id',
        element:<CourseD></CourseD>,
        loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
    },
    {
        path:'/faq',
        element:<Faq></Faq>
    },
    
   
    ]
}
])