
import React from "react";
import { useTranslation } from "react-i18next";

import emampimg from "../../assects/images/exmpimg.png"




const ExampleSection = () => {
    const { t } = useTranslation();

    return (
        <div className="Examplebggr">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1216px]  mx-auto pb-[80px]" >
            <div className="space-y-[20px]">
                <h3 className="2xl:text-[46px] xl:text-[46px] lg:text-[46px] md:text-[46px] sm:text-[46px] text-[24px] font-[700] leading-[53px] text-[#FFF] text-center">Here's A Simple Example</h3>
                <p className="2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[16px] font-[500] text-center text-[#fff] xs:leading-[120%] leading-[53px]">A Lamborghini Huracan Spyder 2024, purchased for $280,000, can generate nearly $97,000 in net profit after deducting all costs, including depreciation*.</p>
            </div>
            <div className="space-y-[60px] pt-[48px]">
                <div className="max-w-[424px] w-[100%] mx-auto 2xl:p-[32px] xl:p-[32px] lg:p-[32px] md:p-[32px] sm:p-[32px] p-[20px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t rounded-[16px]">
                    <p className="text-[#FFC83D] text-center 2xl:text-[36px]  xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[24px] text-[24px] font-[700] leading-[119.994%]">1-Year Calculation:</p>
                </div>
                <div className="flex justify-center">
                    <img src={emampimg} alt="" />
                </div>
                <div className="2xl:flex xl:flex lg:flex md:flex sm:block block xs:space-y-[1rem] justify-between xs:w-[300px] xs:mx-auto">
                    <div className="max-w-[390px] w-[100%] 2xl:py-[80px] xl:py-[80px] lg:py-[80px] md:py-[80px] sm:py-[50px] py-[50px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t rounded-[23px]">
                        <h4 className="text-[#FFC83D] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[24px] font-[700] leading-[119.994%] text-center">Total Annual Costs*</h4>
                        <h5 className="2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[45px] text-[24px] text-center font-[700] tracking-[-0.45px] text-[#fff]">$83,000</h5>
                    </div>
                    <div className="max-w-[390px] w-[100%] 2xl:py-[80px] xl:py-[80px] lg:py-[80px] md:py-[80px] sm:py-[50px] py-[50px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t rounded-[23px]">
                        <h4 className="text-[#FFC83D] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[24px] font-[700] leading-[119.994%] text-center">Yearly Profit</h4>
                        <h5 className="2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[45px] text-[24px] text-center font-[700] tracking-[-0.45px] text-[#fff]">$97,000</h5>
                    </div>
                    <div className="max-w-[390px] w-[100%] 2xl:py-[80px] xl:py-[80px] lg:py-[80px] md:py-[80px] sm:py-[50px] py-[50px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t rounded-[23px]">
                        <h4 className="text-[#FFC83D] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[24px] font-[700] leading-[119.994%] text-center">APY</h4>
                        <h5 className="2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[45px] text-[24px] text-center font-[700] tracking-[-0.45px] text-[#fff]">34.6%</h5>
                    </div>
                   
                </div>
            </div>
                    <div className="pt-[3rem]">
                        <p className="text-center text-[14px] text-[#fff] font-[400]">*(This calculation is solely an estimation based on historical data) <br /><br /> **(including depreciation, insurance, maintenance, advertising, parking, and miscellaneous)</p>
                    </div>
             </div>
            </div>
    )
}
export default ExampleSection 
