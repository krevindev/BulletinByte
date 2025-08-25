import React from "react";
import NavBar from "../components/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default HomeLayout;
