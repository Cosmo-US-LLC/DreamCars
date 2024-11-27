import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import ownimg from "../../assects/images/ownimg.png";

const OwnershipSection = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="Ownershipbggr ">
    <div className="owntopbggr h-[35px] w-[100%]">
    </div>
      <div className="relative py-[60px] xs:py-0">
        <div className="backdrop-blur-md flex justify-between py-[40px] px-[30px]  bg-[#d1d5db1f] gradient-border-mask rounded-[34px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1270px] mx-auto">
         
          <div className="2xl:w-[100%] relative z-[1] xs:z-[9] xl:w-[100%] lg:w-[100%] max-w-[571px] md:w-[100%] sm:w-[100%] w-[100%]  xs:py-0 space-y-[15px]">
            <h3 className="text-[46px] xs:text-[24px] xs:text-center sm:text-center  font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t('OwnershipSec.title')}` }} />
            <p className="2xl:text-[20px] xs:w-[100%] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[16px] font-[400] text-[#fff] xs:text-center max-w-[570px] w-[100%]" dangerouslySetInnerHTML={{ __html: `${t('OwnershipSec.para')}` }} />
            <div className="hidden xs:block h-[250px]">
            <img src={ownimg} className=" w-[auto] xs:z-[1] absolute right-[-10%]  xs:w-[100%]" alt="" />
            </div>
            <div className="pt-[15px]  xs:pt-[35px] flex xs:justify-center">
              <Button
                link="#hero"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor w-[509px] xs:mx-auto py-[12px] xs:py-[8px] xs:w-[323.093px] xs:text-[14px]  rounded-[10px]"
              />
            </div>
            <p className="text-[16px] text-center font-[400] pt-[15px] text-[#fff]">{t("OwnershipSec.lastpara")}</p>
          </div>
          <div className="">
            <img src={ownimg} className="block xs:hidden  3xl:max-w-[620px] 2xl:max-w-[620px] xl:max-w-[620px] lg:max-w-[43%] md:max-w-[43%] sm:max-w-[43%] max-w-[50%] w-[auto] xs:z-[1] absolute top-[-10%] xs:top-[30%] right-[0.1%] xs:w-[50%]" alt="" />
          </div>
        </div>
      </div>
    <div className="ownbottmbggr h-[35px] w-[100%]">
    </div>
    </div>
    </>
  );
};
export default OwnershipSection;
