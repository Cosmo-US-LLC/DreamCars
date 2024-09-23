import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import mostfun from "../../assects/images/mostfun.png"




const MostFunSection = () => {
    const { t } = useTranslation();

    return (
        <div className="mostfunbg">
             <div className="2xl:w-[100%] xl:w-[94%] lg:w-[94%] md:w-[94%] sm:w-[94%] w-[94%] max-w-[1346px] ml-auto 2xl:mr-auto xl:mr-0 lg:mr-auto md:mr-auto sm:mr-auto mr-auto mt-0 mb-0 py-[4rem] xs:py-[2rem]" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
            
                <div className=" 2xl:w-[42%] xl:w-[42%] lg:w-[42%]  md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-[0rem] xs:text-center sm:text-center space-y-[25px]">
                    <h3 className="text-[46px] xs:text-[24px] max-w-[653px] titlespan font-[700] xs:text-start leading-[119.994%] text-[#fff] capitalize" dangerouslySetInnerHTML={{ __html: t('MostFunSection.title') }}></h3>
                  <p className="text-[20px] text-[#fff] leading-[130%] font-[400]">In a highly volatile market like crypto, investing in luxury rental cars with Dreamcars offers a simple and reliable way to earn money. <span className="text-[#FFD02F] font-[500]">Many have seen their crypto holdings drop by over 50% during past bear markets</span> and are now seeking more stable ways to preserve their assets. Don’t get us wrong—we love crypto and believe it’s the future, but we also believe there should be safer options within the blockchain space, where you can invest or safeguard your assets in a easy-to-understand business with high returns. <br /><br /><span className="text-[#FFD02F] font-[500]">Instead of leaving your digital assets idle in your wallet, exposed to market volatility or downturns</span> (even stablecoins like USDC or USDT can lose value due to inflation and the USD peg), you can convert them into shares of real luxury cars through Dreamcars and earn monthly rental income. <span className="text-[#FFD02F] font-[500]">Backed by real, valuable assets</span>, this investment offers much more stability and higher APYs than most lending protocols. With Dreamcars, you can protect and grow your wealth, even when the crypto market is struggling.</p>

                    <div className="pt-[15px] w-[100%] flex xs:justify-center xs:py-[25px] xs:pt-[0px]  ">
                        <Button link="#hero" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[600px] py-[12px] xs:text-[14px] rounded-[10px]" />
                    </div>
                </div>
                <div className=" flex justify-center items-start  2xl:w-[50%] xl:w-[50%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] "   >
                    <div className="backdrop-blur-md border-r border-t rounded-[24px] bg-[#d1d5db1f] w-[100%]">
                    <img className=" w-[100%] py-4" src={mostfun} alt="" />
                    </div>
                </div>
            
            </div>

        </div>
        </div>
    )
}
export default MostFunSection 
