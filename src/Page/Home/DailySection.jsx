import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Dailyimg from "../../assects/images/whitepaper.png";
// import Dailyimgmob from "../../assects/images/dailymob.png";

const DailySection = () => {
  const { t } = useTranslation();

  return (
    <div className="paprebggr">
      <div className="w-[100%] max-w-[1210px] mx-auto py-[4rem] xs:py-[2rem]">
        <div className="flex items-center justify-between  xs:block sm:block md:block">
        
          <div className="w-[55%] xs:w-[100%]">
           <div className="">
           <div className=" ">
              <img className="" src={Dailyimg} alt="" />
            </div>
           </div>
          </div>
          <div className=" 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-[0rem]  space-y-[20px] xs:space-y-[10px]">
            <h3 className="text-[43px] xs:text-[24px] pr-4 font-[700]  leading-[130%] text-[#fff] ">
            {t('WhitepaperSection.title')}
            </h3>
            <h5 className="text-[18px]  font-[400] leading-[130%] xs:text-[18px] text-white">
            {t('WhitepaperSection.subTitle')}
            </h5>
            <div className="">
              <Button
                link="#hero"
                text={`${t('WhitepaperSection.btn')}`}
                classes=" bgcolor h-[64px] xs:h-[40px] text-[#1C1D23] flex items-center px-[50px] xs:px-[40px] text-[18px] xs:text-[14px] font-[700] leading-[21px] xs:leading-[15px] rounded-full"
              />
            </div>
          </div>
        </div>
        {/* <div className="hidden xs:block sm:block md:block">
            
            <div className="  2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] xs:text-center sm:text-center pb-4 space-y-[25px]">
                <h3 className="text-[26px] pr-4 font-[900] font-[Inter] leading-[28px]  gradientText uppercase">{t('DailySection.title')}</h3>
                
                <h5 className="text-[18px] font-[Inter] font-[400] leading-[23.8px] text-white">{t('DailySection.para1')}</h5>
                
            </div>
            <div className=" h-[300px] pt-3 px-2 flex justify-center items-center  2xl:w-[57%] xl:w-[57%] lg:w-[57%] md:w-[100%] sm:w-[100%] w-[100%] mr-auto "   >
            <img className="" src={Dailyimgmob} alt="" />
            </div>
        
        </div> */}
      </div>
    </div>
  );
};
export default DailySection;
