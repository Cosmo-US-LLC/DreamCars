import React, { useState, useEffect } from "react";
import DCBG from "../../assects/svgs/officialSponser-BG.svg";
import DCar from "../../assects/images/DC-cars.png";
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
       <div className="bgdccars">
       <div className="flex flex-col items-center px-4 backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask w-[90%] max-w-[1276px] mx-auto">
          {/* <img
            src={DCBG}
            alt="Mobile Banner"
            className="absolute object-cover w-full h-full "
          /> */}
          <div className="relative z-10 flex flex-col items-center gap-2 mt-8 pb-8">
          <img src={DCtext} alt="dc text" className="flex w-[186.78px] h-[28.72px] justify-center items-center " />
            <p className="text-white text-center font-lato text-[28px] font-[700] leading-[30px] capitalize">
                is the official Sponsor Of
            </p>
            <div className="px-1 py-1 mt-6 relative w-full  max-w-[100%] h-[86px] bg-[rgba(0,27,78,0.66)] backdrop-blur-md border border-white rounded-md flex justify-end items-start">
              <img
                src={officalMan}
                alt="dc text"
                className="max-w-[100px] h-auto absolute top-[-7px] left-0"
              />
              <div className="flex flex-col items-start justify-start">
                <p className="text-white text-center font-lato text-[28px] font-black leading-[25px] uppercase">
                  Ralfs Sirmacis
                </p>
                <p className="text-white font-lato text-[14px] font-semibold leading-[18px] capitalize ">
                  At the Rally Championship in Latvia
                </p>
              </div>
            <div className="flex justify-between items-center left-[33%] absolute bottom-[8%]  gap-2">
              <img
                src={worldRealyLogo}
                alt="dc text"
                className="w-[60px] "
              />
              <div className="flex w-[80px]  justify-center items-start text-[#fff] text-xs font-semibold">
                11 Jan, 2025
              </div>
            </div>
            </div>
            {/* <img
              src={DCar}
              alt="dc text"
              className="w-[90%] max-w-[500px] "
            /> */}
          </div>
        </div>
       </div>
      ) : (
        // Desktop Design
        <div className="relative bgdccars w-full h-[900px]">
          {/* <img
            src={DCBG}
            alt="Desktop Banner"
            className="absolute inset-0 object-cover w-full h-full"
          /> */}
         <div className="backdrop-blur-md bg-[#d1d5db1f]  pb-[40px] gradient-border-mask rounded-[30px] w-[100%] max-w-[1276px] mx-auto">
         <div className="relative z-10 flex flex-col items-center gap-1">
            <img
              src={DCtext}
              alt="dc text"
              className="flex w-[623.854px] h-[107.615px] justify-center items-center mt-8"
            />
            <p className="text-white text-center font-lato text-[43.754px] font-semibold leading-[57.225px] capitalize">
              is the official Sponsor Of
            </p>
            <div className="px-10 py-6 mt-10 relative w-[1070.188px] h-[264.905px] flex-shrink-0 rounded-[31.248px] border-[0.897px] border-white bg-[rgba(0,27,78,0.66)] backdrop-blur-[14.414px] flex flex-col items-end">
              <div className="overflow-hidden">
              <img
                src={officalMan}
                alt="dc text"
                className=" flex-shrink-0 max-w-[400px] absolute left-0 top-[-25px]"
              />
              </div>

              <p className="text-white text-center font-lato text-[99.52px] font-black leading-[97.244px] uppercase">
                Ralfs Sirmacis
              </p>
              <p className="text-white font-lato text-[39.245px] font-semibold leading-[51.509px] capitalize">
                At the Rally Championship in Latvia
              </p>
            <div className=" z-[99] pt-[20px] flex justify-between items-start max-w-[633px] ">
            <div className="w-[380px]">
            <img
              src={worldRealyLogo}
              alt="dc text"
              className="w-[120.209px] flex-shrink-0 left-[3%]   z-[9]"
            />
            </div>
            <div className="flex w-[355px] text-[35.029px] font-lato font-[800]  justify-end items-center text-[#fff]">
              11 Jan, 2025
            </div>
          </div>
            </div>
          </div>
          {/* <img
            src={DCar}
            alt="dc text"
            className=" w-[1000px] mx-auto flex-shrink-0 mt-[-4rem]"
          /> */}
         </div>
        
        </div>
      )}
    </div>
  );
};

export default OfficialSponsor;
