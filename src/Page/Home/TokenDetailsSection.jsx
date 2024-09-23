import React from "react";
import { useTranslation } from "react-i18next";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copyIcon from "../../assects/images/copyicn.png"


const TokenDetailsSection = () => {
    const { t } = useTranslation();

    const handleCopy = () => {
        navigator.clipboard.writeText("0xfe588f4cfaf1126446d421cf00ec50cbe19b70cf");
        toast.success('Contract Address Copied!', {
            position: toast.POSITION.TOP_RIGHT
          });
    }

    return (
        <>
            <div className="tokengrbg" >
                <div className="w-[100%] max-w-[1240px] space-y-[2rem] xs:space-y-[1rem] py-[4rem] xs:py-[2rem] mx-auto ">
                    <center>
                        <div className="xs:space-y-[15px]">
                            <h2 className="font-[700] text-[46px] xs:text-[24px] text-[#fff]">{t('TokenDetailsSection.title')}</h2>
                            <p className="text-[22px] xs:text-[18px] font-[400] text-center text-[#fff]">{t('TokenDetailsSection.para')}</p>
                            
                        </div>
                    </center>
                    <div className="space-y-[30px]">
                        <div className=" backdrop-blur-md border-t border-r rounded-[54px] bg-[#d1d5db1f] px-[60px] xs:px-[30px] xs:py-[20px] py-[40px] flex justify-between xs:block">
                            <div className="w-[40%] xs:w-[100%] space-y-[30px] xs:space-y-[20px]">
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle1')}</p>
                                    <h4 className="text-[23px] xs:text-[20px] font-[700] text-[#fff]">{t('TokenDetailsSection.tokenPara1')}</h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle2')}</p>
                                    <h4 className="text-[23px] xs:text-[20px] font-[Poppins] font-[700] text-[#fff]">{t('TokenDetailsSection.tokenPara2')}</h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenAdressTitle1')}</p>
                                   <div className="flex xs:justify-between xs:items-center space-x-[10px]">
                                   <h4 className="text-[23px] text-ellipsis overflow-hidden xs:w-[200px] xs:text-[20px] font-[700] font-[Poppins] text-[#fff]">0xfe588f4cfaf1126446d421cf00ec50cbe19b70cf</h4>
                                    <img className="h-[24px] xs:h-[17px] xs:w-[17px] cursor-pointer w-[22px]" onClick={handleCopy} src={copyIcon} alt="" />
                                   </div>
                                </div>
                            </div>
                            <div className="w-[30%] xs:w-[100%] space-y-[30px]">
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle4')}</p>
                                    <h4 className="text-[23px] xs:text-[20px] font-[700] text-[#fff]" dangerouslySetInnerHTML={{ __html: t('TokenDetailsSection.tokenPara4') }}></h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenAdressTitle2')}</p>
                                    <h4 className="text-[23px] xs:text-[20px] font-[Poppins] font-[700] text-[#fff]">18</h4>
                                </div>
                            </div>
                            <div className="w-[25%] xs:w-[100%] space-y-[30px]">
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle3')}</p>
                                    <h4 className="text-[23px] xs:text-[20px] font-[Poppins] font-[700] text-[#fff]">{t('TokenDetailsSection.tokenPara3')}</h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.pre-saleTitle1')}</p>
                                    <h4 className="text-[23px] xs:text-[20px] font-[Poppins] font-[700] text-[#fff]">{t('TokenDetailsSection.pre-salePara1')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default TokenDetailsSection