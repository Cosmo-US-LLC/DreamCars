import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Betamob from "../../assects/images/betamob3.png"




const BetaSection = () => {
    const { t } = useTranslation();

    return (
        <div className="betabggr">
             <div className="max-w-[1240px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto py-[4rem] xs:py-[2.8rem]" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
            <div className=" flex justify-center relative items-start  2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] "   >
                    <div className="backdrop-blur-md w-[88%] m-0 bg-[#d1d5db1f] border-r border-t rounded-[16px] 2xl:block xl:block lg:block md:block sm:hidden hidden ml-0 mr-auto mt-0 mb-0 h-[500px] xs:h-[250px]  ">
                    <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block w-[80%] mx-auto">
                    <img className="" src={Beta} alt="" />
                    </div>
                    </div>
                    <img className="2xl:block xl:block lg:block md:block sm:hidden hidden absolute right-[3%] xs:right-[3%] top-[-20%] xs:top-[-15%] w-[100%]  xs:h-[320px]" src={Beta} alt="" />
                </div>
                <div className=" 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                    <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]">{t('BetaSection.title')}</h3>
                   <ul className="pl-5 space-y-[10px]">
                    <li className="list-disc text-[20px] leading-[20px] xs:text-[16px] xs:text-start text-white">{t('BetaSection.para1')}</li>
                    <li className="list-disc text-[20px] leading-[20px] xs:text-[16px] xs:text-start text-white">{t('BetaSection.para2')}</li>
                    <li className="list-disc text-[20px] leading-[20px] xs:text-[16px] xs:text-start text-white">{t('BetaSection.para3')}</li>
                    <li className="list-disc text-[20px] leading-[20px] xs:text-[16px] xs:text-start text-white">{t('BetaSection.para4')}</li>
                    <li className="list-disc text-[20px] leading-[20px] xs:text-[16px] xs:text-start text-white">{t('BetaSection.para5')}</li>
                   </ul>

                    <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[483px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
                <div className="backdrop-blur-md w-[88%] mt-[45px] mx-auto bg-[#d1d5db1f] border-r border-t rounded-[16px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block mt-0 mb-0 h-[500px] xs:h-[250px]  ">
                    <div className="2xl:hidden xl:hidden lg:hidden md:hidden -mt-[49px] sm:block block w-[100%] mx-auto">
                    <img className="" src={Beta} alt="" />
                    </div>
                    </div>
            </div>

        </div>
        </div>
    )
}
export default BetaSection 
