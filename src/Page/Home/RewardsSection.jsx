import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

import Tick1 from "../../assects/images/tick1 (1).png";
import cross from "../../assects/images/xcs.svg";
import Crown from "../../assects/images/rng (5).png";
import R1 from "../../assects/images/rng (2).png";
import R2 from "../../assects/images/rng (3).png";
import R3 from "../../assects/images/rng (1).png";
import R4 from "../../assects/images/rng (4).png";

import RewardCard from "./RewardsCard";

const RewardSection = () => {
  const { t } = useTranslation();

  const [rewardAmount, setRewardAmount] = useState(1000);
  const [amountRange, setAmountRange] = useState(1000);
  const [range, setRange] = useState(1000);

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
      packageType: "RewardSection.packageType1",
      spendPrice: amountRange,
      spendImage: R2,

      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText13",
          message:
            "You will earn additional Daily Staking Rewards. For example, with the Gold Membership NFT, you’ll receive an additional 5% on the current daily staking rewards rate. So, if the daily rate is hypothetically 1%, you would get 1.05% staking rewards based on the total SCORP tokens you purchased.",
        },
        {
          id: 4,
          icon: cross,
          text: "RewardSection.packageText14",
          message:
            "You can withdraw a portion of your SCORP staking rewards in USDT. For example, with Gold Membership, you can get 10% of your total staking rewards paid out in USDT.",
        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText15",
          message:
            "You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events.",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
          message:
            "You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events.",
        },
      ],
    },
    {
      id: 2,
      packageType: "RewardSection.packageType2",
      spendPrice: amountRange,
      spendImage: R1,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText21",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText22",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText23",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText24",
        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText25",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
        },
      ],
    },
    {
      id: 3,
      packageType: "RewardSection.packageType3",
      spendPrice: amountRange,
      spendImage: R3,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText31",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText32",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText33",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText34",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText35",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
        },
      ],
    },
    {
      id: 4,
      packageType: "RewardSection.packageType4",
      spendPrice: amountRange,
      spendImage: Crown,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText41",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText42",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText43",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText44",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText45",
        },
        {
          id: 6,
          icon: Tick1,
          text: "RewardSection.packageText16",
        },
      ],
    },
    {
      id: 5,
      packageType: "RewardSection.packageType5",
      spendPrice: amountRange,
      spendImage: R4,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText51",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText52",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText53",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText54",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText55",
        },
        {
          id: 6,
          icon: Tick1,
          text: "RewardSection.packageText16",
        },
      ],
    },
  ];
  return (
    <div className="backgroundgrRewrd relative">
      <div className="bgshade absolute left-[33%]"></div>
      <div className="max-w-[1221px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto space-y-[2rem] py-[4rem] xs:py-[2rem]">
        <div className="backdrop-blur-md bg-[#d1d5db1f] border-r border-t rounded-[56px] px-10 xs:px-4 py-6 xs:py-6">
          <div className=" relative z-[2] flex justify-between items-center md:block sm:block xs:block">
            <div className=" xs:text-center sm:text-center w-[48%] space-y-10 pr-2 md:w-[100%] md:py-4  sm:w-[100%] sm:py-4  xs:w-[100%] xs:py-4">
              <div className="">
                <h3 className="2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[24px] text-[24px] max-w-[400px] w-[100%] xs:text-[30px] xs:leading-[33px] font-[700]  leading-[40px] pb-6 text-[#fff]">
                  {t("RewardSection.title")}<span className="font-[Poppins] font-[600]">$1000</span>
                </h3>
                <p className="text-[18px] xs:text-[16px] sm:text-[16px] font-[400]  text-white" dangerouslySetInnerHTML={{ __html: t('RewardSection.para') }}>
                </p>
              </div>
              <div className="space-y-4 ">
                <div className="flex justify-between items-center">
                  <h5 className="text-[18px] xs:text-[14px] sm:text-[14px] font-[400]  leading-[25px] text-white">
                    {" "}
                    {t("RewardSection.spendText")}
                  </h5>
                  <h3 className="text-[20px] text-white xs:text-[18px] sm:text-[18px] font-[600] font-[Poppins]">
                    $ {Number(rewardAmount).toLocaleString("en-US")}
                  </h3>
                </div>
              
                <div>
                  <RangeSlider
                    className="single-thumb"
                    min={1000}
                    max={100000}
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
              </div>
            </div>
            <div className=" 2xl:w-[52%] xl:w-[52%] lg:w-[52%] md:w-[100%] sm:w-[100%] w-[100%]  ">
              {listData.map((item, id) =>
                amountRange >= 1000 && amountRange <= 2499 && item.id === 1 ? (
                  // eslint-disable-next-line no-sequences
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    key={id}
                    amountRange={amountRange}
                  />
                ) : "" ||
                  (amountRange >= 2500 &&
                    amountRange <= 9999 &&
                    item.id === 2) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    key={id}
                  />
                ) : "" ||
                  (amountRange >= 10000 &&
                    amountRange <= 24999 &&
                    item.id === 3) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    key={id}
                  />
                ) : "" ||
                  (amountRange >= 25000 &&
                    amountRange <= 99999 &&
                    item.id === 4) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    key={id}
                  />
                ) : "" ||
                  (amountRange >= 100000 &&
                    amountRange <= 100000 &&
                    item.id === 5) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    key={id}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RewardSection;
