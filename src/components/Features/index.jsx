import React, { useState }from 'react'
import FeatureGame from './FeatureGame'
import FeatureSupport from './FeatureSupport'
import FeatureLeague from './FeaturedLeague'
import InfluencerProgram from './InfluencerProgram'
const styles = {
  parentContainer: "hidden lg:block w-full h-full my-8 lg:my-8 relative biome-regular",
  container: "w-full h-full flex pt-12 items-center   ",
  sectionA: " bg-white w-7/12 h-full overflow-y-scroll flow-hide ",
  sectionB: " w-5/12 h-[fit-content]  flex items-center bg-semiBlue  ",
  tabsContainer: "w-full   flex flex-col  ",
  activeTab: "bg-lightBlue px-6 lg:px-10 text-white biome-bold py-4 lg:py-6 text-[2rem] cursor-pointer",
  inactiveTab: " text-grey lg:py-6 py-4 px-4 lg:px-10 text-[2rem] cursor-pointer biome-bold",
  img: "w-full h-auto element-index",
  tab:"w-full"
};

const Feature = ({ref}) => {
     const [selected, setSelected] = useState("FG");
  return (
    <div className={styles.parentContainer} id="Features" ref={ref}>
      <div className="blur-circle bg-index" />
      <div
        className={styles.container}
        style={{ zIndex: "100000", height: "34rem" }}
      >
        <div className={styles.sectionA}>
          {selected === "FG" && <FeatureGame />}
          {selected === "FL" && <FeatureLeague />}
          {selected === "PS" && <FeatureSupport />}
          {selected === "IP" && <InfluencerProgram />}
        </div>
        <div className={styles.sectionB}>
          <div className={styles.tabsContainer}>
            <div
              className={`${styles.tab} ${
                selected === "FG" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("FG")}
            >
              Featured Games
            </div>
            <div
              className={`${styles.tab} ${
                selected === "FL" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("FL")}
            >
              Featured Leagues
            </div>
            <div
              className={`${styles.tab} ${
                selected === "PS" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("PS")}
            >
              Platforms Supported
            </div>
            <div
              className={`${styles.tab} ${
                selected === "IP" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("IP")}
            >
              Influencer Program
            </div>
          </div>
        </div>
      </div>
      <div className="blur-circle-purple-r bg-index" />
    </div>
  );
}

export default Feature