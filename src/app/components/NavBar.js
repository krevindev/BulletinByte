import React from "react";
import Image from "next/image";
import bulletinByteLogo from "../assets/bulletinbyte-logo.svg";
import Link from "next/link";

const NavLink = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="hover:text-orange-300 transition-colors ease-in"
    >
      <li className="mx-5">{name}</li>
    </Link>
  );
};

const navlinksData = [
  { name: "Home", link: "/home" },
  { name: "Categories", link: "/categories" },
  { name: "About", link: "/about" },
];

const NavBar = () => {
  return (
    <div className="flex justify-between bg-[#15151D] box-border py-[2%] px-[5%] sticky top-0 left-0">
      <div>
        <Image src={bulletinByteLogo} alt="BulletinByte Logo" />
      </div>
      <div className="flex">
        <ul className="bellez-regular flex">
          {navlinksData.map((linkData, index) => {
            return (
              <NavLink key={index} name={linkData.name} link={linkData.link} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
