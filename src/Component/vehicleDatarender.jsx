import React from "react";

const vehicleDatarender = ({ Vihecle }) => {
  return (
    <div className="bg-red-200 py-5 px-3 ">
      <div>
        <div className="mt-5 mb-10 font-Oswal_dSerif">
          <h1 className="text-[#76767c] text-2xl font-normal">
            {Vihecle[0].Category}
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 bg-pink-400">
          {Vihecle.slice(1).map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-[32%]">
              <div className="shadow flex flex-col items-center justify-center h-[344px] sm:h-auto md:h-80 bg-white">
                <img src={item.src} alt={item.title} className="object-cover" />
                <div className="text-center flex items-center justify-center flex-col text-black">
                  <h1 className="text-sm font-Oswal_dSerif font-medium">
                    2025
                  </h1>
                  <p className="font-Nd_Loogos text-1xl text- border-b-2 border-[#6c3]">
                    {item.title}
                  </p>

                  <p className="font-Fira_Serif font-light text-sm">
                    MSRP: {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default vehicleDatarender;
