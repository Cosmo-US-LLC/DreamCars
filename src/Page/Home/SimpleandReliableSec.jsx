
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Simgimg from "../../assects/images/simpimg.png"




const SimpleandReliableSec = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#181818] overflow-hidden">
             <div className=" 2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1346px] 2xl:mx-auto xl:ml-auto lg:ml-auto md:ml-auto sm:ml-auto ml-auto relative py-[4rem] xs:py-[2.8rem]" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
            
                <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[569px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                  
                    <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]"><span className="text-[#FFD02F]">Profitable And Reliable  </span> Business Model</h3>
                   <p className="text-[18px] font-[400] text-[#fff]">Have you noticed that every successful car rental company owns dozens of luxury cars worth millions of dollars? Once the business is established and marketing is successful, the returns are so substantial that they can quickly expand the fleet and generate significant profits in a relatively short period of time. <br /><br />
                     As Warren Buffet and other billionaire investors often say,<span className="text-[18px] font-[700] text-[#FFD02F]">"Invest in a business model you understand."</span>  Otherwise, you’re likely to be disappointed with the results. How many times have we invested in the latest crypto protocol, promising high returns, only for those promises to fall short? <br /><br />
                    Dreamcars, on the other hand, offers a reliable and easy-to-understand business model. It involves real cars that you can even rent yourself (with a discount for $DCARS owners, of course).
                   </p>

                    <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[569px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]" />
                    </div>
                </div>
                <div className="relative  w-[75%] flex justify-end">
                <img src={Simgimg} className="w-[100%] simpiumgbg" alt="" />
</div>
            </div>

        </div>
        </div>
    )
}
export default SimpleandReliableSec 
