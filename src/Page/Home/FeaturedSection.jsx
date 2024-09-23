import React from "react";
import { useTranslation } from "react-i18next";


import img1 from "../../assects/images/fti (1).png"
import img2 from "../../assects/images/fti (2).png"
import img3 from "../../assects/images/fti (3).png"
import img4 from "../../assects/images/fti (4).png"
import img5 from "../../assects/images/fti (5).png"
import img6 from "../../assects/images/fti (6).png"
import img7 from "../../assects/images/fti (7).png"


const imgData = [
    
    {
        id: 1,
        imgName: img1,
    },
    {
        id: 2,
        imgName: img7,
    },
    {
        id: 3,
        imgName: img6,
    },
    {
        id: 4,
        imgName: img5,
    },
 
]
const imgData2 = [
    {
        id: 1,
        imgName: img2,
    },
    {
        id: 2,
        imgName: img3,
    },
    {
        id: 3,
        imgName: img4,
    }
 
]




const FeaturedSection = () => {
  const { t } = useTranslation();

    return (
        <>
            <div className="backgroundgr px-10 xs:px-0  fetbg py-12 xs:py-9" >
                <div className="text-center">
                    <h2 className="font-[700] color text-[46px] xs:text-[24px] text-[#fff] ">{t('FeaturedSection.mainTitle')}</h2>
                </div>
                <div className="max-w-[1240px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] mx-auto">
                <div className=" mx-auto px-4 xs:px- pt-5 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-2 xs:grid-cols-4 sm:grid-cols-4 ">
                    {
                        imgData.map((item, id) => (
                                <img className="w-[auto] h-[auto] 2xl:max-h-[50px] xl:max-h-[50px] lg:max-h-[50px] md:max-h-[50px] sm:max-h-[50px] max-h-[30px] mx-auto xs:h-[auto]" src={item.imgName}  alt="" />
                        ))
                    }

                </div>
                <div className="mx-auto px-4 xs:px-0 pt-5 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2 xs:grid-cols-3 sm:grid-cols-3 ">
                    {
                        imgData2.map((item, id) => (
                                <img className="w-[auto] max-h-[50px] mx-auto h-[auto] xs:h-[auto]" src={item.imgName}  alt="" />
                        ))
                    }

                </div>
                </div>
            </div>

        </>
    )
}
export default FeaturedSection