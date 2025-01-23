import React from 'react'
import Acce1 from "../Assets/Accessories/acce1.jpg";
import Acce2 from "../Assets/Accessories/acce2.jpg";
import Acce3 from "../Assets/Accessories/acce3.jpg";

const Vehicle = [
  {
    id: "1",
    src: Acce1,
    title: "ACCESSORY PACKAGES",
  },
  {
    id: "2",
    src: Acce2,
    title: "ACCESSORIES & APPAREL"
 },
  {
    id: "3",
    src: Acce3,
    title: "VEHICLE ACCESSORIES",
  }
]
const Accessories = () => {
  return (
    <>
     <>
      <div className="bg-[#202021] pb-5">
        <div className="py-10">
          <div className="flex flex-col justify-end items-center">
            <div className="font-Oswal_dSerif text-white text-4xl font-medium pb-2">
            ACCESSORIES & MERCHANDISE
            </div>
            <div className="border-b-[1px] border-[#6c3] w-[60%]" />
          </div>
        </div>

        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {Vehicle.map((item, index) => (
            <div key={index} className="flex items-center justify-center flex-col bg-black pb-8 rounded-md overflow-hidden shadow-xl border-[1px] border-[#6c3]">
              <img src={item.src} className='object-cover' alt="" />
              <div className="text-center flex items-center justify-center flex-col text-white mt-4">
                <h1 className="text-base font-semibold text-[#6c3] border-b-[1px] border-[#6c3]">SHOP KAWASAKI</h1>
                <p className="font-Oswal_dSerif text-xl font-extrabold " >{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center text-white py-5 ">
        <button className="text-center font-Oswal_dSerif py-5 px-6 bg-black text-base rounded-sm font-semibold border-[1px] border-[#6c3]">VIEW ALL FEATURED VEHICLES</button>
        </div>
      </div>
    </>
    </>
  )
}

export default Accessories