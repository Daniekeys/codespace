import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import carImg from "../assets/CAR-IMAGE.png";
import desk3 from "../assets/desk/desk3.png";

import telegram from '../assets/icons/telegram.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'
import discord from '../assets/icons/discord.png'
import twitch from '../assets/icons/twitch.png'
import AirdropModal from "./Modals/AirdropModal";
import PresaleModal from "./Modals/PresaleModal";
const linksArray = [
  {
    id: "1",
    link: "https://t.me/sportrexofficial",
    icon: telegram,
    name:"telegram"
  },
  {
    id: "2",
    link: "https://twitter.com/sportrexhq",
    icon: twitter,
     name:"twitter"
  },
  {
    id: "3",
    link: "https://instagram.com/sportrexofficial",
    icon: instagram,
     name:"instagram"
  },
  {
    id: "4",
    link: " https://discord.gg/sportrexofficial",
    icon: discord,
     name:"discord"
  },
  {
    id: "5",
    link: "https://www.twitch.tv/sportrexofficial",
    icon: twitch,
     name:"twitch"
  },
];
const imagesArray = [
  // "https://media.publit.io/file/playerBG.png",
  carImg,
  // "https://media.publit.io/file/car-BG.png",
];

const styles = {
  mainContainer:"pt-[4rem]",
  container:
    "hidden sm:flex w-full hero-h bg-lightBlue  justify-center items-center transition-all ease-in-out mt-4  mb-4 lg:mb-2",
  contentContainer: "w-full",
  sectionContainer:
    "w-full h-full flex flex-col space-y-8 lg:flex-row  lg:justify-between p-4 lg:pr-0 min-h-[70vh] ",
  sectionA: "mt-44 md:mt-20 w-full lg:w-6/12 flex flex-col  md:px-4 lg:ml-6",
  title: " m-title biome-bold text-2xl md:text-[2.5rem] bg-blue w-full  gradient-text sm:leading-[3rem] sm:h-fit mb-4 ",
  story: " m-story text-white text-base md:text-[1.375rem] biome-regular mb-8 sm:leading-9",
  btnContainer: "flex  mb-8 md:mb-0 space-x-8",
  preBtn:
    "text-yellow m-preBtn border-yellow border-[1px]  sm:py-[1rem] sm:px-[2.4rem] mr-4 biome-regular  ",
  getBtn: "text-white m-getBtn biome-regular   bg-lightBlue  sm:py-[1rem] sm:px-[2.4rem] ",
  sectionB:
    "  w-full md:w-5/12   mt-8 md:mt-0 flex  md:justify-end  md:items-end ",
  iconContainer:
    "w-full md:w-full flex md:justify-end lg:mb-8 space-x-4  pb-8 ",
  icon: "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]  ",
  footericon: " md:w-8/12 h-full",
};
// const iconArray = [bitcoin, chaticon, facebook, instagram, steam];

const DesktopHero = () => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imagesArray[0]);
  const [openModal, setOpenModal] = useState(false);
  const [openPresale, setOpenPresale] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === imagesArray.length - 1) {
        setIndex(0);
        setImage(imagesArray[index]);
      } else {
        setIndex(index + 1);
        setImage(imagesArray[index]);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);



  return (
    <>
    <div className={styles.mainContainer}>
    <div
      className={styles.container}
      style={{
        background: "transparent ",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "3rem",
        
        //   objectFit: "cover",
        // minHeight: "36rem",
        // height:"auto",
        width: "100%",
      }}
    >
      <div
        className={styles.contentContainer}
        style={{
          // background: "rgba(1, 14, 40, 0.7)",
          height: "100%",
          minHeight:"60vh",
          width: "100%",
        }}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionA}>
            <Fade top delay={100}>
              <h1 className={styles.title}>
                The Future Of Smart Gaming Begins With Sportrex
              </h1>
            </Fade>
            <Fade bottom delay={500}>
              <p className={styles.story}>
                Sportrex is a revolutionary e-sports and play-to-earn platform
                powered by blockchain technology. We are redefining the gaming &
                immersive entertainment experience.
              </p>
            </Fade>
            <Fade left delay={900}>
              <div className={styles.btnContainer}>
                <button
                  className={styles.getBtn}
                  onClick={() => setOpenModal(true)}
                >
                  Get Airdrop
                </button>
                <button
                  className={styles.preBtn}
                  onClick={() => setOpenPresale(true)}
                >
                  Pre-Sale
                </button>
              </div>
            </Fade>
          </div>
          {/* #########################SECTION A ENDING */}
          <div className={styles.sectionB}>
            <Fade right delay={1200}>
              <div className={styles.iconContainer}>
                {linksArray.map((item, index) => {
                  return (
                    <a
                      href={item.link}
                      target="_blank"
                      key={index}
                      rel="noopener noreferrer"
                    >
                      <abbr title={`${item.name}`}>
                        <img
                          src={item.icon}
                          alt="icons"
                          className={styles.icon}
                        />
                      </abbr>
                    </a>
                  );
                })}
              </div>
            </Fade>
          </div>
          <AirdropModal
            open={openModal}
            handleClose={() => setOpenModal(false)}
          />
          <PresaleModal
            open={openPresale}
            handleClose={() => setOpenPresale(false)}
          />
          {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ SECTIONB ENDING */}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default DesktopHero;
