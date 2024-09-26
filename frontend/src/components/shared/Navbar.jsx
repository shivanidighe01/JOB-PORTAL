import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "../ui/button.jsx";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store.js";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { setUser } from "@/redux/authSlice.js";
import { toast } from "sonner";
import axios from "axios";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message);
    }
  };
  // let user=false;

  return (
    <div className="bg-white m-2 mx-10">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex gap-2 item-center">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#835fc0] hover:bg-[#5428a0]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="rounded-[50px]"
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    height={30}
                    width={30}
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80 shadow-lg shadow-grey-500/50 p-1">
                <div className="flex gap-4 space-y-1">
                  <Avatar className="cursor-pointer ">
                    <AvatarImage
                      className="rounded mt-3"
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                      height={30}
                      width={30}
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flexflex-col my-2 gap-3 text-grey-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2></User2>
                      <Button className="border-none" variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button
                      onClick={logoutHandler}
                      className="border-none"
                      variant="link"
                    >
                      LogOut
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
