import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const faqsData = [
  {
    question: "When will I get my Dreamcar NFT?",
    answer: "You’ll automatically receive your Dreamcar NFT after purchasing the required amount of $DCARS tokens. They will appear in your personal dashboard and can be claimed once the transaction is confirmed.",
  },
  {
    question: "When will I get my Bonuses?",
    answer:
      "Your bonuses will be added to your account on a monthly basis. Most of them will be available as soon as your chosen Dreamcar is rented out. These bonuses are calculated based on the share of your investment and the performance of the rental.",
  },
  {
    question: "Can I get an NFT with multiple purchases?",
    answer: "Yes, you can accumulate $DCARS tokens in smaller amounts to reach the total needed for specific Dreamcar investments. For example, if you buy $200 worth of $DCARS five times, you’ll own the equivalent of a higher share in the luxury car of your choice.",
  },
  {
    question: "Can I upgrade my Dreamcar NFT?",
    answer: "Yes, you can increase your investment by buying additional $DCARS tokens while NFT’s are still available. For example, if you spend $1,000 on $DCARS, you’ll own a higher portion of the car's value. You can upgrade your NFT level by continuing to invest until the NFT’s are sold out.",
  },

];

function SomeQuestions() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
   <div className="somegrbg pt-[80px]">
     <div className=" max-w-[1221px] space-y-[3rem] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto  pb-[4rem]">
      <div className="backdrop-blur-md bg-[#d1d5db1f] border-r border-t 2xl:rounded-[34px] xl:rounded-[34px] lg:rounded-[34px] md:rounded-[34px] sm:rounded-[6px] rounded-[6px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[1rem] px-[1rem] 2xl:pt-[3rem] xl:pt-[3rem] lg:pt-[3rem] md:pt-[3rem] sm:pt-[2rem] pt-[2rem] 2xl:pb-[3rem] xl:pb-[3rem] lg:pb-[3rem] md:pb-[3rem] sm:pb-[3rem] pb-[3rem] space-y-[2rem] ">
        <div>
          <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[24px] text-[24px] text-[#fff] font-[700] text-center xs:w-[200px] mx-auto">
          Some Questions You Might Have
          </h3>
          
        </div>
        <div className="space-y-[1rem]">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className=" border-b-[2px] border-[#505050] px-[1rem] py-[20px]"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <h4 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[16px] text-[16px]  font-[400] text-[#fff]">
                  {t(faq.question)}
                </h4>
                <span className="text-[20px] font-[600] text-[#fff] border border-[#fff] rounded-[50px] w-[30px] flex justify-center items-center h-[30px]">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                 <p
                 className="faqp text-[#fff] w-[70%] xs:w-[90%] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px] font-[400] text-[#000]"
                 dangerouslySetInnerHTML={{ __html: t(faq.answer) }}
               ></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
}

export default SomeQuestions;
