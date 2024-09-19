import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../ui/button.jsx";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
    let user=false;
  return (
    <div className="bg-white m-2">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

            {
                !user 
                ? 
                <div className="flex gap-2 item-center">
                    <Button variant="outline">Login</Button>
                    <Button className="bg-[#835fc0] hover:bg-[#5428a0]">Signup</Button>
                </div>
                : 
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="rounded-[50px]"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      height={40}
                      width={40}
                    />
                  </Avatar>
                </PopoverTrigger>
    
                <PopoverContent className="w-80 shadow-lg shadow-grey-500/50 p-1">
                  <div className="flex gap-4 space-y-1">
                    <Avatar className="cursor-pointer ">
                      <AvatarImage
                        className="rounded mt-3"
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        height={40}
                        width={40}
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">user name</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
    
                  <div className="flexflex-col my-2 gap-3 text-grey-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2></User2>
                      <Button className="border-none" variant="link">
                        View Profile
                      </Button>
                    </div>
    
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut></LogOut>
                      <Button className="border-none" variant="link">
                        LogOut
                      </Button>
                    </div>
    
                   
                  </div>
                </PopoverContent>
              </Popover>
                
            }



          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
