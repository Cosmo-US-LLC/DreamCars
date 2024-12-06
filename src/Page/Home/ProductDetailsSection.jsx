import React from "react";

import 'react-toastify/dist/ReactToastify.css';

import eth from "../../assects/svgs/ethsv.svg";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/loinppre (2).png";
import poster from "../../assects/images/vedio.png";
import icns1 from "../../assects/svgs/whticn (7).svg"
import icns2 from "../../assects/svgs/whticn (6).svg"
import icns6 from "../../assects/svgs/whticn (2).svg"
import icns4 from "../../assects/svgs/whticn (4).svg"

import { useTranslation } from "react-i18next";



const ProductDetailsSection = () => {

  const { t } = useTranslation();

  const handleLinkClick = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").substring(1);
    const offset = parseInt(event.target.getAttribute("data-offset"), 10);

    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });
  };
  return (
    <div id="hero" className="backgroundgrhero pt-[3.5rem] xs:pt-[4rem]">
      <div className=" space-y-4 py-[4rem] xs:py-[2.2rem] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1276px] mx-auto ">
        <div className="2xl:space-y-[45px]  xl:space-y-[45px] lg:space-y-4 xs:space-y-2 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
        <div>
        <div className="w-[100%] max-w-[1200px] mx-auto xl:w-[100%] flex flex-col justify-between lg:w-[100%]  xs:w-[100%] sm:w-[100%] md:w-[100%]  ">
            <div className="space-y-[10px]  ">
              <h5 className="2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] leading-[130%] font-[400] font-[Lato] text-white text-center ">
                {t("ProductDetails.para1")}
              </h5>
              <h3 className="text-[46px] xs:max-w-[355px] xs:w-[100%] xs:mx-auto  text-center xs:text-[24px] leading-[1.3] capitalize font-[900] font-[Lato] text-[#fff] ">
                {" "}
                {t("ProductDetails.title1")}
              </h3>
              <h5 className="2xl:text-[22px] text-center xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] text-[16px] font-[400] leading-[120%] text-white ">
                {t("ProductDetails.para2")}
              </h5>
            </div>
          
          </div>
        </div>
            <div className="xs:pt-[20px] flex justify-between items-center max-w-[1259px] mx-auto w-[100%] xs:pb-[0.8rem] ">
             <div className="w-[22%] space-y-[20px] 2xl:block xl:block lg:block md:block sm:hidden hidden">
             <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[24px] max-w-[200px] w-[100%] text-center w-[100%]  font-[800] leading-[22px] " dangerouslySetInnerHTML={{ __html: `${t("ProductDetails.card1")}` }}/>
                       <img className="opacity-[0.6] max-h-[35px]" src={icns1} alt="" />
                   </div>
                   <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[24px] text-center max-w-[220px] w-[100%]  font-[800] leading-[22px] ">{t("ProductDetails.card2")}</h4>
                   <img className="opacity-[0.6] max-h-[35px]" src={icns4} alt="" />
                   </div>
             </div>
             <div className="w-[51%] xs:w-[100%]">
             <video
                controls
                preload="metadata"
                poster={poster}
                playsinline
                className="bg-filterved rounded-[10px] bgposter min-h-[390px] xs:min-h-[160px]  xs:h-[194px] sm:h-[330px] md:h-[420px] object-cover !object-top"
                height="100%"
                width="100%"
              >
                <source src={""} type="video/mp4" />
              </video>
              </div>
              <div className="w-[22%] space-y-[20px] 2xl:block xl:block lg:block md:block sm:hidden hidden">
                   <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[24px] text-center max-w-[220px] text-center w-[100%]  font-[800] leading-[22px] ">{t("ProductDetails.card3")}</h4>
                   <img className="opacity-[0.6] max-h-[35px]" src={icns6} alt="" />
                   </div>
                   <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[0px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[24px]  w-[100%]  font-[800] leading-[22px] text-center ">{t("ProductDetails.card4")}</h4>
                   <img className="opacity-[0.6] max-h-[35px]" src={icns2} alt="" />
                   </div>
              </div>
            </div>
            <div className="px-[23px] xs:px-[8px] py-[13px] relative z-[9] gradient-border-mask-own-hero-cent backdrop-blur-md bg-[#ffffff08] xs:space-x-2 flex justify-between max-w-[705px] mx-auto items-center">
              <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[12px] font-[800] text-[#fff]">{t("ProductDetails.livetext")}</h4>
              <div className="flex justify-center space-x-[10px] xs:space-x-[4px] ">
                <div className="w-[58px] h-[41px] xs:w-[35px] xs:h-[29px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                <img className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]" src={eth} alt="" />
                </div>
                <div className="w-[58px] h-[41px] xs:w-[35px] xs:h-[29px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                  <img className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]" src={USDT} alt="" />
                </div>
                <div className="w-[58px] h-[41px] xs:w-[35px] xs:h-[29px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                  <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px] p-[4px] bg-[#212121] rounded-full flex items-center justify-center">
                  <img src={BNB} alt="" />
                  </div>
                </div>
              </div>
              <button className="text-[16px] xs:text-[10px] ftbutton2  font-[700] text-[#000] w-[158px] xs:w-[70px] h-[41px] xs:h-[24px] bgherobtn xs:!rounded-[7px] border-[transparent] border hover:bg-[transparent] hover:text-[#FFD02F] hover:border hover:border-[#FFD02F] "><a href="#dashboard" data-offset="60" onClick={handleLinkClick}>{t("ProductDetails.buyBtn-text")}</a></button>
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden !mt-[20px] md:hidden sm:flex flex space-x-3">
          <div className="w-[50%] space-y-[10px] ">
             <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[16.099px] max-w-[200px] w-[100%] text-center w-[100%]  font-[800] leading-[110%] pb-[13px] " dangerouslySetInnerHTML={{ __html: `${t("ProductDetails.card1")}` }} />
                       <img className="opacity-[0.6] max-h-[35px]" src={icns1} alt="" />
                   </div>
                   <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[16.099px] text-center max-w-[220px] w-[100%]  font-[800] leading-[110%]">{t("ProductDetails.card2")}</h4>
                   <img className="opacity-[0.6] max-h-[35px]" src={icns4} alt="" />
                   </div>
             </div>
              <div className="w-[50%] space-y-[10px] ">
                   <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[16.099px] text-center max-w-[220px] text-center w-[100%]  font-[800] leading-[110%] pb-[8px]  ">{t("ProductDetails.card3")}</h4>
                   <img className="opacity-[0.6] max-h-[35px]" src={icns6} alt="" />
                   </div>
                   <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                       <h4 className="text-[#fff] text-[16.099px]  w-[100%]  font-[800] leading-[110%] text-center pb-[10px] ">{t("ProductDetails.card5formob")}</h4>
                   <img className="opacity-[0.6] max-h-[24px]" src={icns2} alt="" />
                   </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsSection;
