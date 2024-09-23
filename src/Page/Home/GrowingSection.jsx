
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import emampimg from "../../assects/images/exmpimg.png"
import growimg from "../../assects/images/growingimg.png"




const GrowingSection = () => {
    const { t } = useTranslation();

    return (
        <div className="growingbggr">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1226px]  mx-auto pb-[80px]" >
                    <div className="pl-[60px] xs:px-[20px] py-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t rounded-[22px] 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[517px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                    <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]">The Luxury Car Rental  Industry Is <span className="text-[#FFD02F]"> Growing Fast</span></h3>
                   <p className="text-[18px] xs:text-[16px] font-[400] text-[#fff]">The luxury car rental market is growing fast as more people want to drive high-end cars for special occasions or just to enjoy a premium experience. Dreamcars makes it possible for users to invest in these luxury rentals by buying shares through blockchain. This way, users can earn income from rentals without owning or maintaining the cars. As demand for luxury car rentals rises, <span className="text-[18px] xs:text-[16px] font-[700] text-[#FFD02F]">Dreamcars offers an easy and profitable way to be part of this growing market.</span> 
                   </p>

                    <div className="pt-[15px] 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden  xs:pt-[10px] flex xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[517px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
                <div className=" w-[40%] xs:w-[100%]">
                    <img src={growimg} className="" alt="" />
                </div>
                <div className="pt-[15px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex  xs:pt-[10px]  xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[517px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]" />
                    </div>
            </div>
             </div>
            </div>
    )
}
export default GrowingSection 
