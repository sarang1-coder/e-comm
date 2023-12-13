import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center">
      <div className="logo mx-5">
        <Image src={"/images/logo.png"} height={20} width={50} alt="logo" />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl">
          <Link href={"/"}>
            <li>T-shirts</li>
          </Link>
          <Link href={"/"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-4 top-4 mx-4">
        <button>
          <FaCartShopping className="text-xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
