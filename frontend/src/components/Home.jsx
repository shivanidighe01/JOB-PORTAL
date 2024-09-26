import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import LatestJob from "./LatestJob";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategoryCarousel></CategoryCarousel>
      <LatestJob></LatestJob>
      <Footer></Footer>
    </div>
  );
};

export default Home;
