import React, { useState, useEffect } from "react";
import DCBG from "../../assects/svgs/officialSponser-BG.svg";
import DCar from "../../assects/svgs/DC-cars.svg";
import worldRealyLogo from "../../assects/svgs/world-realy-logo.svg";
import DCtext from "../../assects/svgs/dreamsCars.svg";
import officalMan from "../../assects/svgs/offical-man.svg";

const OfficialSponsor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-auto">
      {isMobile ? (
        <div className="flex flex-col items-center px-4 ">
          <img
            src={DCBG}
            alt="Mobile Banner"
            className="absolute object-cover w-full h-full "
          />
          <div className="relative z-10 flex flex-col items-center gap-2 mt-8">
            <img
              src={DCtext}
              alt="dc text"
              className="w-[90%] max-w-[300px] h-auto"
            />

            <p className="text-white text-center font-lato text-[24px] font-semibold leading-[30px] capitalize">
              official Sponsor Of
            </p>
            <div className="px-1 py-1 mt-6 relative w-full  max-w-[90%] h-[86px] bg-[rgba(0,27,78,0.66)] backdrop-blur-md border border-white rounded-md flex justify-end items-start">
              <img
                src={officalMan}
                alt="dc text"
                className="w-[110px] h-auto absolute top-[-7px] left-0"
              />
              <div className="flex flex-col items-start justify-start">
                <p className="text-white text-center font-lato text-[28px] font-black leading-[25px] uppercase">
                  Ralf Sirmacis
                </p>
                <p className="text-white font-lato text-[14px] font-semibold leading-[18px] capitalize ">
                  At the Rally Championship in Latvia
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4 ">
              <img
                src={worldRealyLogo}
                alt="dc text"
                className="w-[150px] mb-2"
              />
              <div className="flex w-[150px] h-[30px] justify-center items-center gap-2 rounded-md border border-white bg-[#FFD02F] shadow-md text-xs font-semibold">
                11 Jan, 2025
              </div>
            </div>
            <img
              src={DCar}
              alt="dc text"
              className="w-[90%] max-w-[500px] mt-8"
            />
          </div>
        </div>
      ) : (
        // Desktop Design
        <div className="relative w-full h-[900px]">
          <img
            src={DCBG}
            alt="Desktop Banner"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 flex flex-col items-center gap-1">
            <img
              src={DCtext}
              alt="dc text"
              className="flex w-[623.854px] h-[107.615px] justify-center items-center mt-14"
            />

            <p className="text-white text-center font-lato text-[43.754px] font-semibold leading-[57.225px] capitalize">
              official Sponsor Of
            </p>
            <div className="px-10 py-6 mt-10 relative w-[1030.188px] h-[264.905px] flex-shrink-0 rounded-[31.248px] border-[0.897px] border-white bg-[rgba(0,27,78,0.66)] backdrop-blur-[14.414px] flex flex-col items-end">
              <img
                src={officalMan}
                alt="dc text"
                className="w-[348.302px] h-[289.434px] flex-shrink-0 absolute left-0 top-[-27px]"
              />

              <p className="text-white text-center font-lato text-[99.52px] font-black leading-[97.244px] uppercase">
                Ralf Sirmacis
              </p>
              <p className="text-white font-lato text-[39.245px] font-semibold leading-[51.509px] capitalize">
                At the Rally Championship in Latvia
              </p>
            </div>
          </div>
          <img
            src={DCar}
            alt="dc text"
            className=" w-[1000px]  flex-shrink-0 absolute left-0 bottom-[-20px]"
          />
          <div className="absolute z-[99]   right-[50px] bottom-[70px]">
            <img
              src={worldRealyLogo}
              alt="dc text"
              className="w-[348.302px] mb-8 flex-shrink-0  z-[99]"
            />
            <div className="flex w-[348.264px] h-[40.424px]   justify-center items-center gap-[9.714px] flex-shrink-0 rounded-[7.771px] border-[0.971px] border-white bg-[#FFD02F] shadow-[0px_5.617px_5.617px_rgba(0,0,0,0.25)]">
              11 Jan, 2025
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficialSponsor;
