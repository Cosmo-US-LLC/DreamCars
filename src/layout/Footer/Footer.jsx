import React from "react";
import { ToastContainer, toast } from 'react-toastify';


import Link1 from "../../assects/svgs/ftsvg (1).svg";
import Link2 from "../../assects/svgs/ftsvg (2).svg";
import Link3 from "../../assects/svgs/ftsvg (3).svg";
import Link4 from "../../assects/svgs/ftsvg (4).svg";
import logo from "../../assects/logo/Logo.svg";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const handleCopy = () => {
    navigator.clipboard.writeText("https://lucent-caramel-6be687.netlify.app/")
      .then(() => {
        toast.success('Copied!');
      })
      .catch((error) => {
        console.error('Error copying:', error);
        toast.error('Failed to copy.');
      });
  };
  return (
    <>
      <div className="ftrgrbg">
      <div className=" w-[100%] space-y-[30px] max-w-[1010px] mx-auto py-12">
        <div className="flex flex-col items-center space-y-[25px]">
          <img src={logo} className="max-w-[280px] w-[100%]" alt="" />
          <p className="text-[39px] text-[#fff] font-[400] text-center leading-[130%]">Dreamcars is the first and only platform in the world where you can buy shares of luxury rental cars using crypto and start earning monthly income from rentals.</p>
        </div>
        <div className="flex justify-center">
        <button className="ftbutton hover:bg-[transparent] bg-[#FFD02F] border border-[#FBDA19] rounded-[8px] px-[40px] py-[8px] text-[18px] font-[700] hover:text-[#fff]">
        BUY $DCARS
              </button>
        </div>
        <div className="space-y-[30px] xs:space-y-[15px]">
        <div className="flex space-x-6 justify-center ">
                <img className="h-[35px] xs:h-[18px] cursor-pointer w-[35px] xs:w-[18px]" src={Link1} alt="" />
                <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link2} alt="" />
                <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link3} alt="" />
                <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link4} alt="" />
              </div>
          </div>
          <div>
            <p className="text-[14px] font-[300] text-[#fff] text-center">By using the Dreamcars.co website ("Platform"), you agree to our Terms of Service, Privacy Policy, Cookie Policy, and the DCARS Token Sale Agreement. Please note that Dreamcars is a web3 project, and cryptocurrency may not be regulated in your jurisdiction. The value of cryptocurrencies can fluctuate, with the potential for both gains and losses. Any profits may be subject to capital gains or other taxes according to your local laws. The information on this website does not constitute an offer, recommendation, or financial advice to buy or sell any cryptocurrency. You are responsible for evaluating whether any transaction is suitable for you, considering your personal objectives, financial situation, and risk tolerance. We strongly recommend seeking advice from licensed legal, tax, or financial professionals. Trading cryptocurrencies carries significant risks, including the possibility of losing capital. Thorough research is essential. Dreamcars does not guarantee the performance, outcome, or return of any cryptocurrency featured on this platform. By accessing this website, you agree to the DCARS Token Sale Agreement. Purchasing cryptocurrencies involves risk and may result in partial or total loss. The information provided is not intended for use in any jurisdiction where its distribution or usage would be contrary to local laws or regulations.</p>
          </div>
          <p className="text-[12px] font-[400] text-[#fff] text-center">Copyright 2024 Dreamcars | All rights reserved.</p>

         
        </div>
      </div>
    </>
  );
}

export default Footer;
