import React from "react";
import { useTranslation } from "react-i18next";

import star from "../../assects/images/Star.png";
// import licimg2 from "../../assects/images/licimg (2).png";
// import licimg3 from "../../assects/images/licimg (3).png";
import Button from "../../components/Button/button";

const BuildSection = () => {
    const { t } = useTranslation();

  return (
    <div className="buildbgimg">
      <div className="w-[100%] max-w-[1240px] space-y-[2rem] xs:space-y-[1rem] py-[4rem] xs:py-[2rem] mx-auto ">
        <div>
          <h3 className="text-[46px] xs:text-[24px] xs:text-center font-[700] leading-[130%] text-[#fff]"> {t('DreamSection.title')}</h3>
        </div>
        <div className="space-y-[25px] xs:space-y-[15px] max-w-[563px] xs:max-w-[100%] w-[100%]">
            <p className="text-[20px] xs:text-center font-[400] xs:text-[18px] xs:leading-[normal] text-white">
            Dreamcars Marketplace is revolutionizing luxury car ownership by offering the world’s first crypto-powered car rental platform. <br /><br />Use the Marketplace to buy, trade, and sell shares of your favorite cars while earning up to 50% APY. Powered by blockchain technology, each transaction is secure and transparent, ensuring the protection of your investments and ownership rights.<br /><br />

You’ll be able to build your dream car collection, featuring icons like the Lamborghini Aventador, Audi R8, Rolls-Royce Phantom, or Mercedes AMG GT. Choose the cars you've always dreamed of owning and begin your journey with Dreamcars.
            </p>
        </div>
        <div className="flex xs:justify-center xs:mx-auto trustbg max-w-[270px] xs:max-w-[200px] py-3 px-2 items-center space-x-2">
            <div className="flex space-x-[1px]">
                <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
                <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
                <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
                <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
                <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
            </div>
            <p className="text-[15px] font-[500] pt-[3px] xs:text-[10px] text-[#fff]">{t('DreamSection.Trusted')} <span className="font-[600] font-[Poppins]">1,200+</span> </p>
        </div>
        <div className="xs:flex xs:justify-center" id="token">
           <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="flex items-center justify-center font-[700] bgcolor w-[563px] xs:w-[130px] xs:h-[34px] py-[12px] xs:text-[14px] rounded-[10px]" />
         </div>
      </div>
    </div>
  );
};
export default BuildSection;
