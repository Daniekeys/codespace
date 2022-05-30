import React from 'react'
import roadmap from '../assets/ROADMAP.png'

const styles = {
  parentContainer: "w-full h-full hidden md:flex flex-col mt-8 ",
  title: "text-center mb-8 h-full leading-[3rem]  gradient-text text-2xl lg:text-[2.5rem] biome-bold",
  videoContainer: "w-full h-full",
  img:"w-full h-full",
};

const Roadmap = () => {
  return (
    <>
    <div className={styles.parentContainer}>
      <h1 className={styles.title}>Sportrex Roadmap </h1>
     <img src={roadmap} alt="sportrex road map" className={styles.img} />
    </div>
</>
  );
}

export default Roadmap