import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";

import Course from "../Components/Course/Course";
import CourseD from "../Components/CourseD/CourseD";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import NothingPage from "../Components/NothingPage";
import Main from "../layout/Main";
import LOgin from "../Login/LOgin";
import Register from "../Register/Register";
import PriviteRoute from "./PriviteRoute/PriviteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/course",
        element: (
          <PriviteRoute>
            <Course></Course>
          </PriviteRoute>
        ),
        loader: () => fetch("https://coder-ninja-server-6.vercel.app/products"),
      },
      {
        path: "/details/:id",
        element: <CourseD></CourseD>,
        loader: ({ params }) =>
          fetch(`https://coder-ninja-server-6.vercel.app/product/${params.id}`),
      },

      {

        path:"/checkout/:id",
        element:<PriviteRoute><Checkout></Checkout></PriviteRoute>,
        loader:({params})=>
        fetch(`https://coder-ninja-server-6.vercel.app/product/${params.id}`),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <LOgin></LOgin>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path:"*",
        element:<NothingPage></NothingPage>
      },
    ],
  },
]);
