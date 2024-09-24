import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">time of post</p>
        <Button className="rounded-full" variant="outline" size="icon">
          <Bookmark></Bookmark>
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          dolorem modi nesciunt.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="outline">
          12 position
        </Badge>
        <Badge className="text-[#FB3002] font-bold" variant="outline">
          part time
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="outline">
          24LPA
        </Badge>
      </div>

      <div className="p-2">
        <Button variant="outline" className="m-2">
          Details
        </Button>
        <Button className="bg-[#7209b7] p-2">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
