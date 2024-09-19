import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Navbar = () => {
  return (
    <div className="bg-white">
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

          <Popover >
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage className="rounded-[50px]"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  height={40}
                  width={40}
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent>
              <h1>Hello</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
