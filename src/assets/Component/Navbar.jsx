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
      <div className="bg-[#a53535] pt-4 pr-0 pb-6 pl-0 ">
        <div>Kawasaki</div>
        <div>
          <div>
            <div>
              <ul>
                <div>
                  <FaRegCircleUser />
                </div>
                <li>My Kawasaki</li>
              </ul>
              <ul>
                <div>
                  <HiOutlineShoppingCart />
                </div>
                <li>Cart</li>
              </ul>
              <ul>
                <div>
                  <BsBagHeart />
                </div>
                <li>Wish List</li>
              </ul>
              <ul>
                <div>
                  <MdDirectionsBike />
                </div>
                <li>Test Ride</li>
              </ul>
              <ul>
                <div>
                  <IoLocationOutline />
                </div>
                <li>Find Dealer</li>
              </ul>
            </div>
          </div>
          <div>
            <div><input type='text' placeholder="Search"/></div>
            <div><IoIosSearch/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
