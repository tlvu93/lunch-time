import React from "react";
import Navbar from "../components/navbar/navbar";

type Props = {
  children?: React.ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex flex-col bg-gray-100 flex-1 p-4 items-center">
        {props.children}
      </div>
    </div>
  );
};

export default AppLayout;
