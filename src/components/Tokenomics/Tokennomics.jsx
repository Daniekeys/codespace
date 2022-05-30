import React,{useState} from 'react'
import Tokenmetrics from './Tokenmetrics'
import SPT from './SPT'
import MultiChain from './MultiChain'
import token from '../../assets/Token-BG.png'

const styles = {
  parentContainer:
    "hidden md:block w-full h-full relative   space-y-4 flex flex-col lg:my-8 biome-regular",
  title: "text-center text-grey gradient-text text-2xl  lg:text-[2.5rem] biome-bold",
  container:
    "w-full desktopBg   h-full  shadow-md   text-white ",
  tabsContainer: "w-full border-b-2 border-grey flex  ",
  activeTab: "bg-lightBlue  text-white py-6 text-2xl cursor-pointer",
  inactiveTab: " text-white py-6 text-2xl cursor-pointer",
  tab: "w-1/3 text-center p-2",
  tabContent: "w-full h-full",
};

const Tokennomics = () => {
    const [selected, setSelected] = useState('MultiChain')
  
  return (
    <div className={styles.parentContainer}>
      <h1 className={styles.title}>Tokenomics</h1>
      <div className="blur-circle bg-index" />
      <div
        className={styles.container}
        style={{
          background: "#020733" ,
      
          width:"100%",
          height: "fit-content",
          zIndex: "100",
          borderRadius: "30px",
        }}
      >
        <div className={styles.tabsContainer}>
          <div
            className={`${styles.tab} ${
              selected === "MultiChain" ? styles.activeTab : styles.inactiveTab
            } mtc`}
            onClick={() => setSelected("MultiChain")}
          >
            Multi-Chain Network
          </div>
          <div
            className={`${styles.tab} ${
              selected === "SPT" ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => setSelected("SPT")}
          >
            Sportrex Token (SPT)
          </div>
          <div
            className={`${styles.tab} ${
              selected === "Tokenmetrics"
                ? styles.activeTab
                : styles.inactiveTab
            } tokenM`}
            onClick={() => setSelected("Tokenmetrics")}
          >
            Tokenmetrics
          </div>
        </div>
        <div className={styles.tabContent}>
          {selected === "SPT" && <SPT />}
          {selected === "Tokenmetrics" && <Tokenmetrics />}
          {selected === "MultiChain" && <MultiChain />}

          {/* {selected} */}
        </div>
      </div>
      <div className="blur-circle-purple bg-index" />
      <div className="blur-circle-purple-r bg-index" />
    </div>
  );
}

export default Tokennomics