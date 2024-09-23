import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";

import Aauaimg from "../../assects/images/aquaimg.png";

const AcquiredSection = () => {
  const { t } = useTranslation();

  return (
    <div className="aqurbggr">
      <div className="w-[100%] max-w-[1180px]  pt-[4rem] pb-[4rem] xs:py-[2rem] mx-auto ">
       <div className=" backdrop-blur-md border-b border-r border-[#043798] rounded-[54px] bg-[#d1d5db1f] w-[100%] px-[4rem] xs:px-[2rem] pt-[3rem] pb-[3rem] relative">
       <div className="flex justify-between xs:block relative">
          <div className="space-y-[12px] w-[50%] xs:w-[100%] relative">
            <h3 className="text-[40px] leading-[130%] xs:text-[24px] font-[700] text-[white] ">
            {t('Acquired.title')} <br />
              <span className="text-[#FED23D]">{t('Acquired.title2')}</span>{" "}
            </h3>
            <div className="space-y-[15px]">
              <p className="text-[18px] xs:text-[18px] font-[400] text-[#fff]">
              {t('Acquired.para1')}
              </p>
              <p className="text-[18px] xs:text-[18px] font-[400] text-[#fff]">
              {t('Acquired.para2')}
              </p>
            </div>
            <div className="pt-[15px]">
              <Button
                link="#hero"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor w-[169px] xs:w-[115px] xs:h-[34px] flex justify-center items-center h-[50px] xs:text-[14px] rounded-[10px]"
              />
            </div>
          </div>
          <div className="">
            <img src={Aauaimg} className="absolute 2xl:max-w-[700px] xl:max-w-[700px] lg:max-w-[700px] md:max-w-[700px] sm:max-w-[300px] max-w-[350px] xs:w-[85%] xs:min-w-[240px] top-[-18%] xs:top-[95%] right-[-18%] w-[100%]" alt="" />
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};
export default AcquiredSection;
