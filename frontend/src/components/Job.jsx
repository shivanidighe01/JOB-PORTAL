import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
 
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
}

  const navigate=useNavigate();
  // const JobId='lllllldgdtdg';
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt)===0?"Today":`${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button className="rounded-full" variant="outline" size="icon">
          <Bookmark></Bookmark>
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo}></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
         {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="outline">
          {job?.position}position
        </Badge>
        <Badge className="text-[#FB3002] font-bold" variant="outline">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="outline">
          {job?.salary}LPA
        </Badge>
      </div>

      <div className="p-2">
        <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline" className="m-2">
          Details
        </Button>
        <Button className="bg-[#7209b7] p-2">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
