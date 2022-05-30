import React from "react";

import google from "../assets/google.png";
import apple from "../assets/apple.png";

import Fade from "react-reveal/Fade";

import CheckIcon from './CheckIcon';

const styles = {
  parentContainer: "w-full h-full px-4 lg:pl-0 my-4 lg:my-8 relative pt-2",
  mainContainer: "w-full h-full flex-col  flex space-y-6 lg:space-x-10 z-20",
  titleContainer: "w-full h-auto",
  title: "  text-[22px] lg:text-[2.4rem] gradient-text  biome-bold mb-8",
  flexContainer:
    "w-full h-full flex-col space-y-4 lg:space-y-0 lg:flex-row flex md:mt-8  ",
  sectionA: "  w-9/12 lg:w-3/12 flex lg:items-center lg:h-full ",
  sectionB: " w-full lg:w-9/12 flex flex-col pl-0 items-start md:space-y-2   lg:pl-8",
  sectionList:
    " w-full h-full  flex flex-col lg:flex-row md:justify-between lg:items-start md:space-x-4 ",
  item: " w-full lg:w-6/12 flex items-start space-x-2 leading-9 md:mb-0 lg:px-4 ",
  itemSpecial: " w-full  flex items-start space-x-2 leading-9 mb-6 lg:pl-8 ",
  icon: "text-white text-base lg:w-6 h-auto ",
  icon1: "text-white text-xl  lg:w-10 h-auto ",
  icon2: "text-white text-xl  lg:w-10 h-auto ",
  text: "biome-regular m-story leading-[25px] md:leading-9 md:text-[1.375rem] text-white",
  downloadContainer: "w-full h-full flex space-x-4 md:pl-8 ",
  downloadItem: " w-36 lg:w-36 h-12",
  downloadImg: "w-full h-auto cursor-pointer",
  imgContainer: " w-full lg:w-11/12 h-full element-index",
  img: "w-full h-auto element-index ",
};



const GamersWallet = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.mainContainer} style={{ zIndex: "2000" }}>
        <div className={styles.titleContainer}>
          <Fade top>
            <h1 className={styles.title}>GamersWallet</h1>
          </Fade>
        </div>

        <div className={styles.flexContainer}>
          <Fade left>
            <div className={styles.sectionA}>
              <div className={styles.imgContainer}>
                <img
                  src="https://media.publit.io/file/iphone-Z.png"
                  className={styles.img}
                  alt="iphone"
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className={styles.sectionB}>
              <div className={styles.sectionList}>
                <Fade bottom delay={300}>
                  <div className={styles.item}>
                    <CheckIcon />
                    <p className={styles.text}>
                      A fully decentralized cryptocurrency wallet{" "}
                    </p>
                  </div>
                </Fade>
                {/* $%$%$%$%$%$TYTYTYTYTYTYTYTYTYTYTYT */}
                <Fade bottom delay={800}>
                  <div className={styles.item}>
                    <CheckIcon />
                    <p className={styles.text}>
                      Winnings are instantly deposited in the wallet and can be
                      converted to the cryptocurrency of choice.
                    </p>
                  </div>
                </Fade>
                {/* $%$%$%$%$%$TYTYTYTYTYTYTYTYTYTYTYT */}
              </div>
              {/* #######################Dowwnload */}
              <div className="w-full justify-start lg:w-6/12">
                <Fade bottom delay={1300}>
                  <div className={styles.itemSpecial}>
                    <CheckIcon />
                    <p className={styles.text}>
                      It serves several purposes ranging from savings, to bet
                      scheduling, and staking on the Defi platform.
                    </p>
                  </div>
                </Fade>
                {/* $%$%$%$%$%$TYTYTYTYTYTYTYTYTYTYTYT */}
              </div>
              <Fade bottom delay={1500}>
                <div className={styles.downloadContainer}>
                  <div className={styles.downloadItem}>
                    <img
                      src={google}
                      alt="download"
                      className={styles.downloadImg}
                    />
                  </div>
                  <div className={styles.downloadItem}>
                    <img
                      src={apple}
                      alt="download"
                      className={styles.downloadImg}
                    />
                  </div>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
      <div className="blur-circle-purple bg-index" />
    </div>
  );
};

export default GamersWallet;


