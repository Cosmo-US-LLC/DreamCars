
import React from "react";
import { useTranslation } from "react-i18next";

import icns1 from "../../assects/svgs/dcftsvg (4).svg"
import icns2 from "../../assects/svgs/dcftsvg (3).svg"
import icns3 from "../../assects/svgs/dcftsvg (2).svg"
import icns4 from "../../assects/svgs/dcftsvg (1).svg"
import icns5 from "../../assects/svgs/dcftsvg (5).svg"
import Button from "../../components/Button/button";

import dcftcar1 from "../../assects/images/dcftimg (2).png"
import dcftcar2 from "../../assects/images/dcftimg (1).png"



const DreamcarsFeaturesSec = () => {
    const { t } = useTranslation();

    return (
        <div className="dcftbggr">
             <div className="w-[100%] relative mx-auto pb-[80px]" >
            <div className="space-y-[20px]">
                <h3 className="text-[46px] font-[700] leading-[53px] text-[#FFF] text-center">Dreamcars Features</h3>
            </div>
           <div className="flex justify-between items-end">
           <img className="absolute left-0 bottom-0" src={dcftcar1} alt="" />
           <div className="space-y-[40px] pt-[48px] max-w-[983px] w-[100%] mx-auto">
               
               <div className="flex justify-between">
                   <div className="max-w-[315px] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] border-r border-t space-y-[10px] rounded-[23px]">
                       <img className="" src={icns1} alt="" />
                       <h4 className="text-[#FFC83D] text-[26px] max-w-[150px] w-[100%]  font-[700] leading-[119.994%] ">$DCARS Token</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff]">Used as a payment method</h5>
                   </div>
                   <div className="max-w-[315px] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                   <img className="" src={icns2} alt="" />
                       <h4 className="text-[#FFC83D] text-[26px] max-w-[180px] w-[100%]  font-[700] leading-[119.994%] ">Luxury Car Rental Business</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff]">Renting out real luxury cars</h5>
                   </div>
                   <div className="max-w-[315px] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                   <img className="" src={icns3} alt="" />
                       <h4 className="text-[#FFC83D] text-[26px] max-w-[150px] w-[100%]  font-[700] leading-[119.994%] ">Dreamcars Marketplace</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff]">Buy and sell cars</h5>
                   </div>
               </div>
               <div className="flex justify-center space-x-[2rem]">

                   <div className="max-w-[315px] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                   <img className="" src={icns4} alt="" />
                       <h4 className="text-[#FFC83D] text-[26px] max-w-[220px] w-[100%]  font-[700] leading-[119.994%] ">Rental Income for Car Owners</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff]">Earn monthly income based on your shareholdings</h5>
                   </div>
                   <div className="max-w-[315px] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] border-r border-t rounded-[23px]">
                   <img className="" src={icns5} alt="" />
                       <h4 className="text-[#FFC83D] text-[26px] max-w-[150px] w-[100%]  font-[700] leading-[119.994%] ">Liquidity Protocol</h4>
                       <h5 className="text-[16px] font-[400] text-[#fff]">Use your car as collateral to hedge liquidity</h5>
                   </div>
               </div>
              
               <div className=" xs:py-[25px] flex justify-center xs:pt-[0px]  ">
         <Button
           link="#hero"
           text={`${t("BetaSection.btn")}`}
           classes="font-[700] bgcolor flex justify-center items-center w-[480px] py-[12px] xs:text-[14px] rounded-[10px]"
         />
       </div>
           </div>
            
            <img className="absolute right-0 bottom-0" src={dcftcar2} alt="" />
           </div>
                
             </div>
            </div>
    )
}
export default DreamcarsFeaturesSec 
