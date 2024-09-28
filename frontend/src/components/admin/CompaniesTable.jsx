import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setSearchCompanyByText } from "@/redux/companySlice.js";

const CompaniesTable = () => {
  const { companies,searchCompanyByText } = useSelector(store => store.company);
  // console.log("companies data",companies);
  const navigate=useNavigate();
  const[filterCompany,setFilterCompany]=useState(companies);

  useEffect(()=>{
    const filterCompany = companies.length >=0 && companies.filter((company)=>{
      if(!searchCompanyByText)
      {
        return true;
      };
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filterCompany);
  },[companies,searchCompanyByText])


  // const {companies, searchCompanyByText} = useSelector(store=>store.company);

    // const [filterCompany, setFilterCompany] = useState(companies);
    // const navigate = useNavigate();

    // useEffect(()=>{ 
    //     // console.log('called');
    //     const filterCompany = companies((company)=>{
    //         if(!searchCompanyByText){
    //             return true;
    //         };
    //         return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase()) || company?.name.toLowerCase().includes(searchCompanyByText.toLowerCase());

    //     });
    //     setFilterCompany(filterCompany);
    // },[companies,searchCompanyByText])
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4}>
                You haven't registered any company yet!
              </TableCell>
            </TableRow>
          ) : (
            <>
              {companies?.map((company) => (
                <TableRow key={company._id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={company?.logo} />
                    </Avatar>
                  </TableCell>
                  <TableCell>{company?.name}</TableCell>
                  <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex gap-4 cursor-pointer">
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
