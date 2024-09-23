
import React from "react";
import { useTranslation } from "react-i18next";

import icns1 from "../../assects/svgs/whticn (7).svg"
import icns2 from "../../assects/svgs/whticn (6).svg"
import icns3 from "../../assects/svgs/whticn (5).svg"
import icns4 from "../../assects/svgs/whticn (4).svg"
import icns5 from "../../assects/svgs/whticn (3).svg"
import icns6 from "../../assects/svgs/whticn (2).svg"
import icns7 from "../../assects/svgs/whticn (1).svg"
import Button from "../../components/Button/button";

import whatimg from "../../assects/images/whtimg.png"
import dcftcar2 from "../../assects/images/dcftimg (1).png"



const WhatTheySaySec = () => {
    const { t } = useTranslation();

    return (
        <div className="whatbggr">
             <div className="w-[100%] max-w-[1312px] relative mx-auto py-[80px]" >
           
             <div className="flex justify-between">
               <div className="w-[28%] space-y-[35px]">
                   <div className="max-w-[368px] h-[213px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t space-y-[10px] rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] max-w-[220px] text-center w-[100%]  font-[700] leading-[119.994%] ">The Rolls Royce of Crypto! </h4>
                       <img className="opacity-[0.5]" src={icns1} alt="" />
                   </div>
                   <div className="max-w-[368px] h-[213px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] max-w-[180px] w-[100%]  font-[700] leading-[119.994%] text-center ">Revolutionizing Luxury Car </h4>
                   <img className="opacity-[0.5]" src={icns2} alt="" />
                   </div>
                   <div className="max-w-[368px] h-[213px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] max-w-[220px] text-center w-[100%]  font-[700] leading-[119.994%] ">Alternative to Stock Market! </h4>
                   <img className="opacity-[0.5]" src={icns3} alt="" />
                   </div>
               </div>
               <div className="w-[28%] space-y-[4rem] pt-[5.3rem] w-[100%] flex flex-col items-center ">
                <h3 className=" text-[#FFD02F] text-[40px] font-[700] text-center leading-[130%]">What theY SAY  About Dreamcars</h3>
                <div className="max-w-[368px] h-[266px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] text-center max-w-[220px] w-[100%]  font-[700] leading-[119.994%] ">A New Era Of Cryptocurrency!</h4>
                   <img className="opacity-[0.5]" src={icns4} alt="" />
                   </div>
                   <img className="absolute bottom-[-10%] max-w-[732px] z-[1] w-[100%]" src={whatimg} alt="" />
               </div>

               <div className=" w-[28%] flex flex-col justify-cenetr space-y-[35px]">
                   <div className="max-w-[368px] h-[213px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] text-center max-w-[220px] w-[100%]  font-[700] leading-[119.994%] ">Potential for High ROI!</h4>
                   <img className="opacity-[0.5]" src={icns5} alt="" />
                   </div>
                   <div className="max-w-[368px] h-[213px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] text-center max-w-[220px] text-center w-[100%]  font-[700] leading-[119.994%] ">Own a piece of your dream car!</h4>
                   <img className="opacity-[0.5]" src={icns6} alt="" />
                   </div>
                   <div className="max-w-[368px] h-[213px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                       <h4 className="text-[#fff] text-[26px] text-center max-w-[220px] text-center w-[100%]  font-[700] leading-[119.994%] ">Unique Concept! </h4>
                   <img className="opacity-[0.5]" src={icns7} alt="" />
                   </div>
               </div>
           </div>
            
           </div>
            </div>
    )
}
export default WhatTheySaySec 
