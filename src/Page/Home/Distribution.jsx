import React from "react";
import { useTranslation } from "react-i18next";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copyIcon from "../../assects/svgs/copy-icon-1.png.svg";
import Button from "../../components/Button/button";
import icon1 from "../../assects/images/iconsds (1).png"
import icon2 from "../../assects/images/iconsds (2).png"
import icon3 from "../../assects/images/iconsds (3).png"
import icon4 from "../../assects/images/iconsds (4).png"

const DistributionSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="tokenwillbg">
        <div className="w-[90%] max-w-[1440px] space-y-[2rem] py-[4rem] xs:py-[2rem] mx-auto ">
          <center>
            <div className="space-y-[20px] xs:space-y-[10px]">
              <h2 className="font-[700] text-[46px] xs:text-[24px] text-[#fff]">
              {t('DistributionSection.title')} <br className="xs:hidden" /> {t('DistributionSection.title2')}
              </h2>
              <p className="max-w-[1000px] w-[100%] text-[22px] xs:text-[18px] font-[400] text-center text-[#fff]">
              {t('DistributionSection.para')}
              </p>
            </div>
          </center>
          <div>
          <div className=" max-w-[624px] bg-[#181818] w-[100%] mx-auto">
            <div className="flex justify-between">
              <div className="w-[100%] border-b border-[#374151] flex">
                <div className="w-[50%] py-[35px] xs:py-[15px] px-[50px] xs:px-[18px] space-y-[5px]">
                  <p className="text-[#6399FF] font-[Lato] text-[40px] xs:text-[20px] font-[600]">
                  {t('DistributionSection.SoldTitle1')}
                  </p>
                  <h4 className="text-[17px] xs:text-[12px] font-[Lato] font-[400] text-[#fff]">
                  {t('DistributionSection.Soldpara')} <br /> {t('DistributionSection.Soldpara2')}
                  </h4>
                </div>
                <div className="w-[50%] py-[35px] px-[50px] xs:py-[15px] xs:px-[18px] border-l border-[#374151] space-y-[5px]">
                  <p className="text-[#FFF] xs:text-[20px] font-[Lato] text-[40px] font-[600]">
                    78%
                  </p>
                  <h4 className="text-[17px] xs:text-[12px] font-[Lato] font-[400] text-[#fff]">
                  {t('DistributionSection.Soldpara3')} <br /> {t('DistributionSection.Soldpara4')}
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-[50px] xs:px-[15px] py-[60px] xs:py-[15px] flex justify-between">
              <div className="space-y-[15px]">
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]">{t('DistributionSection.tokenTitle1')}</p>
                  <h4 className="text-[23px] xs:text-[14px] font-[700] text-[#fff]">
                  {t('DistributionSection.tokenPara1')}
                  </h4>
                </div>
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]">{t('DistributionSection.tokenTitle2')}</p>
                  <h4 className="text-[23px] xs:text-[14px] font-[700] text-[#fff]">
                  {t('DistributionSection.tokenPara2')}
                  </h4>
                </div>
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]"> {t('DistributionSection.tokenTitle3')}</p>
                  <h4 className="text-[23px] xs:text-[14px] font-[Poppins] font-[700] text-[#fff]">
                  1,000,000,000
                  </h4>
                </div>
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]">{t('DistributionSection.tokenTitle4')}</p>
                  <h4 className="text-[23px] xs:text-[14px] font-[Poppins] font-[700] text-[#fff]">
                  1 $DCARS = $0.001
                  </h4>
                </div>
              </div>
              <div className="space-y-[15px]">
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]">{t('DistributionSection.tokenPara3')}</p>
                  <h4 className="text-[23px] xs:text-[14px] font-[700] font-[Poppins] text-[#fff]">
                  1 $DCARS = $0.002
                  </h4>
                </div>
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]">{t('DistributionSection.tokenPara4')}</p>
                   <div className="space-y-[20px]">
                    <div className=" flex justify-between space-x-2">
                        <div className="flex space-x-2 w-[80px] xs:w-[auto] items-center">
                            <img className="w-[22px] h-[22px] xs:h-[12px] xs:w-[12px]" src={icon4} alt="" />
                            <p className="text-[18.859px] xs:text-[10px] font-[400] text-[#fff]">ETH</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <img className="w-[22px] h-[22px] xs:h-[12px] xs:w-[12px]" src={icon3} alt="" />
                            <p className="text-[18.859px] xs:text-[10px] font-[400] text-[#fff]">BNB</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <img className="w-[22px] h-[22px] xs:h-[12px] xs:w-[12px]" src={icon2} alt="" />
                            <p className="text-[18.859px] xs:text-[10px] font-[400] text-[#fff]">USDT</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="space-y-[5px]">
                  <p className="text-[#6399FF] text-[16px] xs:text-[12px] font-[400]">{t('DistributionSection.tokenAdressTitle1')}</p>
                  <h4 className="text-[23px] xs:text-[10px] font-[700] xs:font-[500] text-[#fff]">
                  {t('DistributionSection.tokenAdressPara1')} <br />
                  {t('DistributionSection.tokenAdressTitle2')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
            <div className="flex justify-center w-[100%]">
              <Button
                link="#hero"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor w-[624px] xs:w-[130px] xs:h-[34px] flex justify-center items-center xs:leading-[14px] h-[50px] xs:text-[14px] rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DistributionSection;
