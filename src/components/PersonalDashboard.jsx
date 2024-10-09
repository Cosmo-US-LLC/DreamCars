import React,{ useState, useEffect, useRef } from 'react'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

import Tick1 from "../assects/images/tick1 (1).png";
import R4 from "../assects/images/rng (4).webp";
import Tierimg from "../assects/images/Tierimg.png";

import info from "../assects/svgs/info.svg";

// import RewardCard from "./RewardsCard";
import Dicn1 from "../assects/svgs/heddropicn (4).svg"
import Dicn2 from "../assects/svgs/heddropicn (3).svg"
import Dicn3 from "../assects/svgs/heddropicn (2).svg"
import Dicn4 from "../assects/svgs/heddropicn (1).svg"
import Dicnclose from "../assects/svgs/heddropicncls.svg"
import RewardCard from '../Page/Home/RewardsCard';
import Button from './Button/button';

const PersonaldashData = [
    {
        id:1,
        title:"DCARS",
        img:Dicn1,
    },
    {
        id:2,
        title:"Bonus",
        img:Dicn2,
    },
    {
        id:3,
        title:"Staking Rewards",
        img:Dicn3,
    },
    {
        id:4,
        title:"DCARS NFT",
        img:Dicn4,
    },
]

function PersonalDashboard({handleButtonClickClose}) {
    const { t } = useTranslation();

  const [rewardAmount, setRewardAmount] = useState(1000);
  const [amountRange, setAmountRange] = useState(1000);
  const [range, setRange] = useState(1000);

  const dashboardRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
      handleButtonClickClose(); // Close the dashboard
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRange = (range) => {
    setRange(range);
  };
  const handleImageClick = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: false,
      theme: "light",
    });
  };

  const listData = [
    {
        id: 1,
        packageType: "RewardSection.packageType5",
        spendPrice: amountRange,
        spendImage: R4,
        packageList: [
          {
            id: 1,
            icon: Tick1,
            text: "RewardSection.packageText51",
            info: "RewardSection.packageinfo15",
            infotitle: "RewardSection.packageinfotitle11",
          },
          {
            id: 2,
            icon: Tick1,
            text: "RewardSection.packageText52",
            info: "RewardSection.packageinfo12",
            infotitle: "RewardSection.packageinfotitle12",
          },
          {
            id: 3,
            icon: Tick1,
            text: "RewardSection.packageText53",
            info: "RewardSection.packageinfo13",
            infotitle: "RewardSection.packageinfotitle13",
          },
          {
            id: 4,
            icon: Tick1,
            text: "RewardSection.packageText54",
            info: "RewardSection.packageinfo14",
            infotitle: "RewardSection.packageinfotitle14",
          },
          {
            id: 5,
            icon: Tick1,
            text: "RewardSection.packageText55",
            info: "RewardSection.packageinfo55",
            infotitle: "RewardSection.packageinfotitle15",
          },
          {
            id: 6,
            icon: Tick1,
            text: "RewardSection.packageText16",
            info: "RewardSection.packageinfo66",
            infotitle: "RewardSection.packageinfotitle16",
          },
        ],
      },
   
  ];
  return (
    <>
    <div className='pb-[2rem] space-y-[15px] !w-[100%] px-[2rem] pt-[10px] relative' ref={dashboardRef}>
        <img onClick={handleButtonClickClose} className='right-[6%] absolute cursor-pointer top-[0.9%]' src={Dicnclose} alt="" />
        <h3 className='text-[22px] font-[900] !m-0 leading-[130%] text-center text-[#fff]'>Personal Dashboard</h3>
        <div className=' mx-[3px] backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] py-[8px]'>
            <div className='relative z-[9]'>
            <p className='text-[#fff] text-[14px] font-[400] text-center'>0xFe588f4dcfaf11216446cf00e c50cbe19b70cf</p>
            </div>
        </div>
        <div className='px-[2rem] py-[0.6rem] mx-[3px] backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px]'>
           <div className='relative z-[9]'>
           <p className='text-[#FFD02F] text-center text-[16px]  font-[900]'>Launch Price</p>
           <h4 className='text-[16px] text-[#fff] font-[900] text-center'>1 DCARS = $0.05</h4>
           </div>
        </div>
        <div className='space-y-[10px]'>
            <h4 className='text-center text-[16px] text-[#fff] font-[400] leding-[130%]'>September 20, 2024</h4>
            <div>
                <div className='space-y-[10px] mx-[3px]'>
                   {
                    PersonaldashData.map((items)=>(
                        <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                        <div className='flex space-x-2 items-center'>
                        <img src={items.img} className='h-[20px]' alt="" />
                        <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>{items.title}</h4>
                        </div>
                        <div>
                            <p className='text-[#FFD02F] font-[700] text-[16px]'>0.00</p>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
        </div>
                <div>
                    <p className='text-[18px] text-[#fff] font-[900] text-center'>Experience even more benefits with</p>
                </div>
        <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]  ">
              {listData.map((item, id, index) =>
                <>
                  <div className="py-6 xs:py-3 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 px-2 backdrop-blur-md gradient-border-mask rounded-[34px] bg-[#d1d5db1f]">
      <div className=" flex justify-between w-[100%] sm:w-[100%] xs:w-[100%]  ">
        {
          <>
            <div className="space-y-2 w-[74%] xs:w-[58%] md:w-[100%] sm:w-full xs:w-full pr-2 xs:pr-0">
              <div className="flex items-center space-x-[1rem] xs:space-x-2">
                <img className="h-[30px] xs:h-[40px]" src={Tierimg} alt="" />

                <h3 className="text-[16px] text-white  sm:text-[18px] xs:text-[16px] font-[700] ">
                  {t(item.packageType)}
                </h3>
              </div>
              <div className="space-y-2 px-5 xs:px-1 ">
                {item.packageList.map((j, id) => (
                  <div key={id} className="flex space-x-2 items-center ">
                    <img className="w-[14px] h-[14px]" src={j.icon} alt="" />
                    <p className="text-[12px] text-white sm:text-[10px] xs:text-[10px] text-[#222222] font-[400] ">
                      {t(j.text)}
                    </p>
                    <div className="relative group">
                      <img src={info} className="cursor-pointer" alt="" />
                        <div className=" z-[99] absolute bottom-0 left-5   rounded-[18px]  group-hover:flex transition-opacity duration-300 w-[260px] hidden  space-x-3">
                          <div className="flex-col justify-center items-center flex gradient-border-mask rounded-[34px] backdrop-blur-xl  bg-[#56688494] px-3 py-6 space-y-[8px]">
                      <img src={info} className="cursor-pointer" alt="" />
                      <p className="text-[#FFD02F] m-0 text-center text-[20px] font-[600]">{t(j.infotitle)}
                      </p>
                      <p className="text-[#fff] m-0 text-center text-[16px] font-[400] leading-[115%]">{t(j.info)}
                      </p>
                          </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 xs:space-y-0 flex justify-center relative  w-[40%] xs:w-[80%]">
              <div  key={item.id} 
                 className={`absolute top-[-10%]  xs:top-[-1%] min-w-[250px] max-w-[220px] w-[100%] pb-3`}
                 style={{ left: index === 0 ? '-60%' : '-40%' }}>
                <img
                  className="h-[auto] max-w-[400px] w-[100%] m-auto xs:w-[170px]"
                  src={item.spendImage}
                  alt=""
                />
              </div>
              <div className="absolute spendbg px-[30px] xs:px-[16px] py-[20px] xs:py-[16px] bottom-[5%] tracking-wide xs:bottom-[12%] xs:pt-3 text-center text-[#292A36] font-bold">
                <h5 className="text-[14px] xs:text-[9px] text-white ">
                  {t("When you spend")}
                </h5>
                <h3 className="text-[16px] sm:text-[10px] text-white xs:text-[10px] font-[Poppins] ">{`$${Number(
                  item.spendPrice
                ).toLocaleString("en-US")} ${t("RewardSection.more")}`}</h3>
              </div>
            </div>
          </>
        }
      </div>
    </div>
              </>
              )}
            </div>
         <div className='' >
            <div className='flex pb-[10px] justify-between items-center'>
                <p className='text-[12px] text-[#fff] font-[400]'>$X.XX left to reach next level </p>
                <p className='text-[#FFD02F] text-[16px] font-[700]'>$100,000</p>
            </div>
                  <RangeSlider
                    className="single-thumb"
                    min={100000}
                    max={100001}
                    rangeSlideDisabled={true}
                    onInput={(e) => {
                      let amount = e[1];
                      console.log(amount,"yes")
                      handleRange(amount);
                      setAmountRange(amount);
                      setRewardAmount(amount);
                    }}
                    thumbsDisabled={[true, false]}
                   
                  />
                </div>
                <div className='pt-[0.2rem] flex justify-between space-x-1'>
                <Button
            link="#hero"
            classes="bgcolor relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[16px] uppercase xs:text-[16px] font-[700]  m-auto "
            text="COPy REFERRAL LINK"
          />{" "}
           <Button
            link="#hero"
            classes="bgcolor relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[16px] uppercase xs:text-[16px] font-[700]  m-auto "
            text="DISCONNECT"
          />{" "}
                </div>
    </div>
    </>
  )
}

export default PersonalDashboard