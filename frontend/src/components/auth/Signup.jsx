import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_END_POINT } from "@/utils/constant.js";
import "../../../src/indexx.css";
import { Toaster } from "../ui/sonner.jsx";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice.js";
import { Loader2 } from "lucide-react";
// import user

const signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });


  const navigate=useNavigate();
  const {loading,user}=useSelector(store=>store.auth);
  const dispatch=useDispatch();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };
  const changeRoleHandler = (e) => {
    setInput({ ...input, role: e.target.value});
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);

    const formData=new FormData();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("password",input.password);
    formData.append("role",input.role);
    if(input.file)
    {
      formData.append("file",input.file);
    }

    try {

      dispatch(setLoading(true));
      const res=await axios.post(`${USER_API_END_POINT}/register`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      });
        // console.log("response",res);
      if(res.data.success)
      {
        navigate("/login");
        toast.success(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "something went wrong");
    }
    finally
    {
      dispatch(setLoading(true));
    }
  };
  useEffect(()=>{
    if(user){
        navigate("/");
    }
},[])
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="john stark"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
            ></Input>
          </div>

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
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="0000000000"
              name="phoneNumber"
              value={input.phoneNumber}
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
          <div className="flex items-center gap-2">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              className="cursor-pointer"
              onChange={changeFileHandler}
            ></Input>
          </div>
          {
          loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Sign up
            </Button>
          )
          }
          <span className="text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default signup;
