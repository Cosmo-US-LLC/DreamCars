import React, { useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Iicon from "../../assects/images/i.png";
import Loinp from "../../assects/images/dtoken.png";
// import eth1 from "../../assects/images/loinppre (1).png";
import eth from "../../assects/svgs/ethsv.svg";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/loinppre (2).png";
import Button from "../../components/Button/button";
import downarw from "../../assects/svgs/droparw.svg";
import downeth from "../../assects/svgs/dropeth.svg";
import Solid from "../../assects/images/logo-white-3.png.png";
import poster from "../../assects/images/vedio.png";
import que from "../../assects/svgs/questionIcon.svg";
import refe from "../../assects/svgs/referralIcon.svg";
import imgclose from "../../assects/images/close.png";
import Link1 from "../../assects/svgs/ftsvg (1).svg";
import Link2 from "../../assects/svgs/ftsvg (2).svg";
import Link3 from "../../assects/svgs/ftsvg (3).svg";
import Link4 from "../../assects/svgs/ftsvg (4).svg";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { useTranslation } from "react-i18next";

const options = [
  { id: 1, label: "USDT",  image: downeth}, 
  { id: 2, label: "BNB",  image: BNB },
  { id: 3, label: "ETH", image: eth },
];

const ProductDetailsSection = () => {
  const [isOPen, setIsOPen] = useState(false);
  const [isOPenSpin, setIsOPenSpin] = useState(false);
  const [pop2, setPop2] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation();

  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 1, label: 'ETH', imgSrc: eth },
    { id: 2, label: 'USDT', imgSrc: USDT },
    { id: 3, label: 'BNB', imgSrc: BNB }
  ];

  const handleClickButton = (id) => {
    setActiveButton(id);
  };

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown); 
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setShowDropdown(false); 
  };

  const handleClick = () => {
    setIsOPen(!isOPen);
  };
  
  const handleClose = () => {
    setIsOPen(false);
  };

  const handelBonus = () => {
    setShow(!show);
  };

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
    <div id="hero" className="backgroundgr pt-[3.5rem] xs:pt-[4rem]">
      <div className=" space-y-4 py-[4rem] xs:py-[2.2rem] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1276px] mx-auto ">
        <div className="flex justify-between  lg:space-y-4 xs:space-y-3 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
          <div className="w-[50%] xl:w-[50%] flex flex-col justify-between lg:w-[100%]  xs:w-[100%] sm:w-[100%] md:w-[100%]  ">
            <div className="space-y-[12px] xs:pt-[0rem]">
              <h5 className="2xl:text-[17.5px] xl:text-[17.5px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] leading-[130%] font-[400] font-[Lato] text-white ">
                {t("ProductDetails.para1")}
              </h5>
              <h3 className="text-[40px] xs:text-[24px] leading-[1.3] capitalize font-[900] font-[Lato] text-[#fff] ">
                {" "}
                {t("ProductDetails.title1")}
              </h3>
              <h5 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] font-[400] leading-[120%] text-white ">
                {t("ProductDetails.para2")}
              </h5>
            </div>
            <div className=" flex items-center py-[0px] xs:!pt-[20px] justify-start space-x-[1rem]">
              <a href="https://github.com/solidproof/projects/blob/main/2024/Dreamcars/EVM_Audit_SolidProof_Dreamcars.pdf" target="_blank" className="2xl:text-[15.871px]  xl:text-[15.871px] lg:text-[15.871px] md:text-[15.871px] sm:text-[16.871px]  text-[16px]  text-white underline font-[Lato]">
                {t("ProductDetails.para3last")}
              </a>
              <img className="h-[30px] xs:h-[28px]" src={Solid} alt="" />
            </div>
            <div className="xs:pt-[20px] xs:pb-[0.8rem] space-y-[1rem] ">
              <h3 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] text-[16px] text-[#fff] font-[900] font-[700]">
                {t("ProductDetails.watchpara")}
              </h3>
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
          </div>
          <div className="w-[45%] xl:w-[45%] lg:w-[65%] lg:mx-auto flex flex-col justify-end  xs:w-[100%] sm:w-[100%] md:w-[100%] z-[2]">
            <div className="backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask rounded-[34px] space-y-[10px]">
              <div className=" pt-[18px] pb-[14px] xs:pb-[20px]   2xl:px-[52px] xl:px-[45px] lg:px-[32px] md:px-[52px] sm:px-[52px] px-[10px]  space-y-4">
                <div>
                  <h3 className="2xl:text-[24px] xl:text-[24px] lg:text-[26px] md:text-[26px] sm:text-[28px] text-[18px] font-[700] text-center  2xl:leading-[120%] xl:leading-[120%]  lg:leading-[120%] md:leading-[120%] sm:leading-[120%] text-white">
                    {t("ProductDetails.card-title")}
                  </h3>
                </div>
                <div className="bgposter ">
                  <div className="bg-[#212121] max-w-[703px] rounded-t-[13px] px-8 xs:px-[15px]  sm:px-16 md:px-16 py-6 xs:pt-5 sm:pt-5 md:pt-8 ">
                    <h3 className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px]  font-[700] text-center text-[#fff]">
                      {t("ProductDetails.card-main-amount")}
                    </h3>
                    <div className="flex items-center justify-between space-x-2 ">
                      <h5 className=" text-center font-[Lato] 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[13px] sm:text-[13px] xs:text-[12px]  text-[#929292]">
                        {t("ProductDetails.card-goal-raised")}
                      </h5>
                      <span className="relative">
                        <button
                          onMouseEnter={() => setPop1(true)}
                          onMouseOut={() => setPop1(false)}
                          type="button"
                          className={`cursor-pointer `}
                        >
                          <img
                            src={Iicon}
                            alt=""
                            style={{ marginBottom: "-8px", width: "20px" }}
                          />
                        </button>
                        <div
                          className={`${
                            pop1
                              ? "absolute z-10 w-[220px] right-28  2xl:right-[0px] xl:right-[0px] lg:right-[0px] 2xl:top-[-104px] xl:top-[-104px] lg:top-[-104px] md:right-[0px] md:top-[-56px] sm:right-[0px] sm:top-[-56px] xs:right-[0px] top-[-92px] text-center py-2 px-3 bg-[#ffffff]  rounded-lg text-[#22222] text-sm"
                              : "hidden"
                          }`}
                        >
                          <span className="text-black font-[Lato]">
                          The pre-sale (ICO) will take place in multiple stages, with the $DCARS token price increasing at each stage.
                          </span>
                          <div className="absolute -z-99 w-5 h-5 -bottom-1 sm:right-[10px] xs:right-[10px] right-[10px] bg-[#ffffff] rotate-45"></div>
                        </div>
                      </span>
                    </div>
                    <div>
                      <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bgcolor h-2.5 rounded-full w-[98%]"></div>
                      </div>
                      <p className="text-end text-[12px] pt-[3px]  text-[#929292]">
                        {t("ProductDetails.card-small-amount")}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-[Lato] text-center text-[14px] xs:text-[18px] font-[500] text-white">
                        {t("ProductDetails.card-participants")}
                      </h5>
                      <div></div>
                      <h5 className="font-[Lato] text-center text-[11px] xs:text-[14px]  font-[500] space-x-1 text-[#929292]">
                        {t("ProductDetails.card-listingPrice")}
                      </h5>
                    </div>
                  </div>
                  <div className="bg-[#3F3F3F] rounded-b-[10px] p-4 xs:pb-5 sm:pb-5 md:pb-8  xs:px-[15px] sm:px-14 md:px-10 ">
                    <div className="flex justify-between"></div>
                    <div className="py-1 space-y-4 xs:space-y-3">
                      <div className="flex backdrop-blur-md bg-[#ffffff40] border-r border-t rounded-[60px] max-w-[362px] w-[100%] mx-auto py-[7px]  items-center justify-center">
                        <p className="text-[14px] text-[#fff] text-center font-[700]">
                          Current Price = $0.0105{" "}
                          <span className="text-[#19D548] font-[700]">(+500%)</span>
                        </p>
                      </div>
                      <div className="2xl:flex justify-between xl:flex lg:flex md:flex flex sm:flex 2xl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-0 sm:space-x-0 space-x-1">
                      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleClickButton(button.id)}
          className={`flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] justify-center xs:text-[14px] rounded-[14px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-0 xs:py-1 py-[8px] backdrop-blur transition-all duration-300 ${
            activeButton === button.id
              ? 'bg-white text-black shadow-inner' 
              : 'bg-[#ffffff17] text-white'
          }`}
        >
          <div className="flex flex-col items-center justify-center w-[60px]">
            <img src={button.imgSrc} className="h-[17px]" alt={button.label} />
            <span className="mt-0 text-[9px] font-[Lato] w-[30px]">{button.label}</span>
          </div>
        </button>
      ))}
                      </div>
                      <div className="flex relative z-[9]">
                          <div className="w-[100%] space-y-[5px]">
                            <label
                              htmlFor=""
                              className="text-[#D0D0D0] font-[Lato] text-[12px] xs:text-[14px]"
                            >
                              {t("ProductDetails.card-body-amount-pay")}
                            </label>
                          <div className="flex bg-[#fff] rounded-[6px]">
                          <input
                              type="text"
                              className="bg-[#fff] w-[80%] p-2 rounded-l-[6px] text-[#000] text-[20px] h-[42px] font-[Lato] w-[100%] outline-none rounded-l "
                              placeholder="100"
                            />
                          <div className="relative z-[9] inline-block text-left">
                            <button onClick={handleButtonClick} className="flex text-[#fff] text-[12px] font-[400] items-center justify-between p-[7px] !pr-[10px] 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[42px] border rounded-r-[6px] bg-[#D1D5DB]">
                              <div className="flex items-center space-x-[8px]">
                                <img
                                  src={selectedOption.image}
                                  alt={selectedOption.label}
                                  className="max-h-[32px] min-h-[31px]"
                                />
                                <span className="text-[#000] leading-[100%] pt-1">
                                  <span>{selectedOption.label}</span>
                                </span>
                              </div>
                              <img
                                src={downarw}
                                className=""
                                alt="dropdown arrow"
                              />
                            </button>
                            { showDropdown && (
                            <div className="absolute right-0 mt-2 w-[130px] backdrop-blur-md bg-[#646464e6] rounded-[12px] shadow-lg">
                              {options.map((option) => (
                                <div
                                  key={option.id}
                                  onClick={() => handleOptionClick(option)}
                                  className="cursor-pointer flex  items-center p-[7px] space-x-[8px] hover:bg-[#737373] rounded-[5px]"
                                >
                                  <div className="flex items-center justify-center min-w-[32px]">
                                  <img
                                    src={option.image}
                                    alt={option.label}
                                    className="max-h-[30px] min-h-[29px]"
                                  />
                                  </div>
                                  <span className="text-[#fff]">{option.label}</span>
                                </div>
                              ))}
                            </div>
                            )} 
                          </div>
                          </div>
                          </div>
                        </div>
                       <div className="flex relative z-[1]">
                          <div className="w-[100%] space-y-[5px]">
                            <label
                              htmlFor=""
                              className="text-[#D0D0D0] font-[Lato] text-[12px] xs:text-[14px]"
                            >
                              {t("ProductDetails.card-body-amount-receive")}{" "}
                              <span className="text-[#FFD02F] font-[800] underline">
                                {t(
                                  "ProductDetails.card-body-amount-receivespan"
                                )}
                              </span>
                            </label>
                           <div className="flex items-center justify-between bg-[#fff] rounded-[6px]">
                            <input
                              type="text"
                              className="text-[#000] p-2 text-[20px] h-[42px] bg-[#fff] font-[Lato] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-[70%] outline-none rounded-l-[6px] "
                              placeholder="58.823"
                            />
                          <button className="flex text-[12px] font-[400] items-center px-2 space-x-[8px] 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[42px] text-[#000] rounded-r-[6px] bg-[#D1D5DB]">
                            <img
                              src={Loinp}
                              className="h-[32px] xs:w-[35px] xs:h-[35px] mr-2 xs:mr-1"
                              alt=""
                            />
                            $DCARS
                          </button></div>
                          </div>
                        </div>
                      <div className="w-[100%] relative z-[1] xs:pt-[20px]">
                        <Button
                          classes="bgcolor font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[18px]"
                          text={`${t("ProductDetails.card-body-walletBtn")}`}
                        />
                      </div>
                      {show && (
                        <div className="flex relative z-[1]">
                          <input
                            type="text"
                            className="h-[40px] w-[100%] px-2 outline-none rounded-l"
                            placeholder="Bonus code"
                          />
                          <button className="flex h-[40px] items-center text-white rounded-r space-y-3 px-5   bg-black">
                            <p className="text-[12px] text-whites font-[700]">
                              {t("ProductDetails.card-body-Bonus-code-apply")}
                            </p>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" flex justify-between relative z-[1] space-x-[15px] xs:pt-[0.5rem]">
                    <a
                     href="#how-to-buy"
                     onClick={handleLinkClick}
                     data-offset="100"
                      className="flex cursor-pointer border border-[#fff] text-[14px] xs:text-[11px] font-[500]  leading-[21px] flex w-[278px] h-[30px] items-center justify-center text-white font-[Lato] rounded-[10px] bg-[#3F3F3F]"
                    >
                      {" "}
                      <img
                        className="pr-1 w-[22px] h-[22px]"
                        src={que}
                        alt=""
                      />{" "}
                      {t("ProductDetails.card-body-buyBtn")}
                    </a>
                    <button
                      onClick={handleClick}
                      className="cursor-pointer border border-[#fff] text-[14px] xs:text-[11px] font-[500] font-[Lato] leading-[21px] flex w-[278px] h-[30px] items-center justify-center text-white  rounded-[10px] bg-[#3F3F3F]"
                    >
                      {" "}
                      <img
                        className="pr-1 w-[22px] h-[22px]"
                        src={refe}
                        alt=""
                      />
                      {t("ProductDetails.card-body-referralBtn")}
                    </button>
                  </div>

                </div>
                <div className="relative z-[1] pt-[10px] ">
                  <p className="text-[15px] text-center font-[400] text-[#fff] ">Share Dreamcars with your Friends</p>
                </div>
                  {!show && (
                    <div className="pb-[0.5rem] relative z-[1]">
                      <p
                        onClick={handelBonus}
                        className="cursor-pointer text-[#DDD] underline text-center  text-[13px] font-[500] leading-[7px]"
                      >
                        {t("ProductDetails.card-body-Bonus-code")}
                      </p>
                    </div>
                  )}
                <div className="flex relative z-[1] space-x-3 justify-center">
          <a href="" target="" rel="noopener noreferrer"  onClick={(e) => {
        e.preventDefault(); 
        copyUrlToClipboard();
      }}>
          <img
            className="h-[26px] xs:h-[20px] cursor-pointer w-[26px] xs:w-[20px]"
            src={Link1}
            alt=""
          />
          </a>
         <a href="https://twitter.com/dreamcars_bsc" target="_blank" rel="noopener noreferrer">
         <img
            className="h-[26px]  xs:h-[20px] cursor-pointer w-[26px] xs:w-[20px]"
            src={Link2}
            alt=""
          /></a>
         <a href="https://t.me/Dreamcars_bsc" target="_blank" rel="noopener noreferrer">
         <img
            className="h-[26px]  xs:h-[20px] cursor-pointer w-[26px] xs:w-[20px]"
            src={Link3}
            alt=""
          />
         </a>
         <a href="https://www.instagram.com/dreamcars_bsc/" target="_blank" rel="noopener noreferrer">
         <img
            className="h-[26px]  xs:h-[20px] cursor-pointer w-[26px] xs:w-[20px]"
            src={Link4}
            alt=""
          />
         </a>
          
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsSection;
