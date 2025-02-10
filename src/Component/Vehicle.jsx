import React from "react";
import {VihecleElectric,ATV,RID,WAT} from "../Data/Data"
import VehicleDatarender from "./vehicleDatarender";

const Vehicle = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] py-10  px-8 overflow-hidden">
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="font-Oswal_dSerif text-4xl font-medium py-2">
            FEATURED VEHICLES
          </h1>
          <div className="border-b-[1px] border-[#6c3] w-[60%]" />
        </div>

        <div className="md:flex  ">
          <div className="bg-fuchsia-400  md:w-[25%] py-5 px-3">
            <div className="flex flex-col items-start bg-[#e5e5e9] py-5 px-3">
              <div className="font-Oswal_dSerif w-full">
                <h1 className="font-medium text-[#505055] text-base">FILTER</h1>
                <h1 className="text-[#505055] text-sm font-medium mt-5 mb-2.5 pb-2.5 border-b-[1px] border-[#b5b5b9]">
                  VEHICLE CATEGORY
                </h1>
              </div>

              <div className=" flex flex-col font-Fira_Serif font-normal text-[12px] text-[#505055]">
              <label className="flex gap-x-2 mb-3 pl-5 ">
                <input
                  type="checkbox"
                  className=""
                  value="Motorcycle"
                />
                <h1> Motorcycle (11)</h1>
              </label>
              <label className="flex gap-x-2 mb-3 pl-5">
                <input
                  type="checkbox"
                  className=""
                  value="ATV"
                />
                <h1>ATV (5)</h1>
              </label>
              <label className="flex gap-x-2 mb-3 pl-5">
                <input type="checkbox" className="" />
                 <h1>Side x Side (11)</h1>
              </label>
              <label className="flex gap-x-2 mb-3 pl-5">
                <input
                  type="checkbox"
                  className=""
                  value="Watercraft"
                />
                <h1>Watercraft (2)</h1>
              </label>
              <label className="flex gap-x-2 mb-3 pl-5">
                <input
                  type="checkbox"
                  className=""
                  value="Electrification"
                />
                <h1>Electrification (3)</h1>
              </label>
            </div>
            </div>
          </div>

      <div className="md:w-[75%]">
      <VehicleDatarender Vihecle={VihecleElectric}/>
      <VehicleDatarender Vihecle={ATV}/>
      <VehicleDatarender Vihecle={RID}/>
      <VehicleDatarender Vihecle={WAT}/>
      </div>
          {/* <div className="bg-red-200 py-5 px-3">
            <div>
              <div className="mt-5 mb-10 font-Oswal_dSerif">
                <h1 className="text-[#76767c] text-2xl font-normal">
                  ELECTRIFICATION
                </h1>
              </div>
              <div className="flex flex-wrap gap-4 bg-pink-400">
                {VihecleElectric.map((item,index)=>
               <div>
                 <div className="shadow flex flex-col items-center justify-center h-80 w-[300px] bg-white">
                  <img src={item.src} alt={item.title}/>
                  <div className="text-center flex items-center justify-center flex-col text-black">
                <h1 className="text-sm font-Oswal_dSerif font-medium">2025</h1>
                <p className="font-Nd_Loogos text-1xl text- border-b-2 border-[#6c3]" >{item.title}</p>
                
                <p className="font-Fira_Serif font-light text-sm">MSRP: {item.price}</p>
              </div>
                </div>
               </div>
              )}
                
              </div>
              
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Vehicle;
