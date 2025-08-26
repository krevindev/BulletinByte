import React from "react";
import NavBar from "../components/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="px-10 box-border">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
