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
  function copyUrlToClipboard() {
    const url = "https://dreamcars.co/";
  
    // Use the Clipboard API to copy the URL
    navigator.clipboard.writeText(url)
    .then(() => {
      toast.success("URL copied to clipboard!"); 
    })
    .catch((err) => {
      toast.error("Failed to copy the URL"); 
      console.error("Failed to copy the URL", err);
    });
  }
  return (
    <>
      <div className="ftrgrbg">
      <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] space-y-[30px] max-w-[1010px] mx-auto py-12">
        <div className="flex flex-col items-center space-y-[25px]">
          <img src={logo} className="max-w-[280px] w-[100%]" alt="" />
          <p className="text-[39px] xs:text-[24px] text-[#fff] font-[400] text-center leading-[130%]"> {t('Footer.title')}</p>
        </div>
        <div className="flex justify-center">
        <a href="#hero" className="w-[100%] flex justify-center">
        <button className="ftbutton hover:bg-[transparent] bg-[#FFD02F] border border-[#FBDA19] rounded-[8px] px-[40px] py-[8px] text-[18px] font-[700] hover:text-[#fff]">
        {t('Footer.btnfooetr')}
              </button>
        </a>
        </div>
        <div className="space-y-[30px] xs:space-y-[15px]">
        <div className="flex space-x-6 justify-center ">
                <img onClick={(e) => {
        e.preventDefault(); 
        copyUrlToClipboard();
      }} className="h-[35px] xs:h-[18px] cursor-pointer w-[35px] xs:w-[18px]" src={Link1} alt="" />
      <a href="https://twitter.com/dreamcars_bsc" target="_blank" rel="noopener noreferrer">
      <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link2} alt="" /></a>
         <a href="https://t.me/Dreamcars_bsc" target="_blank" rel="noopener noreferrer">
         <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link3} alt="" />
         </a>
         <a href="https://www.instagram.com/dreamcars_bsc/" target="_blank" rel="noopener noreferrer">
         <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link4} alt="" />
         </a>
             
              </div>
          </div>
          <div>
            <p className="text-[14px] xs:text-[16px] font-[300] text-[#fff] text-center">{t('Footer.subpara')}</p>
          </div>
          <p className="text-[12px] xs:text-[14px] font-[400] text-[#fff] text-center"> {t('Footer.Copyright')}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
