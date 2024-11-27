
import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";

import bdmodimg from "../../assects/images/dcmodimg.png"



const DreamcarsbusinessSec = () => {
    const { t } = useTranslation();

    return (
        <div className="dcmodelbggr">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] xs:backdrop-blur-md xs:rounded-[23px] xs:bg-[#d1d5db1f] xs:border-r xs:border-t max-w-[1138px] mx-auto 2xl:py-[80px] xl:py-[80px] lg:py-[80px] md:py-[80px] sm:py-[30px] py-[30px] xs:p-8" >
            <div className="space-y-[20px]">
                <h3 className="text-[46px] xs:text-[24px] capitalize font-[700] leading-[130%] text-[#FFF] text-center" dangerouslySetInnerHTML={{ __html: `${t('DreamcarsBusinessSec.title')}` }}/>
                <p className="text-[#fff] text-[20px] xs:text-[16px] leading-[130%] text-center font-[400]" dangerouslySetInnerHTML={{ __html: `${t('DreamcarsBusinessSec.para')}` }}/>
            </div>
           <div className="flex justify-center  ">
           <div className="space-y-[36px] pt-[25px] w-[100%] ">
               <h4 className="2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] text-[#fff] font-[700] text-center">{t("DreamcarsBusinessSec.difftext")}</h4>
               <div className="2xl:flex xl:flex lg:flex md:flex sm:block block justify-between w-[100%] relative xs:space-y-[20px]">
                   <div className="max-w-[368px] 2xl:h-[367px] xl:h-[367px] lg:h-[367px] md:h-[367px] sm:h-[auto] h-[auto] w-[100%] py-[38px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] space-y-[6px] ">
                       {/* <img className="" src={icns1} alt="" /> */} 
                       <h3 className="2xl:text-[31px] xl:text-[31px] lg:text-[31px] md:text-[31px] sm:text-[24px] text-[24px] font-[700] leading-[28px] text-[#fff] pb-[10px]">{t("DreamcarsBusinessSec.cardtitle1")}</h3>
                       <h4 className="text-[#fff] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[18px] text-[18px] font-[400] leading-[119.994%] " dangerouslySetInnerHTML={{ __html: `${t('DreamcarsBusinessSec.cardsub1')}` }}/>
                       <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">{t("DreamcarsBusinessSec.cardpara1")}</h5>
                   </div>
                   <div className="max-w-[368px] 2xl:h-[367px] xl:h-[367px] lg:h-[367px] md:h-[367px] sm:h-[auto] h-[auto] w-[100%] py-[38px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[6px] gradient-border-mask rounded-[34px]">
                   {/* <img className="" src={icns2} alt="" /> */} 
                   <h3 className="2xl:text-[31px] xl:text-[31px] lg:text-[31px] md:text-[31px] sm:text-[24px] text-[24px] font-[700] leading-[28px] text-[#fff] pb-[10px]">{t("DreamcarsBusinessSec.cardtitle2")}</h3>
                       <h4 className="text-[#FFC83D] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[18px] text-[18px] font-[700] leading-[119.994%] ">{t("DreamcarsBusinessSec.cardsub2")}</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">{t("DreamcarsBusinessSec.cardpara2")}</h5>
                   </div>
                   <div className="max-w-[368px] 2xl:h-[367px] xl:h-[367px] lg:h-[367px] md:h-[367px] sm:h-[auto] h-[auto] w-[100%] py-[38px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[6px] gradient-border-mask rounded-[34px]">
                   {/* <img className="" src={icns3} alt="" /> */} 
                   <h3 className="2xl:text-[31px] xl:text-[31px] lg:text-[31px] md:text-[31px] sm:text-[24px] text-[24px] font-[700] leading-[28px] text-[#fff] pb-[10px]">{t("DreamcarsBusinessSec.cardtitle3")}</h3>
                   <h4 className="text-[#FFC83D] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[18px] text-[18px] font-[700] leading-[119.994%] ">{t("DreamcarsBusinessSec.cardsub3")}</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">{t("DreamcarsBusinessSec.cardpara3")}</h5>
                   </div>
                   <div className="absolute bottom-[-18%] xs:bottom-[-12%] flex justify-center w-[100%]">
                    <img src={bdmodimg} className="xs:w-[100%] mx-auto " alt="" />
                   </div>
               </div>
               <div className="pt-[4rem]">
         <Button
           link="#hero"
           text={`${t("BetaSection.btn")}`}
           classes="font-[700] bgcolor flex justify-center items-center max-w-[565px] w-[100%] mx-auto py-[12px] xs:text-[14px] rounded-[10px]"
         />
       </div>
           </div>
            
           </div>
                
             </div>
            </div>
    )
}
export default DreamcarsbusinessSec 
