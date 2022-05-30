import React from "react";
import roadmap from "../assets/ROADMAP.png";

const styles = {
  parentContainer: "md:hidden w-full h-full flex flex-col my-10 ",
  title:
    "text-center mb-8 h-full leading-[3rem]  gradient-text text-2xl lg:text-[2.5rem] biome-bold",
    mainContainer:"w-full h-full flow-hide-x",
  videoContainer: "w-full h-full ",
  img: "absolute top-0 left-0 w-[1000px] h-[600px]",
};

const Roadmap = () => {
  return (
    <>
      <div className={styles.parentContainer}>
        <h1 className={styles.title}>Sportrex Roadmap </h1>
        <div className={styles.mainContainer}>
        <div className={styles.videoContainer}
        style={{backgroundImage:`url(${roadmap})`,
        height:"457px",
        width:"1081px",
         backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      
      }}
        >
        {/* <img src={roadmap} alt="sportrex road map"  /> */}
      </div>
      </div>
      </div>
    </>
  );
};

export default Roadmap;
