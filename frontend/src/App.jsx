import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Signup from "./components/auth/signup";
import Login from "./components/auth/Login.jsx";
import Home from "./components/Home.jsx";
import Jobs from "./components/Jobs.jsx";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/jobs',
    element:<Jobs></Jobs>
  },
  {
    path:'/description/:id',
    element:<JobDescription></JobDescription>
  },
  {
    path:'/browse',
    element:<Browse></Browse>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  },
  //admin pages
{
  path:'/admin/companies',
  element:<Companies></Companies>
},
{
  path:'/admin/companies/create',
  element:<CompanyCreate></CompanyCreate>
},
{
  path:'/admin/companies/:id',
  element:<CompanySetup></CompanySetup>
},
{
  path:'/admin/jobs',
  element:<AdminJobs></AdminJobs>
},
{
  path:'/admin/jobs/create',
  element:<PostJob></PostJob>
},{
  path:'/admin/jobs/:id/applicants',
  element:<Applicants></Applicants>
}

 
])
function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
