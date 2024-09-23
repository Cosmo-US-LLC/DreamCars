import React from "react";

import Car from "../../assects/images/logocar.png";
import lines from "../../assects/images/carline.png";

const Loader = () => {
  return (
    <>
      <div className="bg-[#fff] h-[600px]  flex items-center justify-center ">
        <div className="">
          <div className="mx-auto overflow-hidden max-w-[600px] xs:max-w-[290px]">
            <img className="m-auto h-[180px] xs:h-[80px] xs:w-[220px]" src={Car} alt="" />
           
           <div className=" flex items-center relative w-[700px] left-[-10%]">
            <div className="absolute h-[40px] w-[200px] left-[12%] bg-[#fff]"></div>
           <div className="space-y-[8px] pt-[8px] ">
              <img className="w-[100%] h-[2px] xs:h-[2px] road" src={lines} alt="" />
              <img className="w-[100%] h-[2px] xs:h-[2px] road" src={lines} alt="" />
              <img className="w-[100%] h-[2px] xs:h-[2px] road" src={lines} alt="" />
            </div>
           
            
          
           </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loader;
