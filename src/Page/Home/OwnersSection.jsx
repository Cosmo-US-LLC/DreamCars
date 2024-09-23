import React from "react";
import { useTranslation } from "react-i18next";
import tabLogo from "../../assects/images/tablog.png"

import Button from "../../components/Button/button";
import tick from "../../assects/images/tick4.png";
import cross from "../../assects/images/crossx.png";

const OwnersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="ownbggr">
      <div className="w-[100%] max-w-[1102px] mx-auto py-[4rem] xs:py-[2rem] space-y-[60px] xs:space-y-[25px]">
        <div className="space-y-[10px]">
          <h3 className="font-[700] titlespan text-center text-[#fff] leading-[46px] text-[46px] xs:leading-[25px] xs:text-[24px]" dangerouslySetInnerHTML={{ __html: t('OwnersSection.title') }}>
          </h3>
          <p className="text-[22px] leading-[25px] max-w-[891px] w-[100%] mx-auto xs:text-[18px] font-[400] text-center text-[#fff]">
          {t('OwnersSection.subTitle')}
          </p>
        </div>
        <div className="backdrop-blur-md border rounded-[56px] bg-[#d1d5db1f]">
          <div className="px-[4rem] xs:px-[1rem] xs:pb-[1rem] xs:pt-[2rem] pb-[3rem] pt-[4rem]">
            <div className="flex items-end">
              <div className="w-[40%] xs:w-[60%]  ">
                <p className="text-[29px] xs:text-[12px] font-[700] text-[#fff] py-[1rem] uppercase leading-[130%]">
                {t('OwnersSection.subTitle2')}
                </p>
              </div>
              <div className=" w-[30%] xs:w-[20%] flex justify-center items-center ">
                <div className="ownbghed h-[150px] xs:h-[50px] flex items-center justify-center text-center w-[100%]">
                 <div className="h-[80px] xs:h-[27px] flex justify-center items-start">
                 <img className="pb-[0rem] h-[30px] xs:h-[auto] " src={tabLogo} alt="" />
                 </div>
                </div>
              </div>
              <div className=" w-[30%] xs:w-[20%] items-center flex justify-center">
                <div className="ownbghed h-[150px] xs:h-[50px] flex items-center justify-center text-center w-[100%]"><h2 className="text-[#fff] text-[16px] xs:text-[6px]  uppercase font-[700] pb-[1.5rem] xs:pb-0">{t('OwnersSection.subTitle3')} <br /> {t('OwnersSection.subTitle4')}</h2></div>
              </div>
            </div>
            <div className="flex border border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option1')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option2')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option3')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option4')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option5')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option6')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option7')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option8')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option9')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option10')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option11')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                {t('OwnersSection.option12')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                Average Time to Sell a Car or Borrow Liquidity 
                </p>
              </div>
              <div className="w-[30%] xs:w-[20%] flex justify-center items-center  border-r border-gray-300]">
                <p className="text-[16px] font-[600] text-center text-[#fff]">15 Seconds</p>
              </div>
              <div className="w-[30%] xs:w-[20%] items-center flex justify-center">
              <p className="text-[16px] font-[600] text-center text-[#fff]">90 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OwnersSection;
