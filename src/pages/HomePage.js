import React,  { Suspense } from "react";

import {
  Footer,
  Navbar,
  About,
  MobileNavbar,
  
  DesktopHero,
  Partners,
  Tokennomics,
  ListComponent,
  Features,
  SportrexVERSE,
  Subscribe,
  SportrexApi,
  SportrexCard,
  GamersWallet,
  SportrexEcosystem,
  MobileFeatures, Roadmap, Loading, MobileRoadmap
} from "../components";
import MobileHero from '../components/MobileScreen/MobileHero'
import MobileTokennomics from '../components/MobileScreen/Tokenomics'
import MobileSubscribe from '../components/MobileScreen/MobileSubscribe'
import MobileAdds from '../components/MobileScreen/MobileAdds'

const OtherComponent = React.lazy(() => import("../components/About"));
const AddsCard = React.lazy(() => import("../components/AddsCard"));

const styles = {
  parentContainer:
    " overflow-x-hidden w-full h-full min-h-screen  flex  justify-center",
  container:
    "w-full h-full flex px-4 flex-col sm:px-4 md:p-2 lg:w-11/12 items-center",
  mobileNavbar: "lg:hidden w-full",
  desktopNavbar: "hidden lg:flex w-full",
};

const HomePage = () => {



  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.desktopNavbar}>
            <Navbar />
          </div>
          <div className={styles.mobileNavbar}>
            <MobileNavbar />
          </div>
          <DesktopHero />
          <MobileHero />

          {/* <Loading /> */}
          <Partners />

          <Suspense fallback={<Loading />}>
            <OtherComponent />
          </Suspense>
          {/* <About /> */}

          <SportrexVERSE />

          <Suspense fallback={<Loading />}>
          
          <AddsCard />
          </Suspense>
          <MobileAdds />

          <Features />

          <MobileFeatures />

          <GamersWallet />

          <SportrexCard />

          <SportrexEcosystem />

          <Tokennomics />
          <MobileTokennomics />

          <Roadmap />
          <MobileRoadmap />

          <SportrexApi />

          <ListComponent />

          <Subscribe />
          <MobileSubscribe />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;

