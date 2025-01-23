import React from "react";
import Vehicles from "../Assets/VEHICLES/Vehicles.png";
import Vehicles1 from "../Assets/VEHICLES/Vehicles1.png";
import Vehicles2 from "../Assets/VEHICLES/Vehicles2.png";
import Vehicles3 from "../Assets/VEHICLES/Vehicles3.png";
import Vehicles4 from "../Assets/VEHICLES/Vehicles4.png";
import Vehicles5 from "../Assets/VEHICLES/Vehicles5.png";

const Vehicle = [
  {
    id: "1",
    src: Vehicles,
    title: "RIDGE® XR CREW LIMITED HVAC",
    price: "$38,099",
  },
  {
    id: "2",
    src: Vehicles1,
    title: "RIDGE® CREW HVAC",
    price: "$78,099",
  },
  {
    id: "3",
    src: Vehicles2,
    title: "RIDGE® XR DELUXE HVAC",
    price: "$88,099",
  },
  {
    id: "4",
    src: Vehicles3,
    title: "ELEKTRODE",
    price: "$2,099",
  },
  {
    id: "5",
    src: Vehicles4,
    title: "BRUTE FORCE® 450 4X4",
    price: "$6,699",
  },
  {
    id: "6",
    src: Vehicles5,
    title: "JET SKI® ULTRA® 160LX",
    price: "$16,699",
  },
];

const Featured = () => {
  return (
    <>
      <div className="bg-white pb-5">
        <div className="py-10">
          <div className="flex flex-col justify-end items-center">
            <div className="font-Oswal_dSerif text-4xl font-medium pb-2">
              FEATURED VEHICLES
            </div>
            <div className="border-b-[1px] border-[#6c3] w-[60%]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {Vehicle.map((item, index) => (
            <div key={index} className=" py-8">
              <img src={item.src} alt="" />
              <div className="text-center flex items-center justify-center flex-col text-black">
                <h1 className="text-base font-semibold">All-New 25</h1>
                <p className="font-Nd_Loogos text-1xl text- border-b-2 border-[#6c3]" >{item.title}</p>
                {/* <div className="font-Blinker_Serif font-medium border-b-2 border-[#6c3] w-[60%]" /> */}
                <p className="font-Fira_Serif font-light text-sm">MSRP: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center text-white py-5 ">
        <button className="text-center font-Oswal_dSerif py-5 px-6 bg-black text-base rounded-sm font-semibold">VIEW ALL FEATURED VEHICLES</button>
        </div>
      </div>
    </>
  );
};

export default Featured;
