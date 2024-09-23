
import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";

import bdmodimg from "../../assects/images/dcmodimg.png"



const DreamcarsbusinessSec = () => {
    const { t } = useTranslation();

    return (
        <div className="dcmodelbggr">
             <div className="w-[100%] max-w-[1138px] mx-auto py-[80px]" >
            <div className="space-y-[20px]">
                <h3 className="text-[46px] font-[700] leading-[130%] text-[#FFF] text-center">The Dreamcars business model continuously supports the growth of <span className="text-[#FFD02F]">$DCARS</span></h3>
                <p className="text-[#fff] text-[20px] leading-[130%] text-center font-[400]">Our marketplace offers luxury rental cars worldwide, available for purchase using over 10 different cryptocurrencies. To buy and hold shares in a car, you’ll need to own a specific amount of $DCARS and lock it for the duration of your ownership. <br /><br />

This process ensures that as more cars are sold, the value of $DCARS steadily increases over time.</p>
            </div>
           <div className="flex justify-center  ">
           <div className="space-y-[36px] pt-[25px] w-[100%] ">
               <h4 className="text-[30px] text-[#fff] font-[700] text-center">3 Different Car Categories:</h4>
               <div className="flex justify-between w-[100%] relative">
                   <div className="max-w-[368px] h-[367px] w-[100%] py-[38px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t space-y-[6px] rounded-[23px]">
                       {/* <img className="" src={icns1} alt="" /> */} 
                       <h3 className="text-[31px] font-[700] leading-[28px] text-[#fff] pb-[10px]">Entry-Level Cars</h3>
                       <h4 className="text-[#fff] text-[24px] font-[400] leading-[119.994%] ">Less than <span className="text-[#FFD02F] font-[700]">20% APY</span> </h4>
                       <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">(2% in $DCARS locked in the vault)</h5>
                   </div>
                   <div className="max-w-[368px] h-[367px] w-[100%] py-[38px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[6px] border-r border-t rounded-[23px]">
                   {/* <img className="" src={icns2} alt="" /> */} 
                   <h3 className="text-[31px] font-[700] leading-[28px] text-[#fff] pb-[10px]">Premium Cars </h3>
                       <h4 className="text-[#FFC83D] text-[24px] font-[700] leading-[119.994%] ">20% - 30%  APY</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">(5% in $DCARS locked in the vault)</h5>
                   </div>
                   <div className="max-w-[368px] h-[367px] w-[100%] py-[38px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[6px] border-r border-t rounded-[23px]">
                   {/* <img className="" src={icns3} alt="" /> */} 
                   <h3 className="text-[31px] font-[700] leading-[28px] text-[#fff] pb-[10px]">Top Performers</h3>
                   <h4 className="text-[#FFC83D] text-[24px] font-[700] leading-[119.994%] "> 30%+ APY</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">(10% in $DCARS locked in the vault)</h5>
                   </div>
                   <div className="absolute bottom-[-18%] flex justify-center w-[100%]">
                    <img src={bdmodimg} className=" " alt="" />
                   </div>
               </div>
               <div className="pt-[4rem]">
         <Button
           link="#hero"
           text={`${t("BetaSection.btn")}`}
           classes="font-[700] bgcolor flex justify-center items-center w-[565px] mx-auto py-[12px] xs:text-[14px] rounded-[10px]"
         />
       </div>
           </div>
            
           </div>
                
             </div>
            </div>
    )
}
export default DreamcarsbusinessSec 
