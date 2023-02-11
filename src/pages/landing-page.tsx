import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/34763-hero-on-its-way.json";
import officeAnimation from "../assets/93794-office-illustration.json";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

type Props = {};

const LandingPage = (props: Props) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (isAuthenticated) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="h-full border rounded-lg flex flex-col text-center font-bold overflow-hidden  ">
      <div className="flex flex-col justify-around flex-1 p-8 hover:bg-gray-200">
        <p>Be todays Hero!</p>
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
      <div
        onClick={handleRedirect}
        className="flex flex-col justify-around flex-1 bg-slate-700 hover:bg-slate-600 p-8 "
      >
        <p className="text-white">Join the Crew</p>
        <Lottie animationData={officeAnimation} loop={true} />
      </div>
    </div>
  );
};

export default LandingPage;
