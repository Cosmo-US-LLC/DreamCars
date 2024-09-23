import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/Button/button";

import Logo from "../../assects/logo/Logo.svg";

import wallet from "../../assects/images/Wallet.png";
import walletblack from "../../assects/images/walletblack.png";
import WalletBlue from "../../assects/svgs/walletsvg.svg";
import globe from "../../assects/images/globe.png";
import flg from "../../assects/svgs/fg (13).svg";
import fg1 from "../../assects/svgs/fg (1).svg";
import fg2 from "../../assects/svgs/fg (2).svg";
import fg3 from "../../assects/svgs/fg (3).svg";
import fg4 from "../../assects/svgs/fg (4).svg";
import fg5 from "../../assects/svgs/fg (5).svg";
import fg6 from "../../assects/svgs/fg (6).svg";
import fg7 from "../../assects/svgs/fg (7).svg";
import fg8 from "../../assects/svgs/fg (8).svg";
import fg9 from "../../assects/svgs/fg (9).svg";
import fg10 from "../../assects/svgs/fg (10).svg";
import fg11 from "../../assects/svgs/fg (11).svg";
import fg12 from "../../assects/svgs/fg (12).svg";
import fg13 from "../../assects/svgs/fg (13).svg";
import fg14 from "../../assects/svgs/fg (14).svg";

import i18n from "i18next";
import { useMoralis } from "react-moralis";
import { useTranslation } from "react-i18next";
import HoverDropDn from "../../components/HoverDropDn";

const Navbar = ({ handelClick }) => {
  const [lang, setLang] = useState("Eng");
  const [selectedLang, setSelectedLang] = useState({
    img: fg13,
    title: "English",
  });
  const [langStatus, setLangStatus] = useState(false);

  const [navBarOpen, setNavBarOpen] = useState(false);
  const { t } = useTranslation();

  const locales = {
    en: { img: fg13, title: "English" },
    gr: { img: fg12, title: "German" },
    fr: { img: fg11, title: "French" },
    es: { img: fg10, title: "Spanish" },
    it: { img: fg9, title: "Italian" },
    du: { img: fg8, title: "Dutch" },
    tu: { img: fg7, title: "Turkey" },
    jp: { img: fg6, title: "Japan" },
    kr: { img: fg5, title: "Korean" },
    nr: { img: fg4, title: "Norwegian" },
    ru: { img: fg3, title: "Russian" },
    ch: { img: fg2, title: "Chinese" },
    pr: { img: fg1, title: "Portugese" },
    vt: { img: fg14, title: "Vietnamese" },
  };

  const handleLangDropdown = () => {
    setLangStatus(!langStatus);
  };
  const handleNavbarMenu = () => {
    setNavBarOpen(!navBarOpen);
  };
  const handleNavbarMenuClose = () => {
    setNavBarOpen(false);
  };

  const dropdownRef = useRef(null);
  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale);

    // Set the selected language and close the dropdown
    setSelectedLang(locales[locale]);
    setLangStatus(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLangStatus(false);
      // Add any other logic to close dropdowns here
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-[#0D0904]">
      <nav className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1300px] mx-auto py-1 xs:py-1">
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-10 h-16 max-w-screen-2xl sm:px-0 xs:px-0 lg:px- ">
            <div className="flex items-center">
              <div className="flex items-center w-[100%] max-w-[200px] pb-[0.7rem] xs:pb-[0rem] xs:w-[136px]">
                <a href="#hero">
                  <img
                    src={Logo}
                    className="h-[55px] xs:h-[27px] sm:h-[53px] w-[100%]"
                    alt="Metropoly Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-[22px] xs:space-x-[8px]">
            <div className="flex items-center justify-between xs:justify-start space-x-5 xs:space-x-0 ">
              <div className="flex justify-between  items-center space-x-6 xs:hidden sm:hidden md:hidden ">
                <h4 className="text-white  text-[18px] lg:text-[10px] xl:text-[14px] font-[400] hover:text-[#a0a0a0]">
                  {" "}
                  <a href="#dreamcar">{t("main.navlink1")}</a>{" "}
                </h4>
                <h4 className="text-white  text-[18px] lg:text-[10px] xl:text-[14px] font-[400] hover:text-[#a0a0a0]">
                  {" "}
                  <a href="#whitepaper">{t("main.navlink2")}</a>
                </h4>
                <h4 className="text-white  text-[18px] lg:text-[10px] xl:text-[14px] font-[400] hover:text-[#a0a0a0]">
                  {" "}
                  <a href="#roadmap">{t("main.navlink4")}</a>{" "}
                </h4>
                <h4 className="text-white  text-[18px] lg:text-[10px] xl:text-[14px] font-[400] hover:text-[#a0a0a0]">
                  {" "}
                  <a href="#token">{t("main.navlink5")}</a>{" "}
                </h4>
                <h4 className="text-white  text-[18px] lg:text-[10px] xl:text-[14px] font-[400] hover:text-[#a0a0a0]">
                  {" "}
                  <a href="#faqs">{t("main.navlink6")}</a>{" "}
                </h4>
              </div>
            </div>
            <div className="flex items-center space-x-[9px] xs:space-x-[5px] ">
              <li className="flex items-center xs:hidden sm:hidden md:hidden">
                <div className="relative border border-[#fff] rounded-[30px] px-2">
                  <button
                    onClick={handleLangDropdown}
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-white font-medium rounded-lg text-sm w-[full]  py-2.5 text-center inline-flex items-center px-2"
                    style={{}}
                    type="button"
                  >
                    <img src={selectedLang.img} width={20} className="mr-2" />
                    {selectedLang.title}

                    <svg
                      className={`fill-current text-white h-4 w-4 transform ${
                        langStatus ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {langStatus && (
                    <>
                      <div className="relative">
                        <div
                          id="dropdown"
                          ref={dropdownRef}
                          className="absolute font-[Poppins] w-[1000px]   -left-[630%] top-[21px] z-10 "
                        >
                          <HoverDropDn
                            onLanguageChange={handleLanguageChange}
                            locales={locales}
                          />
                        </div>
                      </div>
                      <div onClick={handleLangDropdown} className="relative">
                        <div className="bg-[#f0f8ff00] !w-[1400px] -top-[2] right-[-513%]  absolute"></div>
                      </div>
                      {/* <div onClick={handleLangDropdown} className='relative'>
                                            <div className='bg-[#faebd700] !w-[1400px] -top-[2] right-[-513%] h-[100vh] absolute '></div>
                                        </div> */}
                    </>
                  )}
                </div>
              </li>
              <button className="border border-[#fff] relative rounded-[30px] text-[#fff] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[10px] font-[700] rounded-full 2xl:pr-[50px] xl:pr-[50px] lg:pr-[50px] md:pr-[50px] sm:pr-[40px] pr-[40px] pl-[20px] w-[auto] xs:h-[31px] h-[40px]">
                {" "}
                {t("main.navBtn")}{" "}
                <span className="absolute top-[0%] flex justify-center items-center right-[0%] w-[39px] xs:w-[30px] xs:h-[30px] inline-block h-[39px] bg-[#fff] rounded-[30px]">
                  <img src={walletblack} alt="" />
                </span>{" "}
              </button>
              <button
                type="button"
                onClick={handleNavbarMenu}
                className="p-1 sm:mr-4 xl:hidden lg:hidden 2xl:hidden"
              >
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        {navBarOpen && (
          <div className="">
            <div className=" relative  space-y-4 py-6 px-6 2xl:hidden xl:hidden lg:hidden !h-[1800px] bg-[#111010] w-full left-0 absolute">
              <button
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                <a href="#dreamcar">{t("main.navlink1")}</a>
              </button>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                <a href="#whitepapertag">{t("main.navlink2")}</a>
              </h4>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                {" "}
                <a href="#roadmap">{t("main.navlink4")}</a>
              </h4>{" "}
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                {" "}
                <a href="#token">{t("main.navlink5")}</a>
              </h4>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                <a href="#faqs">{t("main.navlink6")}</a>
              </h4>
              <li className="flex items-center ">
                <div className="relative ">
                  <button
                    onClick={handleLangDropdown}
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-white font-medium rounded-lg text-sm w-[full]  py-2.5 text-center inline-flex items-center "
                    style={{}}
                    type="button"
                  >
                    <img src={selectedLang.img} width={20} className="mr-2" />
                    {selectedLang.title}
                    <svg
                      className={`fill-current text-white h-4 w-4 transform ${
                        langStatus ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {langStatus && (
                    <>
                      <div className="relative">
                        <div
                          id="dropdown"
                          ref={dropdownRef}
                          className="absolute xs:w-[310px] h-[320px] xs:mx-auto w-[1000px] xs:left-[0%] -left-[860%] top-[3px] z-10 "
                        >
                          <HoverDropDn
                            onLanguageChange={handleLanguageChange}
                            locales={locales}
                          />
                        </div>
                      </div>
                      <div onClick={handleLangDropdown} className="relative">
                        <div className="bg-[#f0f8ff00] w-[1400px]  -top-[2] right-[-513%]  absolute"></div>
                      </div>
                      {/* <div onClick={handleLangDropdown} className='relative'>
                                            <div className='bg-[#faebd700] !w-[1400px] -top-[2] right-[-513%] h-[100vh] absolute '></div>
                                        </div> */}
                    </>
                  )}
                </div>
              </li>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
