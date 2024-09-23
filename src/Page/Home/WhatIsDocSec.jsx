import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import whtimg from "../../assects/images/whatisimg.png";

const WhatIsDocSec = () => {
  const { t } = useTranslation();

  return (
    <div className="whatisbggr ">
      <div className=" w-[100%] py-[60px]">
        <div className="backdrop-blur-md flex justify-between py-[60px] px-[54px] rounded-[23px] bg-[#d1d5db1f] border-r border-t 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1240px] mx-auto ">
         
          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[638px] md:w-[100%] sm:w-[100%] w-[100%]  xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
            <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]">
            What Makes $DCARS <span className="text-[#FFD02F]">Special? </span>
            </h3>
            <p className="text-[20px] font-[400] text-[#fff] max-w-[570px] w-[100%]">
            The $DCARS token is the native cryptocurrency of the Dreamcars platform and the only way to own luxury rental cars using crypto. 
              <br />
              <br />
              <span className="font-[700]">Important:</span>{" "}
              <span className="text-[20px] font-[700] text-[#FFD02F]"> Without $DCARS, you can't purchase any car
              </span>{" "}
              on Dreamcars. You need to hold a certain amount of $DCARS to access the Dreamcars marketplace and fully engage with the ecosystem. By holding $DCARS tokens, you'll unlock access to exclusive features such as:
              <ul className="pl-5 pt-[15px] text-[#fff] text-[20px] font-[400] leading-[130%] list-disc">
                <li>Buying and selling rental cars</li>
                <li>Voting rights on car purchases</li>
                <li>Earn rental income from the cars</li>
                <li>Access all Dreamcars marketplace features</li>
                <li>Using the lending protocol to hedge against a car</li>
              </ul>
            </p>
            <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
              <Button
                link="#hero"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor w-[534px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-[50%]">
          <img src={whtimg} className="absolute right-[-2%] top-[10%] w-[100%] max-w-[650.339px]" alt="" />
          </div>
        </div>
           
      </div>
    </div>
  );
};
export default WhatIsDocSec;
