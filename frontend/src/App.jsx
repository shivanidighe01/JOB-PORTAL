import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/shared/Navbar";
import Signup from "./components/auth/signup";
import Login from "./components/auth/Login.jsx"
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
    path:'/',
    element:<Home/>
  },
  {
    path:'/',
    element:<Home/>
  }
])
function App() {
  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;
