import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Signup from "./components/auth/signup";
import Login from "./components/auth/Login.jsx";
import Home from "./components/Home.jsx";
import Jobs from "./components/Jobs.jsx";
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
  }
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // }
])
function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
