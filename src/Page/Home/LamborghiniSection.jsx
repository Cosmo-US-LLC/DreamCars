
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import lambo from "../../assects/images/lambo.png"
import lambomob from "../../assects/images/lomboomob.png"


const LamborghiniSection = () => {
    const { t } = useTranslation();

    return (
        <div className="lombobggr  overflow-hidden pb-[75px] relative">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1255px] xs:unset mx-auto py-[3rem] xs:py-[2.8rem] backdrop-blur-md bg-[#dcdcdc0f] gradient-border-mask rounded-[34px] px-[3rem] xs:px-[1.5rem]" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                <div className=" xs:unset z-[8] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[517px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                    <h3 className="text-[46px] xs:w-[250px] xs:mx-auto xs:text-[24px] font-[700] leading-[130%] text-[#fff]">{t('LamborghiniSec.title')} <span className="text-[#FFD02F]">{t('LamborghiniSec.titlespan')}</span></h3>
                   <p className="2xl:text-[18px] xl:text-[18px] lg:lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[400] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t('LamborghiniSec.para')}` }}>
                   </p>
                   <div className=" w-[100%] h-[172px] 2xl:hidden xl:hidden xs:pt-3 lg:hidden md:hidden sm:block block">
                    <img src={lambomob} className="absolute min-w-[440px] left-[-6%] w-[100%]" alt="" />
                </div>
                    <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor max-w-[517px] py-[12px] xs:py-[8px] w-[100%] xs:max-w-[323.093px] xs:mx-auto xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
                <div className=" w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden">
                    <img src={lambo} className="absolute 2xl:w-[830px] xl:w-[820px] lg:w-[820px] lg:w-[820px] md:w-[820px] sm:w-[820px] w-[820px] right-[-8%] top-[25%]" alt="" />
                </div>
               
            </div>
            <p className="xs:max-w-[510px] mx-auto text-[14px] xs:text-center text-[#fff] font-[400] pt-[1rem] xs:pt-[1rem]">{t('LamborghiniSec.paralats')}</p>

        </div>
        </div>
    )
}
export default LamborghiniSection 
