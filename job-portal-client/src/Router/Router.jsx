import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import EstimatedSalary from "../Pages/EstimatedSalary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import GetNoticedFaster from "../Pages/GetNoticedFaster";
import Signup from "../Pages/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [ 
        {path: "/", element: <Home/> },
        {path: "/post-job", element: <CreateJob/> },
        {path: "/my-job", element: <MyJobs/> },
        {path: "/salary", element: <EstimatedSalary /> },
        {path: "/edit-job/:id", element: <UpdateJob />,
          loader:({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
         },
         {path: "/login", element: <Login /> },
         {path: "/job/:id", element: <JobDetails/> },
         {path: "/get-noticed-faster", element: <GetNoticedFaster/> },
         {path: "/signup", element: <Signup/> },


        


        
      ],
    },
  ]);

  export default router;
