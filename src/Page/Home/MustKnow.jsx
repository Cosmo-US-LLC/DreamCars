import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import Button from "../../components/Button/button";
import youmust from "../../assects/images/mustimg.png";
import icons1 from "../../assects/images/musticon (6).png";
import icons2 from "../../assects/images/musticon (1).png";
import icons3 from "../../assects/images/musticon (5).png";
import icons4 from "../../assects/images/musticon (4).png";
import icons5 from "../../assects/images/musticon (3).png";
import icons6 from "../../assects/images/musticon (2).png";

const muchKnoeData = [
  {
    id: 1,
    titlekey: "MustKnowSection.cardtitke1",
    para: "MustKnowSection.cardLastPara",
    img: icons1,
  },
  {
    id: 2,
    titlekey: "MustKnowSection.cardtitke2",
    para: "MustKnowSection.cardLastPara2",
    img: icons2,
  },
  {
    id: 3,
    titlekey: "MustKnowSection.cardtitke3",
    para: "MustKnowSection.cardLastPara3",
    img: icons3,
  },
  {
    id: 4,
    titlekey: "MustKnowSection.cardtitke4",
    para: "MustKnowSection.cardLastPara4",
    img: icons4,
  },
  {
    id: 5,
    titlekey: "MustKnowSection.cardtitke5",
    para: "MustKnowSection.cardLastPara5",
    img: icons5,
  },
  {
    id: 6,
    titlekey: "MustKnowSection.cardtitke6",
    para: "MustKnowSection.cardLastPara6",
    img: icons6,
  },
];

const MustKnowSection = () => {
  const { t } = useTranslation();

  return (
    <div className="Thingsbggr ">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[94%] md:w-[94%] sm:w-[94%] w-[94%] max-w-[1346px] ml-auto 2xl:mr-auto xl:mr-0 lg:mr-auto md:mr-auto sm:mr-auto mr-auto mt-0 mb-0 xs:mr-auto py-[4rem] xs:py-[2rem] space-y-[60px] xs:space-y-[15px]">
        <div className="space-y-[6px] xs:space-y-4 ">
          <h3 className="text-center  text-[46px] xs:text-[24px] font-[700] text-[white] ">
          {t('MustKnowSection.title')}
          </h3>
          <p className="text-[22px] font-[400] text-[#fff] xs:text-[18px] text-center" dangerouslySetInnerHTML={{ __html: t('MustKnowSection.Para') }}>
          </p>
        </div>
        <div className="flex xs:block justify-between relative xs:space-y-[30px]">
          <div className="w-[53%] xs:hidden sm:hidden">
            <div className="grid grid-cols-2 gap-[20px]">
              {muchKnoeData.map((item) => (
                <>
                  <div className="backdrop-blur-md border-t border-r rounded-[24px] bg-[#d1d5db1f] px-8 py-[14px] space-y-[7px] min-h-[181px]">
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[32px] h-[32px]"
                        src={item.img}
                        alt=""
                      />
                      <h3 className="text-[15px] font-[900] text-[#fff] uppercase">
                      {t(item.titlekey)}
                      </h3>
                    </div>
                    <p className="text-[#fff] text-[14px] font-[400]">
                    {t(item.para)}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden mdLhidden sm:block block">
            <Swiper
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 1,
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
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              spaceBetween={20}
              className="mySwiper flex justify-center"
              navigation={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
             
             <div>
             {muchKnoeData.map((item) => (
               <SwiperSlide className="wrap !px-[1rem]">
                <>
                  <div className="h-[270px] mustcardbg px-8 py-[14px] space-y-[7px]">
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[32px] h-[32px]"
                        src={item.img}
                        alt=""
                      />
                      <h3 className="text-[18px] font-[900] text-[#fff] uppercase">
                      {t(item.titlekey)}
                      </h3>
                    </div>
                    <p className="text-[#fff] text-[18px] font-[400]">
                    {t(item.para)}
                    </p>
                  </div>
                </>
                 </SwiperSlide>
              ))}
             </div>
            
            </Swiper>
          </div>
          <div className="w-[44%] xs:w-[90%] mx-auto !mr-0 xs:!mr-auto">
            <div className="mustimgbg relative w-[100%] py-6 min-h-[500px] xs:min-h-[300px] h-[100%] max-h-[680px] flex items-center">
              <div>
                <div className="">
                  <img
                    className="2xl:max-h-[402px] xl:max-h-[424px] lg:max-h-[424px] md:max-h-[424px] sm:max-h-[424px] max-h-[374px] w-[100%] mx-auto"
                    src={youmust}
                    alt=""
                  />
                  <div className="flex justify-center ">
                    <Button
                      link="#hero"
                      text={`${t("BetaSection.btn")}`}
                      classes="font-[700] bgcolor w-[519px] xs:w-[130px] xs:h-[34px] h-[50px] xs:text-[18px] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MustKnowSection;
