
import React, { useState, useEffect } from "react";


import Iicon from "../../assects/images/i.png";
import Loinp from '../../assects/images/dcoin.png'
import eth from "../../assects/images/loinppre (1).png";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/loinppre (2).png";
import Button from '../../components/Button/button';
import downarw from "../../assects/svgs/droparw.svg"
import downeth from "../../assects/svgs/dropeth.svg"
import Solid from "../../assects/images/logo-white-3.png.png"
import poster from "../../assects/images/vedio.png"
import que from "../../assects/svgs/questionIcon.svg"
import refe from "../../assects/svgs/referralIcon.svg"
import imgclose from "../../assects/images/close.png"

import { getICOPrice, getEth, getBnb, getTotalAmountRaised, getParticipants, getRefCode} from "../utils/interact";


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

import { useTranslation } from 'react-i18next';

const ProductDetailsSection = ({walletAddress, connectWallet, setAddress, buyWithUSDT, buyWithETH, buyWithBNB, refCode, setRefCode, generateRefCode, guestCode, setGuestCode}) => {
    const [isOPen, setIsOPen] = useState(false)
    const [isOPenSpin, setIsOPenSpin] = useState(false)
    const [pop2, setPop2] = useState(false);
    const [pop1, setPop1] = useState(false);
    const [show, setShow] = useState(false);
    const { t } = useTranslation();

    const [price, setPrice] = useState(0)
    const [totalRaised, setTotalRaised] = useState(0)
    const [participants, setParticipants] = useState(0);
    const [currency, setCurrency] = useState('USDT')
    const [amount, setAmount] = useState(0);
    const [rate, setRate] = useState(0)

    console.log(refCode)


    useEffect(() => {

        const setup = async () => {
        setPrice(await getICOPrice());
        setTotalRaised(await getTotalAmountRaised())
        setParticipants(await getParticipants())
        
        
        }
    
        setup();
    
      }, []);
    
   



    const shareUrl = "https://lucent-caramel-6be687.netlify.app/";
    const title = "Scorpio Casino";

    const handleClick = () => {
        setIsOPen(!isOPen)
    }
    const handleClickSpin = () => {
        setIsOPenSpin(!isOPenSpin)
    }
    const handleClose = () => {
        setIsOPen(false)
    }
   

    const handelBonus = () => {
        setShow(!show)
    }

    const getExchangeRate = async (amount) => {
        if(currency == 'ETH'){
            const ethprice = await getEth();
            setAmount(amount)
            setRate((amount * ethprice) / price )
        } else if (currency == 'BNB'){
            const bnbprice = await getBnb();
            setAmount(amount)
            setRate((amount * bnbprice) / price)
        } else {
            setAmount(amount)
            setRate(amount / price)
        }
    }

    const buy = async () => {
        if(currency == 'ETH'){
            buyWithETH(amount);
        } else if (currency == 'BNB'){
            buyWithBNB(amount)
        } else if (currency == 'USDT'){
            buyWithUSDT(amount)
        }
    }

    
    return (
       <div id="hero" className="backgroundgr pt-[4rem] xs:pt-[4rem]">
         <div className=' space-y-4 py-[4rem] xs:py-[2.2rem] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1276px] mx-auto ' >
            {
                isOPen ? (
                    <div
                        id="authentication-modal"
                        className="flex overflow-y-auto overflow-x-hidden fixed top-[10%] right-0 left-0 z-[999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#00000080]"
                    >
                        <div className="relative  w-full max-w-xl max-h-full">
                            {/* <!-- Modal content --> */}
                            <div className="model relative shadow modelbgclr !overflow-hidden">
                                {/* <!-- Modal header --> */}
                                <div className="inner  bgmodelclr2 overflow-none">
                                    <div className="flex pb-[1.5rem] items-center justify-end pt-[1rem]  pr-5">
                                        <button
                                            type="button"
                                            className="end-2.5 text-[32px] text-[#1d1e24] bg-[#2e2f34] rounded-full"
                                            data-modal-hide="authentication-modal"
                                            onClick={handleClose}
                                        >
                                            <img className="h-[30px]" src={imgclose} alt="" />
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* <!-- Modal body --> */}
                                    <div className="pb-[2.5rem]  2xl:px-[30px] xl:px-[30px] lg:px-[30px] md:px-[30px] sm:px-[30px] px-[20px] relative">
                                        <form className="" action="#">
                                            <div>
                                                <h2 className="text-[26px] text-white text-center leading-[28px] font-[700] pb-[24px]">Earn 5% Referral for $DCARS
                                                    referring your friends and community!</h2>
                                                <p className="pb-[24px] text-[16px] text-white text-center font-[400] opacity-[0.9] ">Share your unique link below and receive</p>
                                            </div>
                                            <div className="flex flex-col gap-[24px]">
                                                <input
                                                    type="text"
                                                    name="referral"
                                                    id="referral"
                                                    value={refCode ? refCode : ""}
                                                    className="text-[#1c1d23] text-[18px] font-[500] h-[54px] rounded-[17px] border-[1px] border-solid border-[#443567] pl-[20px] pr-[10px] bg-[#fff] opacity-[0.35] focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 outline-none"
                                                    required
                                                />


                                               {!refCode && (
                                                <div className="text-center">
                                                <Button onClick={(e)=> {
                                                    e.preventDefault();
                                                   if(!walletAddress){
                                                    connectWallet()
                                                   } else {
                                                    generateRefCode();
                                                   }
                                                    
                                                }} text={!walletAddress ? "Connect Wallet" : "Get Code"} classes={"h-[50px] w-[200px] bgcolor text-[black] text-[18px] text-center font-[700] rounded-[30px]"} />
                                            </div>

                                               )} 
                                                <p className="text-[16px] text-white text-center font-[400] opacity-[0.9] ">
                                                    Share it directly on your social media!
                                                </p>
                                                <div className="flex justify-center space-x-8">
                                                    {/* <img className="h-[30px] cursor-pointer" src={popic2} alt="" />
                                                    <img className="h-[30px] cursor-pointer" src={popic1} alt="" />
                                                    <img className="h-[30px] cursor-pointer" src={pop3} alt="" />
                                                    <img className="h-[30px] cursor-pointer" src={pop4} alt="" /> */}
                                                    <TwitterShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className=""
                                                    >
                                                        <XIcon size={32} round />
                                                    </TwitterShareButton>
                                                    <FacebookShareButton
                                                        url={shareUrl}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <FacebookIcon size={32} round />
                                                    </FacebookShareButton>
                                                    <TelegramShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <TelegramIcon size={32} round />
                                                    </TelegramShareButton>
                                                    <WhatsappShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        separator=":: "
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <WhatsappIcon size={32} round />
                                                    </WhatsappShareButton>
                                                </div>
                                            </div>
                                        </form>
                                        <img src="" className="absolute bottom-[0] right-[0]" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ("")
            }
          
            <div className='flex justify-between  lg:space-y-4 xs:space-y-3 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block'>

                <div className="w-[50%] xl:w-[50%] flex flex-col justify-between lg:w-[100%]  xs:w-[100%] sm:w-[100%] md:w-[100%]  ">
                  <div className="space-y-[12px] pt-[1rem] xs:pt-[0rem]"> 
                  <h5 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] leading-[130%] font-[500]  text-white ">{t('ProductDetails.para1')}</h5>
                    <h3 className="text-[40px] xs:text-[24px] leading-[1.3]  font-[700] text-[#fff] "> {t('ProductDetails.title1')}</h3>
                    <h5 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] font-[400] leading-[120%] text-white ">{t('ProductDetails.para2')}</h5>
                   
                  </div>
                  <div className=" flex items-center py-[10px] justify-start space-x-[1rem]">
                                <p className="2xl:text-[15.871px]  xl:text-[15.871px] lg:text-[15.871px] md:text-[15.871px] sm:text-[15.871px]  text-[14px]  text-white underline font-[Lato]">{t('ProductDetails.para3last')}</p>
                                <img className="h-[40px] xs:h-[20px]" src={Solid} alt="" />
                            </div>
                    <div className=" xs:py-[0.8rem] space-y-[1rem] ">
                    <h3 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] text-[16px] text-[#fff] font-[900] font-[700]">{t('ProductDetails.watchpara')}</h3> 
                        <video controls preload="metadata" poster={poster} playsinline className="bg-filterved rounded-[20px] bgposter min-h-[430px] xs:min-h-[160px]  xs:h-[190px] sm:h-[330px] md:h-[420px] " height="100px" width="100%" >
                            <source src={""} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='w-[45%] xl:w-[45%] lg:w-[65%] lg:mx-auto flex flex-col justify-end  xs:w-[100%] sm:w-[100%] md:w-[100%] z-[2]'>
                    <div className="backdrop-blur-md bg-[#d1d5db1f] border-r border-t rounded-[19px] space-y-[10px]">
                    <div className=' py-[30px]   2xl:px-[52px] xl:px-[45px] lg:px-[32px] md:px-[52px] sm:px-[52px] px-[10px]  space-y-4'>
                        <div>
                            <h3 className="2xl:text-[36px] xl:text-[36px] lg:text-[26px] md:text-[26px] sm:text-[28px] text-[18px] font-[700] text-center  2xl:leading-[60px] xl:leading-[60px]  lg:leading-[35px] md:leading-[60px] sm:leading-[60px] text-white">{t('ProductDetails.card-title')}</h3>
                        </div>
                        <div className='bgposter '>

                            <div className="bg-[#212121] max-w-[703px] rounded-t-[13px] px-8 xs:px-[15px]  sm:px-16 md:px-16 py-6 xs:pt-5 sm:pt-5 md:pt-8 ">
                                <h3 className='2xl:text-[50px] xl:text-[44px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px] font-[Poppins] font-[700] text-center text-[#fff]'>${Number(totalRaised).toFixed(2)}</h3>
                                <div className='flex items-center justify-between space-x-2 '>
                                    <h5 className=' text-center font-[Lato] 2xl:text-[16px] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[13px] xs:text-[9px]  text-[#929292]'>{`${Number((totalRaised/3000000) * 100).toFixed(4) }%`} {t('ProductDetails.card-goal-raised')}</h5>
                                    <span className="relative">
                                        <button onMouseEnter={() => setPop1(true)} onMouseOut={() => setPop1(false)} type="button" className={`cursor-pointer `}>
                                            <img src={Iicon} alt="" style={{ marginBottom: "-8px", width: "20px" }} />
                                        </button>
                                        <div className={`${pop1 ? 'absolute z-10 w-[220px] right-28 top-[0px] 2xl:right-[0px] xl:right-[0px] lg:right-[0px] 2xl:top-[-56px] xl:-top-[56px] lg:top-[-56px] md:right-[0px] md:top-[-56px] sm:right-[0px] sm:top-[-56px] xs:right-[0px] xs:top-[-56px] text-center py-2 px-3 bg-[#ffffff]  rounded-lg text-[#22222] text-sm' : 'hidden'}`}>
                                            <span className="text-black font-[Lato]">The initial launch price for 1 $DCARS is set at $0.1.
                                            </span>
                                            <div className="absolute -z-99 w-5 h-5 -bottom-1 sm:right-[10px] xs:right-[10px] right-[10px] bg-[#ffffff] rotate-45"></div>
                                        </div>

                                    </span>
                                </div>
                                <div>
                                    <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                                        <div style={{width: `${(totalRaised/3000000) * 100 }%`}} className={`bgcolor h-2.5 rounded-full`} ></div>
                                    </div>
                                    <p className='text-end text-[12px]  text-[#929292]'>{t('ProductDetails.card-small-amount')}</p>
                                </div>
                                <div>
                                    <h5 className='font-[Lato] text-center text-[18px] xs:text-[18px] font-[500] text-white'>{participants} {t('ProductDetails.card-participants')}</h5>
                                    <div>

                                    </div>
                                    <h5 className='font-[Lato] text-center text-[14px] xs:text-[14px]  font-[500] space-x-1 text-[#929292]'>{t('ProductDetails.card-listingPrice')} ${price}</h5>


                                </div>
                            </div>
                            <div className='bg-[#3F3F3F] rounded-b-[10px] p-4 xs:pb-5 sm:pb-5 md:pb-8  xs:px-[15px] sm:px-14 md:px-10 '>
                                <div className="flex justify-between">
                                </div>
                                <div className="py-2 space-y-5 xs:space-y-3" >
                                    <div className="flex space-x-2 items-center justify-center">
                                        <hr className="text-white w-[20%]" />
                                        <h4 className="text-white font-[Lato] text-[13px] xs:text-[9px]"> <span className="pr-1">1 DCARS</span>=<span>$0.0714</span></h4>
                                        <hr className="text-white w-[20%]" />
                                    </div>
                                    <div className="2xl:flex justify-between xl:flex lg:flex md:flex flex sm:flex  2xl:space-y-2 xl:space-y-2 lg:space-y-2 md:space-y-2 sm:space-y-0 space-y-0 2xl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-0 sm:space-x-0 space-x-1">
                                        <button onClick={()=> {connectWallet(true); setCurrency('ETH')}} className="flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] flex justify-center text-white xs:text-[14px] rounded-[14px] bg-[#ffffff17] space-y-3 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-0  xs:py-1  py-[10px] backdrop-blur">
                                            <div className="flex w-[60px]">
                                                <img src={eth} className="h-[22px] mr-2" alt="" />
                                                <span className="mt-0 contents font-[Lato] w-[30px] "> ETH</span>
                                            </div>
                                        </button>
                                        <button onClick={()=> {setCurrency('USDT')}} className="flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%]  flex justify-center text-white xs:text-[14px] rounded-[14px] bg-[#ffffff17] space-y-3 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-0  xs:py-1 py-[10px] backdrop-blur">
                                            <div className="flex w-[60px]">
                                                <img src={USDT} className="h-[22px] xs:h-[20px] mr-2" alt="" />
                                                <span className="mt-0 contents font-[Lato] w-[30px] "> USDT</span>
                                            </div>
                                        </button>
                                        <button onClick={()=> {setCurrency('BNB')}} className="flex items-center  xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%]  flex justify-center text-white xs:text-[14px] rounded-[14px] bg-[#ffffff17] space-y-3 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-0  xs:py-1 py-[10px] backdrop-blur">
                                            <div className="flex w-[60px]">
                                                <img src={BNB} className="h-[25px] mr-2" alt="" />
                                                <span className="mt-0 contents font-[Lato] w-[30px] ">BNB</span>
                                            </div>
                                        </button>

                                    </div>
                                    <div className=" bg-[#ffffff17] backdrop-blur rounded-[5px] p-3">
                                       
                                        <div className="flex">
                                            <div className="w-[70%]">
                                            <label htmlFor="" className="text-[#D0D0D0] font-[Lato] xs:text-[9px]">{currency}</label>
                                            <input onChange={(e)=> {getExchangeRate(e.target.value)}} type="text" className="text-[#fff] text-[20px] bg-[transparent] font-[Lato] w-[100%] outline-none rounded-l " placeholder="0" />
                                            </div>
                                            {/* <button className="flex text-[#fff] text-[12px] font-[400] items-center justify-between p-[7px] !pr-[10px] w-[130px] h-[54px] border rounded-[40px] bg-[transparent]">
                                               <div className="flex items-center space-x-[8px]">
                                               <img src={downeth} className="" alt="" />
                                                <span className="leading-[100%] pt-1">
                                                <span>USDT</span> <br />
                                                <span className="text-[8px] font-[400] text-[#7A7A7A]">ERC-20</span>
                                                </span>
                                               </div>
                                                <img src={downarw} className="" alt="" />

                                            </button> */}
                                        </div>
                                    </div>
                                    <div className="space-y-1 bg-[#ffffff17] backdrop-blur rounded-[5px] p-3">
                                        <div className="flex">
                                            <div className="w-[70%]">
                                        <label htmlFor="" className="text-[#D0D0D0] font-[Lato] xs:text-[9px]">{t('ProductDetails.card-body-amount-receive')} <span className="text-[#FFD02F] font-[800]">{t('ProductDetails.card-body-amount-receivespan')}</span></label>
                                            <input type="text" className="text-[#fff] text-[20px] bg-[transparent] font-[Lato] w-[100%] outline-none rounded-l " value={rate} placeholder="0" />
                                            </div>
                                            <button  onClick={buy} className="flex text-[#fff] text-[12px] font-[400] items-center p-2 space-x-[8px] w-[130px] h-[54px]  border rounded-[40px] bg-[transparent]">
                                                <img src={Loinp} className=" w-[32px] xs:w-[35px] mr-2" alt="" />
                                                $DCARS
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-[100%]">
                                        <Button  onClick={(e)=> {
                                            e.preventDefault();
                                            if(walletAddress.length > 0){
                                                setAddress("")
                                            } else {
                                                connectWallet();
                                                console.log(walletAddress)
                                            }
                                        }}classes="bgcolor font-[600] font-[Lato] w-[100%] h-[54px] rounded-[5px] text-[18px]" text={ walletAddress.length > 0 ? 
                                            `${walletAddress}`
                                            : `${t('ProductDetails.card-body-walletBtn')}`} />
                                    </div>
                                    {
                                        show &&
                                        <div className="flex ">
                                            <input onChange={(e)=> {setGuestCode(e.target.value)}} type="text" className="h-[40px] w-[100%] px-2 outline-none rounded-l "  placeholder="Bonus code" />
                                            <button className="flex h-[40px] items-center text-white rounded-r space-y-3 px-5  border-l bg-black">
                                                <p className="text-[12px] text-whites font-[700]">{t('ProductDetails.card-body-Bonus-code-apply')}</p>
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="flex justify-between  space-x-[15px] pt-[1rem] xs:pt-[0.5rem]">

                                <a onClick={handleClickSpin} className="flex cursor-pointer border border-[#fff] text-[14px] xs:text-[11px] font-[500]  leading-[21px] flex w-[278px] h-[30px] items-center justify-center text-white font-[Lato] rounded-[10px] bg-[#3F3F3F]"> <img className="pr-1 w-[22px] h-[22px]" src={que} alt="" /> {t('ProductDetails.card-body-buyBtn')}</a>
                                <button onClick={handleClick} className="cursor-pointer border border-[#fff] text-[14px] xs:text-[11px] font-[500] font-[Lato] leading-[21px] flex w-[278px] h-[30px] items-center justify-center text-white  rounded-[10px] bg-[#3F3F3F]"> <img className="pr-1 w-[22px] h-[22px]" src={refe} alt="" />{t('ProductDetails.card-body-referralBtn')}</button>


                            </div>

                            {
                                !show &&
                                <div className="pt-[2rem]">
                                    <p onClick={handelBonus} className="cursor-pointer text-[#DDD] underline text-center  text-[13px] font-[500] leading-[7px]">{t('ProductDetails.card-body-Bonus-code')}</p>
                                </div>
                            }
                           
                        </div>
                    </div>
                       
                    </div>
                </div>
            </div>

        </div>
       </div>
    )
}
export default ProductDetailsSection;