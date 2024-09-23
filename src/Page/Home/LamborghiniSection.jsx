
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import lambo from "../../assects/images/lambo.png"
import lambomob from "../../assects/images/lomboomob.png"




const LamborghiniSection = () => {
    const { t } = useTranslation();

    return (
        <div className="lombobggr  overflow-hidden">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1255px] relative mx-auto py-[4rem] xs:py-[2.8rem] xs:backdrop-blur-md xs:bg-[#dcdcdc0f] xs:border-r xs:border-t xs:rounded-[24px] xs:px-[2rem]" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[517px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                    <h3 className="text-[46px] xs:w-[250px] xs:mx-auto xs:text-[24px] font-[700] leading-[130%] text-[#fff]">Lamborghini Huracan  Shares For <span className="text-[#FFD02F]">Only $10</span></h3>
                   <p className="2xl:text-[18px] xl:text-[18px] lg:lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[400] text-[#fff]">
                   Imagine owning a brand-new Lamborghini Huracan and <span className="2xl:text-[18px] xl:text-[18px] lg:lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[700] text-[#FFD02F]">earning up to $15,000 monthly</span> from this single car* without having to manage it yourself. <br /><br />
                    Dreamcars is breaking barriers by opening up the luxury rental car business to crypto users. Simply buy $DCARS, purchase shares of dream cars for as little as $10 for one share, and sell them from the comfort of your home at any time. In the past, you would have needed to <span className="2xl:text-[18px] xl:text-[18px] lg:lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[700] text-[#FFD02F]">spend a fortune or take out large bank loans</span> to start your own luxury car rental business. Plus, you would have had to rent space, buy insurance, and advertise. Now, all of these tasks are handled for you. You can simply choose your car and start earning monthly rental income.
                   </p>

                    <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[517px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
                <div className=" w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden">
                    <img src={lambo} className="absolute 2xl:w-[1164px] xl:w-[1100px] lg:w-[1164px] lg:w-[1164px] md:w-[1164px] sm:w-[1164px] w-[1164px] right-[-8%] top-[0%]" alt="" />
                </div>
                <div className=" w-[100%] 2xl:hidden xl:hidden xs:pt-3 lg:hidden md:hidden sm:block block">
                    <img src={lambomob} className="" alt="" />
                </div>
            </div>
            <p className="max-w-[510px] mx-auto text-[14px] xs:text-center text-[#fff] font-[400] pt-[2rem] xs:pt-[1rem]">*This calculation is based on the assumption that you own all the shares of the car</p>

        </div>
        </div>
    )
}
export default LamborghiniSection 
