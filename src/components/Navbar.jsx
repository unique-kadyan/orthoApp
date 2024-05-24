import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../logo/logo.png";
function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-700 items-center border-b">
      <ul className="hidden md:flex gap-8 pl-20">
        <Link to="/">
          <li>
            <img
              src={MyLogo}
              alt="Your Logo"
              className="logo w-auto h-12 mr-5"
            />{" "}
          </li>
        </Link>
        <Link to="/products">
          <li className="w-auto h-12 mr-4 pt-3 text-green-500">Products</li>
        </Link>
        <Link to="/pricing">
          <li className="w-auto h-12 mr-4 pt-3 text-red-300">Pricing</li>
        </Link>
        <Link to="/blog">
          <li className="w-auto h-12 mr-4 items-center pt-3 text-yellow-200">
            Blog
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
