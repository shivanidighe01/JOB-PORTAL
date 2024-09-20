import React, { useState } from "react";
import Navbar from "../shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";

const Login = () => {
  const [input, setInput] = useState({
    // fullname:"",
    email: "",
    // phoneNumber:"",
    password: "",
    role: "",
    // file:""
  });
  const navigate=useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
    // console.log(setInput());
  };
  const changeRoleHandler = (e) => {
    setInput({ ...input, role: e.target.value });
    // console.log(setInput());
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post(`${USER_API_END_POINT}/login`,input,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });

      if(res.data.success)
      {
        navigate("/");
        toast.success(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "something went wrong");
    }
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johnstark@gmail.com"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            ></Input>
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="******"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            ></Input>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  id="r1"
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeRoleHandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  id="r2"
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeRoleHandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <span className="text-sm">
            Already have an account?
            <Link to="/signup" className="text-blue-600">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
