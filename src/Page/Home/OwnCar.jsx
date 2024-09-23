import React from "react";
import { useTranslation } from "react-i18next";

import licimg1 from "../../assects/images/licimg (1).png";
import licimg2 from "../../assects/images/licimg (2).png";
import licimg3 from "../../assects/images/licimg (3).png";
import Button from "../../components/Button/button";

const OWnCarSection = () => {
  const { t } = useTranslation();

  return (
    <div className="Carbgimg ">
      <div className="max-w-[1240px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto space-y-[2rem] xs:space-y-[1rem] py-[4.5rem] xs:py-[2rem] ">
        <div>
          <h3 className="text-[46px] xs:text-[24px] xs:text-center font-[700] leading-[130%] text-[#fff]">{t('OwnCarSection.mainTitle')}<br /> {t('OwnCarSection.mainTitle2')}</h3>
        </div>
        <div className="space-y-[25px] max-w-[525px] xs:max-w-[100%] w-[100%]">
            {/* <p > </p> */}
            <p className="text-[20px] xs:text-[16px] xs:text-center font-[400] leading-[130%] text-white paraOwn" dangerouslySetInnerHTML={{ __html: t('OwnCarSection.para1') }}></p>
            <p className="text-[20px] xs:text-[16px] xs:text-center font-[400] leading-[130%] text-white paraOwn" dangerouslySetInnerHTML={{ __html: t('OwnCarSection.para2') }}></p>
            <p className="text-[20px] xs:text-[16px] xs:text-center font-[400] leading-[130%] text-white" >{t('OwnCarSection.para3')} </p>
        </div>
        <div className=" w-[100%] pt-[15px] ">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor max-w-[534px] !w-[100%] xs:w-[100%]  py-[12px] xs:text-[14px] rounded-[10px]" />
                    </div>
      </div>
    </div>
  );
};
export default OWnCarSection;
