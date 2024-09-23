import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import line from "../../assects/svgs/linesvg.svg";
import img1 from "../../assects/images/howdoesimg (7).png";
import img2 from "../../assects/images/howdoesimg (6).png";
import img3 from "../../assects/images/howdoesimg (5).png";
import img4 from "../../assects/images/howdoesimg (4).png";
import img5 from "../../assects/images/howdoesimg (3).png";
import img6 from "../../assects/images/howdoesimg (2).png";
import img7 from "../../assects/images/howdoesimg (1).png";

const howDoseData = [
  {
    id: 1,
    number: "01",
    para:
      "Dreamcars presents a new car after conducting research, negotiating the price, and making a pre-agreement with the seller (with the most important factor being the demand and supply in the market)",
    image: img1, 
  },
  {
    id: 2,
    number: "02",
    para: "The car gets listed in the upcoming section of Dreamcars",
    image: img2,
  },
  {
    id: 3,
    number: "03",
    para: "Swap BNB for $DCARS",
    image: img3,
  },
  {
    id: 4,
    number: "04",
    para: "Buy Shares of the Car",
    image: img4,
  },
  {
    id: 5,
    number: "05",
    para:
      "The car is then rented out by Dreamcars, and each owner earns monthly rental income in USDT based on their shareholdings",
    image: img5,
  },
  {
    id: 6,
    number: "06",
    para: "Use our Liquidity Pool to get instant liquidity",
    image: img6,
  },
  {
    id: 7,
    number: "07",
    para: "Trade your Shares in Seconds on the Dreamcars Marketplace",
    image: img7,
  },
];

const HowdoesDreamcarsSec = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="Howdoesbggr">
      <div className="w-[100%] max-w-[1232px] mx-auto py-[80px]">
        <div>
          <h3 className="text-[46px] font-[700] text-center text-[#fff]">
            How does Dreamcars work Exactly?
          </h3>
          <div className="flex justify-between items-end pt-[70px]">
            <div className="w-[50%] space-y-[15px]">
              {howDoseData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)} 
                  className={`flex items-center h-[116px] backdrop-blur-md border-r border-t px-[22px] py-[18px] rounded-[23px] space-x-[20px] cursor-pointer ${
                    activeId === item.id
                      ? "bg-[#0000008c]" 
                      : "bg-[#d1d5db1f]" 
                  }`}
                >
                  <h3 className="text-[61.412px] font-[900] text-[#FFC83D] leading-[130%]">
                    {item.number}
                  </h3>
                  <img src={line} alt="" />
                  <p className="text-[18px] font-[400] leading-[130%] text-[#fff]">
                    {item.para}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-[45%] flex justify-center items-center pb-[2rem]">
              <img
                src={
                  howDoseData.find((item) => item.id === activeId)?.image
                } 
                className="w-[100%]"
                alt="Active display"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowdoesDreamcarsSec;
