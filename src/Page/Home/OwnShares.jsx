import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";
import own1 from "../../assects/images/own (5).png";
import own2 from "../../assects/images/own (4).png";
import own3 from "../../assects/images/own (3).png";
import own4 from "../../assects/images/own (2).png";
import own5 from "../../assects/images/own (1).png";
import carown from "../../assects/images/ownfram.png";

const ownData = [
  {
    id: 1,
    title: "SharesSection.mapdataTitle1",
    img: own1,
  },
  {
    id: 2,
    title: "SharesSection.mapdataTitle2",
    img: own2,
  },
  {
    id: 3,
    title: "SharesSection.mapdataTitle3",
    img: own3,
  },
  {
    id: 4,
    title: "SharesSection.mapdataTitle4",
    img: own5,
  },
  {
    id: 5,
    title: "SharesSection.mapdataTitle5",
    img: own4,
  },
];

function OwnShares() {
  const { t } = useTranslation();
  return (
    <>
      <div className="onsharebggr">
        <div className=" 2xl:w-[100%] xl:w-[100%]  lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1186px] mx-auto">
          <h3 className="text-[46px] xs:text-[24px] text-center leading-[130%]  font-[700] text-[#fff]">
          {t('SharesSection.mainTitle')} <br />{t('SharesSection.mainTitle2')}{" "}
          </h3>
          <div className="pb-[4rem] xs:pb-[2rem]">
            <div className="2xl:flex xl:flex lg:flex md:flex sm:flex flex justify-center space-x-[25px] xs:space-x-[10px] py-[37px] xs:py-[20px]">
              {ownData.map((item) => (
                <>
                  <div className="backdrop-blur-md bg-[#d1d5db1f] border-r border-t 2xl:rounded-[34px] xl:rounded-[34px] lg:rounded-[34px] md:rounded-[34px] sm:rounded-[34px] rounded-[18px] ">
                    <div className="min-w-[210px] xs:min-w-[60px] flex flex-col items-center space-y-[20px] xs:space-y-[8px] w-[100%]  p-8 xs:p-2">
                      <div className="h-[90px] xs:h-[30px] flex items-center">
                        <div className="flex justify-center">
                          <img
                            className="max-h-[90px] xs:max-h-[35px] h-[auto] max-w-[140px] xs:max-w-[50px] w-[auto]"
                            src={item.img}
                            alt=""
                          />
                        </div>
                      </div>
                      <h4 className="text-center font-[Lato] text-[#fff] text-[16px] xs:text-[8px]">
                        {t(item.title)}
                      </h4>
                    </div>
                  </div>
                </>
              ))}
            </div>
            {/* <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block xs:pt-[1rem]">
              <Swiper
                breakpoints={{
                  360: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  750: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1124: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1440: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                spaceBetween={20}
                className="mySwiper !w-[100%] h-[100px] !px-[1rem]"
                navigation={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                {ownData.map((item, id) => (
                  <SwiperSlide>
                    <div className="ownbg w-[100%]">
                      <div className="flex flex-col items-center space-y-[20px] xs:space-y-[8px] w-[100%] p-8 xs:p-3">
                        <div className="h-[90px] xs:h-[35px] flex items-center">
                          <div className="flex justify-center">
                            <img
                              className="max-h-[90px] xs:max-h-[35px] h-[auto] max-w-[140px] xs:max-w-[50px] w-[auto]"
                              src={item.img}
                              alt=""
                            />
                          </div>
                        </div>
                        <h4 className="text-center font-[Lato] text-[#fff] text-[16px] xs:text-[8px]">
                        {t(item.title)}
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
            <div className="max-w-[1186px] xs:pt-[1rem] w-[100%] mx-auto">
              <img src={carown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnShares;
