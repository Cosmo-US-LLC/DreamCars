import React from "react";
import Home from "../Page/Home";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

const Layout = ({
  handelClick,
  connectWallet,
  walletAddress,
  setAddress,
  buyWithUSDT,
  buyWithBUSDT,
  buyWithETH,
  buyWithBNB,
  refCode,
  setRefCode,
  generateRefCode,
  guestCode,
  setGuestCode
}) => {
  return (
    <>
      <div className="">
        <div className="mb-[4rem] z-[99] w-[100%] fixed xs:mb-[3rem] sm:mb-[3rem] md:mb-[3rem]">
          <Navbar
            handelClick={handelClick}
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setAddress={setAddress}
            className=""
          />
        </div>
        <div className="">
          <Home
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setAddress={setAddress}
            buyWithBNB={buyWithBNB}
            buyWithETH={buyWithETH}
            buyWithUSDT={buyWithUSDT}
            buyWithBUSDT={buyWithBUSDT}
            refCode={refCode}
            setRefCode={setRefCode}
            generateRefCode={generateRefCode}
            guestCode={guestCode}
            setGuestCode={setGuestCode}
            className=""
          />
        </div>
        <div>
          <Footer className="bg-[#111010]" />
        </div>
      </div>
    </>
  );
};
export default Layout;
