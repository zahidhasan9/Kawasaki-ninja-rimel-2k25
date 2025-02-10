import React from "react"
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdDirectionsBike } from "react-icons/md";
import { BsBagHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const NavItem=[
  {
    id:"1",
    menu:"My Kawasaki",
    logo:FaRegCircleUser,
    link:''
  },
  {
    id:"2",
    menu:"Cart",
    logo:HiOutlineShoppingCart,
    link:'/cart'
  },
  {
    id:"3",
    menu:"Wish List",
    logo:BsBagHeart,
    link:''
  },
  {
    id:"4",
    menu:"Test Ride",
    logo:MdDirectionsBike,
    link:''
  },
  {
    id:"5",
    menu:"Find Dealer",
    logo:IoLocationOutline,
    link:''
  },
  
]

const Navbar = () => {
  const [Click,setClick]=useState(false)
  const handleClick=()=>{
    setClick(!Click)
    
  }
  console.log(Click)
  return (
    <>
      <div className="bg-[#ffffff]  flex justify-between px-7 border-b-[4px] border-[#6c3]">
      <div className="pt-4 pr-0 pb-6 pl-0 cursor-pointer ">
      <h1 className=" font-Nd_Loogos font-extrabold text-[18px] text-[#6c3]">Kawasaki</h1>
      <p className=" font-Nd_Loogos font-thin text-[7px] text-[#28a745]">Race for born</p>
      </div>
        <div className="flex justify-center items-center gap-5 ">
          <div >
            <div className="flex gap-3">
              
              {/* sample with out map  
              <ul className="flex justify-center items-center navbar-list">
                <FaRegCircleUser className="text-[#28a745]"/>    
                <li>My Kawasaki</li>
              </ul> */}
           {
            NavItem.map((item,index)=>
           (
              <NavLink to={item.link}>
                <ul key={index} className="navbar-list flex justify-center items-center cursor-pointer ">
                <div className="text-[#28a745]">
                  <item.logo className="text-[#28a745] hidden md:block lg:block"/>
                </div>
                <li className="font-Oswal_dSerif  leading-5 text-sm font-semibold hidden lg:block">{item.menu}</li>
              </ul>
              </NavLink>
            
           ))
           }

            </div>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className=" hidden lg:block">
              <input type="text" placeholder="Search" className="bg-[#D7D7DA] border-none rounded-[3px] font-Fira_Serif font-light text-sm "/>
            </div>
            <div>
              <IoIosSearch  className="cursor-pointer text-[#28a745] text-xl  hidden  lg:block"/>
            </div>
          </div>
          {/* -----toggle----- */}
          <div>
            <button onClick={handleClick} className="bg-green-500 font-Nd_Loogos lg:hidden md:hidden  ">CLICK</button>
          </div>
        </div>
      </div>
       {/* ---side bar--- */}
       <div className={Click?"block":"hidden"}>
          <div>
          {NavItem.map((item,index)=>
           (
              <ul key={index} className="navbar-list flex justify-center items-center cursor-pointer border-b-[1px] border-[#6c3] ">
                <div className="text-[#28a745] py-10">
                  <item.logo className="text-[#28a745] "/>
                </div>
                <li className="font-Oswal_dSerif  leading-5 text-sm font-semibold ">{item.menu}</li>
              </ul>
            
           ))
           }
          </div>
        </div>
    </>
  );
};

export default Navbar;
