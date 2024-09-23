import React from "react";
import { useTranslation } from "react-i18next";

import star from "../../assects/images/Star.png";
import licimg2 from "../../assects/images/licimg (2).png";
import licimg3 from "../../assects/images/licimg (3).png";
import Button from "../../components/Button/button";

const items = [
    {
      id: 1,
      city: "Dubai",
      status: "Preparations on-going",
      bgClass: "bgimg", 
    },
    {
      id: 2,
      city: "Miami",
      status: "Coming Soon",
      bgClass: "bgimg2",
    },
    {
      id: 3,
      city: "Marbella (Spain)",
      status: "Coming Soon",
      bgClass: "bgimg3",
    },
  ];

const DreamcarsOpenSec = () => {
    const { t } = useTranslation();

  return (
    <div className="opensinbggr py-[2rem] ">
     <div className="bgimage w-[100%] max-w-[1240px] mx-auto">
     <div className="opensinbgsndgr w-[100%] h-[100%]">
     <div className="py-[3rem] xs:py-[2rem] space-y-[50px]">
        <div>
          <h3 className="text-[46px] text-center xs:text-[24px] xs:text-center font-[700] leading-[130%] text-[#fff]"> Dreamcars Opens in </h3>
        </div>
        <div className="flex justify-between max-w-[1160px] mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className={`${item.bgClass} pt-[25px] px-[30px] pb-[20px] w-[100%] max-w-[364px] rounded-[10px] min-h-[491px] flex justify-between flex-col`}
        >
          <h4 className="text-[36px] font-[700] text-[#fff] textshad max-w-[200px] w-[100%] leading-[130%]">{item.city}</h4>
        <div className="flex justify-center">
        <div className="px-[13px] backdrop-blur-md rounded-[7px] bg-[#d1d5db1f] py-[14px] mx-auto ">
            <p className="text-[18px] text-[#fff] font-[500]">{item.status}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
       
       
      </div>
     </div>
     </div>
    </div>
  );
};
export default DreamcarsOpenSec;
