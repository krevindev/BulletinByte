import React from "react";
import Image from "next/image";
import bulletinByteLogo from "../assets/bulletinbyte-logo.svg";

const NavLink = ({ name }) => {
  return (
    <a href="#" className="hover:text-orange-300 transition-colors ease-in">
      <li className="mx-5">{name}</li>
    </a>
  );
};

const NavBar = () => {
  return (
    <div className="flex justify-between bg-[#15151D] box-border py-[2%] px-[5%]">
      <div>
        <Image src={bulletinByteLogo} alt="BulletinByte Logo"/>
      </div>
      <div className="flex">
        <ul className="flex">
          <NavLink name="Home" />
          <NavLink name="Categories" />
          <NavLink name="About" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
