import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdDirectionsBike } from "react-icons/md";
import { BsBagHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="bg-[blue]  flex justify-between px-7">
        <div className="pt-4 pr-0 pb-6 pl-0">Kawasaki</div>
        <div className="flex justify-center items-center gap-5 ">
          <div >
            <div className="flex gap-3">
              <ul className="flex justify-center items-center navbar-list">
                <FaRegCircleUser className="text-[#28a745]"/>
                <li>My Kawasaki</li>
              </ul>
              <ul className="flex justify-center items-center navbar-list">
                <HiOutlineShoppingCart className="text-[#28a745]"/>
                <li>Cart</li>
              </ul>
              <ul className="flex justify-center items-center navbar-list">
                <BsBagHeart className="text-[#28a745]"/>
                <li>Wish List</li>
              </ul>
              <ul className="flex justify-center items-center navbar-list">
                <MdDirectionsBike className="text-[#28a745]"/>
                <li>Test Ride</li>
              </ul>
              <ul className="flex justify-center items-center navbar-list">
                <IoLocationOutline className="text-[#28a745]"/>
                <li>Find Dealer</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <input type="text" placeholder="Search" className="bg-[#D7D7DA] border-none rounded-[3px] "/>
            </div>
            <div>
              <IoIosSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
