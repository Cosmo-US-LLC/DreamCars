import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import toptemimg1 from "../../assects/images/top10 (10).png";
import toptemimg2 from "../../assects/images/top10 (9).png";
import toptemimg3 from "../../assects/images/top10 (8).png";
import toptemimg4 from "../../assects/images/top10 (7).png";
import toptemimg5 from "../../assects/images/top10 (6).png";
import toptemimg6 from "../../assects/images/top10 (5).png";
import toptemimg7 from "../../assects/images/top10 (4).png";
import toptemimg8 from "../../assects/images/top10 (3).png";
import toptemimg9 from "../../assects/images/top10 (2).png";
import toptemimg10 from "../../assects/images/top10 (1).png";
import cardft2 from "../../assects/images/cardft (1).png";
import cardft3 from "../../assects/images/cardft (2).png";
import topcrdicn1 from "../../assects/svgs/topcardicn (2).svg";
import topcrdicn2 from "../../assects/svgs/topcardicn (1).svg";
import save from "../../assects/images/save.png";
import Button from "../../components/Button/button";


const topTenData = [
    {
        id:1,
        para:"They want to create an extra income stream that could earn them tens of thousands of USDT each month, all done remotely, to build a strong financial foundation for their future.",
        number:"#1",
        img:toptemimg1,
    },
    {
        id:2,
        para:"They want the ability to use a relatively small amount, less than $100,000, and want a way to earn significant returns, which is almost impossible outside of Dreamcars, especially when it comes to real assets",
        number:"#2",
        img:toptemimg2,
    },
    {
        id:3,
        para:"They’re looking to add a high-profit, real-world asset to their crypto portfolio to protect their wealth from market volatility, rising inflation, hacks, and to mitigate risks overall.",
        number:"#3",
        img:toptemimg3,
    },
    {
        id:4,
        para:"They’re crypto traders and they want to park their funds and earn income while waiting for new opportunities, without cashing out to fiat.",
        number:"#4",
        img:toptemimg4,
    },
    {
        id:5,
        para:"They want to earn income while also having the ability to rent luxury cars in popular Dreamcars locations like Dubai, Miami, Marbella, or other prime spots, at discounted prices.",
        number:"#5",
        img:toptemimg5,
    },
    {
        id:6,
        para:"They want to earn monthly rental income with the flexibility to access their funds quickly, whenever needed.",
        number:"#6",
        img:toptemimg6,
    },
    {
        id:7,
        para:"They are interested in owning luxury cars, earning income from them, and trading them without having to spend hundreds of thousands of dollars.",
        number:"#7",
        img:toptemimg7,
    },
    {
        id:8,
        para:"They They want to participate in the growing luxury car rental market without the hassle of running the business.",
        number:"#8",
        img:toptemimg8,
    },
    {
        id:9,
        para:"They’re seeking high-return alternatives to negative or low bank interest rates.",
        number:"#9",
        img:toptemimg9,
    },
    {
        id:10,
        para:"They want to be among the first to join an innovative, future-forward business model that combines the luxury car rental market with blockchain technology.",
        number:"#10",
        img:toptemimg10,
    },
]

const TopTenSec = () => {
  const { t } = useTranslation();

  return (
    <div className="toptenbggr">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1250px] 2xl:space-y-[3rem] xl:space-y-[3rem] lg:space-y-[3rem] md:space-y-[3rem] sm:space-y-[2rem] space-y-[2rem] pb-[0rem] xs:py-[1rem] mx-auto ">
        <div className="text-center space-y-[20px] ">
          <h3 className="text-[40px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t("TopTenSec.title")}` }}>
          </h3>
          <p className="2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[16px] text-[16px] text-[#fff] max-w-[1102px] mx-auto w-[100%]">
          {t("TopTenSec.para")}
          </p>
        </div>
      
        <div className="whysec">
          <Swiper
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },
              750: {
                slidesPerView: 1,
              },
              1124: {
                slidesPerView: 1,
              },
              1440: {
                slidesPerView: 1,
              },
            }}
            keyboard={true}
            spaceBetween={14}
            className="mySwiper "
            navigation={true}
            modules={[Navigation, Keyboard]}
          >
           {
            topTenData.map((item)=>(
                <SwiperSlide>
                <div className="w-[100%] !overflow-hidden">
                <div className="min-h-[621px] xs:min-h-[400px] xs:max-h-[520px] pt-[15px] px-[2rem] xs:px-[1rem] backdrop-blur-md xs:!backdrop-blur-none bg-[#d1d5db1f] xs:!bg-[transparent] rounded-[38px] max-w-[1102px] mx-auto h-[auto] w-[100%]">
                  <div className="relative backdrop-blur-md flex judtigy-between items-center border rounded-[38px] py-[4rem] xs:px-[2rem]">
                       <img className="absolute top-[5%] left-[1%] h-[100px] xs:h-[40px]" src={topcrdicn1} alt="" />
                       <p className="text-[36px] xs:text-[22px] text-[#fff] font-[400] text-center max-w-[792px] w-[100%] mx-auto leading-[118%]">{item.para}</p>
                       <img className="absolute bottom-[5%] right-[2%] h-[57.643px] xs:h-[30px]" src={topcrdicn2} alt="" />
                       <div className="hidden xs:block">
                       <p className="text-[#043798] mt-[3rem] bg-[#fff] leading-[124.914px] px-[32px] rounded-[100px] text-[95px] font-[300] xs:absolute xs:bottom-[0%] left-[0%] xs:px-[20px] xs:rounded-[50px] xs:text-[26px] xs:leading-[150%]">{item.number}</p>
                   </div>
   
                  </div>
                  <div className="flex items-center h-[420px] xs:h-[220px]">
                   <div className="block xs:hidden">
                       <p className="text-[#043798] mt-[3rem] bg-[#fff] leading-[124.914px] px-[32px] rounded-[100px] text-[95px] font-[300] xs:absolute xs:top-[34%] xs:px-[20px] xs:rounded-[50px] xs:text-[26px] xs:leading-[150%]">{item.number}</p>
                   </div>
                  <img className="absolute bottom-[-3%] xs:bottom-[3%] xs:min-w-[420px] !max-w-[900px] !w-[100%] right-[-9%]" src={item.img} alt="" />
                  </div>
                 </div>
                </div>
               </SwiperSlide>
            ))
           }
          </Swiper>
        </div>
        <div className="pt-[25px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block xs:!mt-[10px] xs:py-[0px] flex justify-center xs:pt-[0px] w-[100%] ">
          <Button
            link="#hero"
            text={`${t("BetaSection.btn")}`}
            classes="font-[700] bgcolor flex justify-center items-center max-w-[169px] xs:max-w-[358px] w-[100%] mx-auto py-[12px] xs:text-[14px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};
export default TopTenSec;
