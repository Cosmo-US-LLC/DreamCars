
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Simgimg from "../../assects/images/simpimg.png"
import Simgimgmob from "../../assects/images/simpimgmob (2).png"
import Simgimgicn from "../../assects/images/simpimgmob (3).png"




const SimpleandReliableSec = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#181818] overflow-hidden pt-[75px] xs:pb-[2.5rem]">
             <div className="xs:overflow-hidden 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1226px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] mx-auto relative py-[1.5rem] xs:py-[1.8rem] pl-[3rem] xs:pl-0 " >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
            
                <div className="relative z-[1] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[569px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:px-[2rem] xs:text-center sm:text-center  space-y-[25px]">
                  
                    <h3 className="text-[46px] xs:text-[24px] xs:max-w-[300px] xs:w-[100%] xs:mx-auto font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t('ProfitableSec.title')}` }}></h3>
                   <p className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[400] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t('ProfitableSec.para')}` }}></p>

                    <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center w-[100%]">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[569px] py-[12px] xs:py-[8px] xs:w-[300px] xs:mx-auto xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
                <div className=" xs:h-[320px] 2xl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[100%] w-[100%] flex justify-end xs:justify-center">
                <img src={Simgimg} className="2xl:block xl:block lg:block md:block sm:hidden hidden w-[100%] simpiumgbg opacity-[0.6]" alt="" />
                <img src={Simgimgmob} className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block w-[100%] simpiumgbg xs:absolute xs:bottom-[-8%] xs:right-[-0%]" alt="" />
                <img src={Simgimgicn} className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block w-[100%] simpiumgbg max-w-[70px] xs:absolute xs:bottom-[2%] z-[9] xs:right-[64%]" alt="" />
</div>
            </div>

        </div>
        </div>
    )
}
export default SimpleandReliableSec 
