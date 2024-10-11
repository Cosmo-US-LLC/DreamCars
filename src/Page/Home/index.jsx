import React from "react";

import RewardSection from "./RewardsSection";
import BenefitSection from "./BenefitsSection";
import BetaSection from "./BetaSection";
import BuySection from "./BuySection";
import FeaturedSection from "./FeaturedSection";
import ProductDetaliSection from "./ProductDetailsSection";
import Roadmap from "./RoadMap";
import TokenDetailsSection from "./TokenDetailsSection";
import TokenomicsSectiion from "./TokenomicsSectiion";
import LicensedCardSection from "./LicensedCardSection";
import DailySection from "./DailySection";
import Media from "./Media";
import PoweredBy from "./PoweredBy";
import FaqList from "./Faq";

import AmbassadorsSection from "./AmbassadorsSection";
import OwnShares from "./OwnShares";
import OWnCarSection from "./OwnCar";
import MostFunSection from "./MostFun";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import MustKnowSection from "./MustKnow";
import BuildSection from "./BuildSection";
import DistributionSection from "./Distribution";
import NftSection from "./NftSection";
import AcquiredSection from "./AcquiredSection";
import OwnersSection from "./OwnersSection";
import Loader from "../../components/Loader";
import WhyShouldSection from "./WhyShouldSection";
import SomeQuestions from "./SomeQuestions";
import LamborghiniSection from "./LamborghiniSection";
import ExampleSection from "./ExampleSection";
import GrowingSection from "./GrowingSection";
import LegalBusinessSec from "./LegalBusinessSec";
import SimpleandReliableSec from "./SimpleandReliableSec";
import HowdoesDreamcarsSec from "./HowdoesDreamcarsSec";
import DreamcarsOpenSec from "./DreamcarsOpenSec";
import DreamcarsFeaturesSec from "./DreamcarsFeaturesSec";
import WhatIsDocSec from "./WhatIsDocSec";
import DreamcarsbusinessSec from "./DreamcarsbusinessSec";
import OwnershipSection from "./OwnershipSection";
import WhatTheySaySec from "./WhatTheySaySec";

const Home = ({
  connectWallet,
  setAddress,
  walletAddress,
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
    <div className=" bg-[#111010]  overflow-hidden">
      <div id="home" className="">
        <ProductDetaliSection
          connectWallet={connectWallet}
          setAddress={setAddress}
          walletAddress={walletAddress}
          buyWithBNB={buyWithBNB}
          buyWithETH={buyWithETH}
          buyWithUSDT={buyWithUSDT}
          buyWithBUSDT={buyWithBUSDT}
          refCode={refCode}
          setRefCode={setRefCode}
          generateRefCode={generateRefCode}
          guestCode={guestCode}
          setGuestCode={setGuestCode}
        />
      </div>
      <div>
        <OwnShares />
      </div>
      {/* <div>
        <Loader />
      </div> */}
      <div>
        <FeaturedSection />
      </div>
      <div>
        <BetaSection />
      </div>
      {/* <div>
        <LicensedCardSection />
      </div> */}
      <div>
        <OWnCarSection />
      </div>
      <div>
        <BenefitSection />
      </div>
      <div>
        <WhyShouldSection />
      </div>
      <div>
        <RewardSection />
      </div>
      <div>
        <SomeQuestions />
      </div>
      <div>
        <BuySection />
      </div>
      <div>
        <LamborghiniSection />
      </div>
      <div>
        <ExampleSection />
      </div>
      <div>
        <GrowingSection />
      </div>
      <div>
        <LegalBusinessSec />
      </div>
      <div>
        <SimpleandReliableSec />
      </div>
      <div>
        <HowdoesDreamcarsSec />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <DreamcarsFeaturesSec />
      </div>

      <div>
        <MostFunSection />
      </div>

      <div>
        <OwnersSection />
      </div>
      <div>
        <DailySection />
      </div>
      <div>
        <TokenomicsSectiion />
      </div>
      <div>
        <MustKnowSection />
      </div>
      <div>
        <BuildSection />
      </div>
      <div>
        <WhatIsDocSec />
      </div>
      <div>
        <DreamcarsbusinessSec />
      </div>
      <div>
        <OwnershipSection />
      </div>
      <div>
        <DreamcarsOpenSec />
      </div>
      <div>
        <TokenDetailsSection />
      </div>
      <div>
        <DistributionSection />
      </div>
      {/* <div>
        <NftSection />
      </div> */}
      <div>
        <Roadmap />
      </div>
      <div>
        <AcquiredSection />
      </div>
      {/* <div>
            <AmbassadorsSection />
          </div> */}
      {/* <div>
            <Media />
          </div> */}
      <div>
        <WhatTheySaySec />
      </div>
      <div className="">
        <PoweredBy />
        <FaqList />
      </div>
    </div>
  );
};
export default Home;
