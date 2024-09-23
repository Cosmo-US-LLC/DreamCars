import React from "react";
import { useTranslation } from "react-i18next";


import tokens from "../../assects/images/tokens.png"
import line1 from "../../assects/images/line (1).png"
import line2 from "../../assects/images/line (2).png"
import line3 from "../../assects/images/line (3).png"
import line4 from "../../assects/images/line (4).png"


const TokenomicsSectiion= () => {
    const { t } = useTranslation();

    return (
        <div className="tokensecbggr" >
            <div className="w-[100%] max-w-[1250px] mx-auto py-[4rem] xs:py-[2rem]">
                <div className="space-y-12 ">
                    <h3 className="text-center text-[40px] xs:text-[24px] font-[700] text-[white] ">{t('TokenomicsSectiion.title')}</h3>
                <div className="flex justify-between  xs:block xs:space-y-[2rem]">
                    
                   <div className="w-[70%] xs:w-[100%]">
                   <img className="w-[70%] xs:w-[100%] xs:h-[auto] xs:w-[100%] sm:w-[100%] md:w-[80%] m-auto" src={tokens} alt="" />
                   </div>
                   <div className="w-[30%] xs:w-[100%] space-y-[20px]">
                    <div className="flex items-center">
                        <div className=""><img src={line3} alt="" /> </div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option1')} <span className="font-[600] font-[Poppins] ">50.0% </span></h4>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src={line2} alt="" /> </div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option2')} <span className="font-[600] font-[Poppins]">20%  </span></h4>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src={line1} alt="" /> </div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option3')} <span className="font-[600] font-[Poppins]">15%</span></h4>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src={line3} alt="" /> </div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option4')} <span className="font-[600] font-[Poppins]">8% </span></h4>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src={line4} alt="" /></div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option5')} <span className="font-[600] font-[Poppins]">3%</span></h4>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src={line1} alt="" /> </div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option6')} <span className="font-[600] font-[Poppins]">2.5%</span></h4>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src={line3} alt="" /> </div>
                        <div className="tokenbggr flex items-center h-[78px] px-2  max-w-[360px] w-[100%]">
                            <h4 className="text-[18px] font-[400] xs:text-[18px] text-[#fff] pl-[30px]">{t('TokenomicsSectiion.option7')}<span className="font-[600] font-[Poppins]"> 1.5%</span></h4>
                        </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
       
        </div>
    )
}
export default TokenomicsSectiion
