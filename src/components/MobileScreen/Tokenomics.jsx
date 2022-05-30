import React,{useState} from 'react'
import Tokenmetrics from './Tokenmetrics'
import SPT from './SPT'
import MultiChain from './MultiChain'
import token from '../../assets/Token-BG.png'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

const styles = {
  parentContainer:
    " w-full md:hidden h-full relative   space-y-4 flex flex-col my-10 ",
  title: "text-center text-grey gradient-text text-2xl  lg:text-[2.5rem] biome-bold",
  container:
    "w-full  bg-blue h-full flex flex-col  shadow-md   text-white relative ",
  tabsContainer: "w-full border-b-2 border-grey flex  ",
  headerContainer:"bg-lightBlue w-full border-token w-full h-full py-2 ",
  mobileHeader:"biome-semibold text-[1.375rem] text-center",
  activeTab: "bg-lightBlue  text-white py-6 text-2xl cursor-pointer",
  inactiveTab: " text-white py-6 text-2xl cursor-pointer",
  iconContainer:" absolute bottom-4 -right-8 w-32 flex space-x-2",
  tab: "w-1/3 text-center p-2",
  greyIcon:"text-grey text-[1.4rem] cursor-pointer outline-none border-none ",
  blueIcon:"text-lightBlue text-[1.4rem] cursor-pointer outline-none border-none ",
  tabContent: "w-full h-[34rem] flow-hide ",
};

const Tokennomics = () => {
  
    // const [selected, setSelected] = useState(index);
    const arrayContainer = ["MultiChain","SPT","Tokenmetrics" ];
   
      const [count, setCount] = useState(0);
 
  

  

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
          borderRadius: "1rem",
        }}
      >
      <div className={styles.headerContainer}>
        <h1 className={styles.mobileHeader} >
            {arrayContainer[count]}
        </h1>

      </div>
       
        <div className={styles.tabContent}>
          {arrayContainer[count] === "SPT" && <SPT />}
          {arrayContainer[count] === "Tokenmetrics" && <Tokenmetrics />}
          {arrayContainer[count] === "MultiChain" && <MultiChain />}
          <div className={styles.iconContainer}>
            <button onClick={() => setCount(count - 1)} disabled={count === 0} className={`${count === 0 ? styles.greyIcon : styles.blueIcon}`}>
        <BsFillArrowLeftCircleFill   />
        </button>
        <p> {count + 1}/3</p>
        <button onClick={() => setCount(count + 1)} disabled={count === 2} className={`${count === 2 ? styles.greyIcon : styles.blueIcon}`} >
          <BsFillArrowRightCircleFill   />
          </button>
          </div>

          {/* {selected} */}
        </div>
      </div>
      <div className="blur-circle-purple bg-index" />
      <div className="blur-circle-purple-r bg-index" />
    </div>
  );
}

export default Tokennomics