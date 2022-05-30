import React from 'react'
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import Marquee from "react-fast-marquee";
const styles = {
  container: "w-full h-full  biome-regular pt-8 mb-4 sm:mb-8  ",
  title: "text-white biome-bold text-2xl md:text-[2.5rem] text-center  mb-8 gradient-text  ",
  imgContainer: "w-full flex flex-col overflow-x-hidden space-y-6 ",
  img: "  w-9/12 md:w-full h-auto  ",
};


const Partners = ()=> {
    return (
      <div className={styles.container} id="Partners">
        <h1 className={styles.title}>Our Partners</h1>
        <div className={styles.imgContainer}>
          <Marquee gradientWidth="30" speed={30}>
            <img src={slide1} alt="sportrex partners" className={styles.img} />
          </Marquee>
        
        </div>
      </div>
    );
}

export default Partners
