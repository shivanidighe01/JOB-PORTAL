import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job.jsx";
const Jobs = () => {
  const JobArray = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="max-w-7xl mx-5 mt-5">
        <div className="flex gap-5">
        <div className="w-20%">
        <FilterCard></FilterCard>
        </div>
        {
            JobArray.length <=0 ? <span>Job Not Found</span> : (
                <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                    <div className="grid grid-cols-3 gap-4">
                        {
                             JobArray.map((item, index) => (
                                <div>
                                    <Job></Job>
                                </div>
                             ))
                        }
                    </div>
                </div>

            )
           
        }
        </div>
      </div>
    </div>
  );
};

export default Jobs;
