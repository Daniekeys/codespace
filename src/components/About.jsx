import React from "react";

import Fade from 'react-reveal/Fade'
import ReactPlayer from "react-player/lazy";

const styles = {
  parentContainer: "w-full h-full  lg:mb-12 relative pt-10",
  container:
    "w-full h-full space-y-10 lg:space-y-0 flex sm:px-4 lg:pl-4 md:pl-0 flex-col-reverse  lg:flex lg:flex-row lg:space-x-20 z-20  ",
  sectionA: " w-full h-full lg:flex-grow-1 lg:w-6/12 ",
  sectionContainer: "w-full flex flex-col justify-center ",
  aboutTitle:
    "hidden lg:block text-white biome-bold text-2xl md:text-[2.5rem] mb-4 gradient-text  ",
  aboutTitleB:
    " block lg:hidden text-white biome-bold text-2xl md:text-[2.5rem] mb-4 gradient-text  ",
  storyA: "text-white  text-base md:text-[1.375rem] biome-regular m-story leading-[25px] md:leading-9 mb-2 md:mt-4 md:mt-0",
  story: "text-white  text-base md:text-[1.375rem] biome-regular m-story leading-[25px] md:leading-9 mb-2 mt-4 md:mt-0",
  sectionB: " w-full mt-20 lg:mb-0 lg:w-6/12",
  img: "w-full h-auto mb-6 lg:mb-0 element-index",
};


const About = () => {
  return (
    <div className={styles.parentContainer} id="About">
      <div className="blur-circle bg-index" />
      <div className={styles.container} style={{ zIndex: "1000" }}>
        <Fade left>
          <div className={styles.sectionA}>
            <div className={styles.sectionContainer}>
              <Fade delay={300}>
                <h1 className={styles.aboutTitle}>About Sportrex</h1>
              </Fade>
              <Fade bottom delay={900}>
                <p className={styles.story}>
                  Sportrex is your virtual doorway to a world of endless
                  possibilities. Think for a second how amazing it is for gamers
                  to finally be able to earn while playing their favorite games
                  - from board games to video games. Simply remarkable.
                </p>
              </Fade>
              <Fade bottom delay={1300}>
                <p className={styles.storyA}>
                  This is exactly what Sportrex is, your one-stop shop for
                  eSports, Social networking, and Gameplay.
                </p>
              </Fade>
            </div>
          </div>
        </Fade>

        <div className={styles.sectionB}>
            <Fade delay={300}>
                <h1 className={styles.aboutTitleB}>About Sportrex</h1>
              </Fade>
          {/* <img src={man} alt="sportrex" className={styles.img} /> */}
          <ReactPlayer
            url="https://media.publit.io/file/h_480/sportex.mp4"
            controls={true}
            // loop={true}
            playing={false}
            // muted={true}
            height={"inherit"}
            width={"100%"}
          />
        </div>
      </div>
      <div className="blur-circle-r bg-index" />
    </div>
  );
};

export default About;
