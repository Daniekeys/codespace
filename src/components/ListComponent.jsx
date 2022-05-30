import React from 'react'
import allstar from '../assets/allstar.png'

const styles = {
  container:
    "w-full pl-4 lg:pl-0 lg:flex-row flex-col-reverse space-y-6  lg:space-y-0 flex lg:space-x-10 my-8 md:my-0",
  textContainer: " w-full lg:w-4/12 flex items-center",
  text: "biome-bold text-center md:text-start text-2xl gradient-text text-start mt-8 lg:text-[2.45rem] text-white w-full  lg:w-full leading-[3rem] h-fit",
  imageContainer: "w-full lg:w-8/12 flex justify-center",

  img: "w-11/12 h-auto lg:w-full lg:h-full",
};

const ListComponent = () => {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.text}>Sportrex Token is Listing on</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://media.publit.io/file/Frame-32372-1.png"
            className={styles.img}
          />
        </div>
      </div>
    );
}

export default ListComponent