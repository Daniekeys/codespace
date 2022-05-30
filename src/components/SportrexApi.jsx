import React, { useState } from "react";

import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player/lazy";
import ApiModal from "./Modals/ApiModal";
const styles = {
  parentContainer:
    "w-full h-full pl-0 lg:pl-0 my-10 md:my-0 lg:mb-0 relative pt-10 rounded-lg",
  container:
    "w-full h-full flex-col flex lg:flex lg:flex-row space-x-6 lg:space-x-20 z-20 bg-blue",
  sectionB:
    " w-full lg:flex-grow-1 flex-col lg:flex-row  lg:w-5/12 flex lg:items-center  lg:h-full ",
  sectionContainer: " w-11/12 h-full lg:w-full  flex flex-col   ",
  title:
    " text-white gradient-text text-2xl lg:text-[2.5rem] mt-10  mb-2 md:mb-4 lg:mt-32 biome-bold",
  story:
    "text-white leading-[25px] m-story lg:text-[1.375rem]  biome-regular md:leading-9 mb-8",
  sectionA: " w-full lg:w-6/12 flex justify-center items-center",
  imageContainer: "w-10/12 lg:w-full flex justify-center items-center",
  img: "w-full h-auto element-index",
  btn:
    "text-white m-getBtn biome-semigold bg-lightBlue  py-[1rem] px-[2.4rem] ",
};

const SportrexApi = () => {
  const [openApi, setOpenApi] = useState(false);
  return (
    <div className={styles.parentContainer} id="API">
      {/* <div className="blur-circle bg-index" /> */}
      <div className={styles.container} style={{ zIndex: "100" }}>
        <div className={styles.sectionA}>
          <div className={styles.imageContainer}>
            {/* <img src={moving} className={styles.img} alt="sportrrex" /> */}
            <ReactPlayer
              url="https://media.publit.io/file/h_720/emblema1-0.mp4"
              loop={true}
              playing={true}
              muted={true}
              height={"auto"}
              width={"100%"}
            />
          </div>
        </div>

        <Fade bottom delay={1000}>
          <div className={styles.sectionB}>
            <div className={styles.sectionContainer}>
              <h1 className={styles.title}> Our API</h1>
              <p className={styles.story}>
                Our API system enables creators to launch their gaming ideas on
                the sportrex platform. This makes their games accessible to a
                large gamer community and generates income through a smart
                contract plugged into the sportrex ecosystem on each game
                launched.
              </p>
              <div>
                <button className={styles.btn} onClick={() => setOpenApi(true)}>
                  Get API Key
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <ApiModal open={openApi} handleClose={() => setOpenApi(false)} />
      </div>
    </div>
  );
};

export default SportrexApi;
