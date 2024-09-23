import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import ownimg from "../../assects/images/ownimg.png";

const OwnershipSection = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="Ownershipbggr ">
    <div className="owntopbggr h-[35px] w-[100%]">
    </div>
      <div className="relative w-[100%] py-[60px]">
        <div className="backdrop-blur-md flex justify-between py-[40px] px-[30px] rounded-[23px] bg-[#d1d5db1f] border-r border-t 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1361px] mx-auto ">
         
          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[571px] md:w-[100%] sm:w-[100%] w-[100%]  xs:py-0 xs:text-center sm:text-center  space-y-[15px]">
            <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]">
            Transfer Car Ownership
            </h3>
            <p className="text-[20px] font-[400] text-[#fff] max-w-[570px] w-[100%]">
            If you want to fully own the car instead of renting it, simply make a “buyout offer” to the other owners. <br /><br />
            Once they agree and you own all the shares, we transfer the ownership under your name and we can arrange shipping to over 20 countries through our trusted security and logistics partners.*
            </p>
            <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
              <Button
                link="#hero"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor w-[509px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]"
              />
            </div>
            <p className="text-[16px] font-[400] pt-[15px] text-[#fff]">*Additional shipping costs and taxes may apply</p>
          </div>
          <div className="">
          </div>
        </div>
            <img src={ownimg} className="w-[auto] absolute top-[2%] right-[0%] w-[100%] " alt="" />
      </div>
    <div className="ownbottmbggr h-[35px] w-[100%]">
    </div>
    </div>
    </>
  );
};
export default OwnershipSection;
