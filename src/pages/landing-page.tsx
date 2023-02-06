import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/34763-hero-on-its-way.json";
import officeAnimation from "../assets/93794-office-illustration.json";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="h-full border rounded-lg flex flex-col text-center font-bold overflow-hidden  ">
      <div className="flex flex-col justify-around flex-1 p-8">
        <p>Be todays Hero!</p>
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
      <div className="flex flex-col justify-around flex-1 bg-slate-700 p-8 ">
        <p className="text-white">Join the Crew</p>
        <Lottie animationData={officeAnimation} loop={true} />
      </div>
    </div>
  );
};

export default LandingPage;
