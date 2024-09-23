
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import lesimg from "../../assects/images/legbussimg.png"




const LegalBusinessSec = () => {
    const { t } = useTranslation();

    return (
        <div className="LegalBusigr overflow-hidden">
             <div className=" 2xl:w-[100%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1346px] 2xl:mx-auto xl:mr-auto lg:mr-auto md:mr-auto sm:mr-auto mr-auto relative xs:py-[2.8rem]" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
            <div className="w-[75%] ">
                    <img src={lesimg} className=" w-[70%] left-[0%] top-[0%]" alt="" />
                </div>
                <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[571px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                    <div className="backdrop-blur-md m-0 max-w-[530px] bg-[#d1d5db1f] border-r border-t p-2 rounded-[5px]">
                        <p className="text-[#FFD02F] text-[26px] font-[700]">On Average 20% to 50% APY on a single Car</p>
                    </div>
                    <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]">Legal Business with Surprisingly <span className="text-[#FFD02F]">High APY</span></h3>
                   <p className="text-[18px] font-[400] text-[#fff]">Do you know of any legal investment that can consistently provide a return of <span className="text-[18px] font-[700] text-[#FFD02F]">20% to 50% APY with real assets,</span>  year after year? Most people don’t, and it’s true that such returns are almost impossible to achieve outside of the luxury car rental business. <br /><br />
                   These returns are <span className="text-[18px] font-[700] text-[#FFD02F]">5 to 10 times higher</span> than what you would typically earn from an average real estate investment or by investing in ETFs. That’s why Dreamcars offers a unique chance for investors to earn great returns with real assets in a growing market.
                   </p>
                   <div className="backdrop-blur-md m-0 bg-[#d1d5db1f] max-w-[530px] border-r border-t p-2 rounded-[5px]">
                        <p className="text-[#FFD02F] text-[20px] font-[700]">5 to 10 times Higher Returns than Traditional Investments*</p>
                    </div>

                    <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[530px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}
export default LegalBusinessSec 
