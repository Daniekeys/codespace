import React, { useState } from "react";
import AirdropModal from "./Modals/AirdropModal";
import PresaleModal from "./Modals/PresaleModal";

import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player/lazy";
import sportbg from '../assets/LIGHT-BG.png'


const styles = {
  parentContainer:
    "w-full h-full relative  lg:space-y-0 lg:pl-4 md:pl-0  flex flex-col my-4 lg:mb-8 lg:mt-8 biome-regular",
  title: " m-title mt-4 md:mt-0 biome-bold text-2xl md:text-[2rem] md:mb-4 gradient-text md:leading-[3rem] md:h-fit lg:w-10/12  ",
  container:
    "w-full sport-V flex flex-col lg:flex-row bg-semiBlue h-full lg:h-full  text-white  ",
  imgContainer: "w-full lg:w-5/12 lg:h-full  ",
  img: "w-full h-full ",
  story: " m-story text-white text-base md:text-[1.375rem] biome-regular  md:leading-9  lg:w-10/12",
  storyContainer: "w-full lg:w-7/12  lg:px-6  ",
  parker:
    "w-full lg:w-full h-full flex flex-col pb-8 md:pb-0 md:space-y-6 lg:space-y-0 pl-4 md:pl-6 lg:mt-8",
  buttonContainer: " w-full flex  items-center md:pt-8",
  preBtn:
    "text-yellow m-preBtn border-yellow border-[1px]  py-[1rem] px-[2.4rem]  biome-semibold ",
  getBtn: "text-white m-getBtn biome-semigold bg-lightBlue  py-[1rem] px-[2.4rem] mr-4 ",
};

const SportrexVerse = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openPresale, setOpenPresale] = useState(false);
  return (
    <div className={styles.parentContainer}>
      <div
        className={styles.container}
        style={{
          zIndex: "100",
          // background: "transparent ",
          // backgroundImage: `url(${sportbg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",

          // height:"31rem",
          // width:"100%"
        }}
      >
        <div className={styles.imgContainer}>
          <div>
            {/* <img src={movingCircle} className={styles.img} alt="sportrex" /> */}
            <ReactPlayer
              url="https://media.publit.io/file/h_720/human-w.mp4"
              controls={false}
              loop={true}
              playing={true}
              muted={true}
              width={"100%"}
              height={"auto"}
              // className="mt-[0.9rem] "
              style={{
                borderRadius: "3rem !important",
                width: "100% !important",
                marginLeft: "0px",
                marginTop: "0px",
              }}
            />
          </div>
        </div>

        <div className={styles.storyContainer}>
          <div className={styles.parker}>
            <Fade delay={100} top>
              <h1 className={styles.title}>
                With SportrexVERSE: You are one step ahead of the game
              </h1>
            </Fade>
            <Fade delay={400} bottom>
              <p className={styles.story}>
                SportrexVERSE is a virtual reality space where every user can
                create, socialize, trade, and network. Our immersive community
                serves as an extension to the universe and offers a complete
                sense of existence from entertainment to commerce.
              </p>
            </Fade>
            <Fade bottom delay={900}>
              <div className={styles.buttonContainer}>
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
            <AirdropModal
              open={openModal}
              handleClose={() => setOpenModal(false)}
            />
            <PresaleModal
              open={openPresale}
              handleClose={() => setOpenPresale(false)}
            />
          </div>
        </div>
      </div>
      {/* <div className="blur-circle-purple" /> */}
    </div>
  );
};

export default SportrexVerse;
