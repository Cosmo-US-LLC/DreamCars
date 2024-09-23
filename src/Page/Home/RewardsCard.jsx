import React from "react";
import Tierimg from "../../assects/images/Tierimg.png"

import Button from "../../components/Button/button";
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import info from "../../assects/svgs/info.svg"





const RewardCard = ({ item, amountRange, handleRange, handleImageClick }) => {
    const { t } = useTranslation()

    const handleClick = (message) => {
        handleImageClick(message);
      };
    return (

        <div className="rounded-md py-4 xs:py-3 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 px-2 bggrrd">
            <div className=" flex justify-between w-[100%] sm:w-[100%] xs:w-[100%] ">
                {
                    <>
                        <div className="space-y-4 w-[56%] xs:w-[58%] md:w-[100%] sm:w-full xs:w-full pr-2 xs:pr-0">
                            <div className="flex items-center space-x-[1rem] xs:space-x-2">
                                <img className="h-[70px] xs:h-[40px]" src={Tierimg} alt="" />

                                <h3 className="text-[36px] text-white  sm:text-[18px] xs:text-[16px] font-[700] pt-2 ">{t(item.packageType)}</h3>
                            </div>
                            <div className="space-y-2 px-5 xs:px-1 ">
                                {item.packageList.map((j, id) => (
                                    <div key={id} className="flex space-x-2 items-center ">
                                        <img className="w-[14px] h-[14px]" src={j.icon} alt="" />
                                        <p className="text-[13px] text-white sm:text-[10px] xs:text-[10px] text-[#222222] font-[400] ">{t(j.text)}</p>
                                        <img src={info} className="cursor-pointer" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2 xs:space-y-0 flex justify-center relative  w-[50%] xs:w-[80%]">
                            <div className="absolute top-[-33%]  xs:top-[-1%]  min-w-[415px] max-w-[420px] w-[100%] pb-3">
                                <img className="h-[auto] m-auto xs:w-[170px]" src={item.spendImage} alt="" />
                            </div>
                            <div className="absolute spendbg px-[30px] xs:px-[16px] py-[20px] xs:py-[16px] bottom-[5%] tracking-wide xs:bottom-[12%] xs:pt-3 text-center text-[#292A36] font-bold">
                                <h5 className="text-[14px] xs:text-[9px] text-white ">{t("When you spend")}</h5>
                                <h3 className="text-[16px] sm:text-[10px] text-white xs:text-[10px] font-[Poppins] ">{`$${Number(item.spendPrice).toLocaleString('en-US')} ${t("RewardSection.more")}`}</h3>
                            </div>



                        </div>
                    </>

                }
            </div>
            <div className="pt-3 px-5 xs:px-1">
                <a href="#" className=""><Button link="#hero" classes="bgcolor rounded-full w-[100%] h-[46px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[14px] xs:text-[14px] font-Poppins font-[700]  m-auto " text="BUY $DCARS" /> </a>
                <p id='groth'></p>
            </div>
        </div>

    )
}
export default RewardCard;