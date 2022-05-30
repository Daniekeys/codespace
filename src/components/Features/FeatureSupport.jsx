import React, { useState } from "react";


const styles = {
  parentContainer:
    "w-full h-full  flex-col md:px-4 pt-4 biome-regular space-y-4 bg-white",
  btnContainer: "w-full flex justify-center space-x-4 items-center ",
  activeBtn:
    "text-white text-[12px] md:text-[14px] bg-lightBlue biome-regular px-2 py-2 sm:px-6 sm:py-2",
  nonActive:
    "text-grey text-[12px] md:text-[14px]  border-2 biome-regular border-grey px-2 py-2 sm:px-6 sm:py-2",
  imgContainer: "w-full h-full ",
  img: " w-full md:w-11/12 lg:w-full h-auto mx-auto",
  textParent: "flex w-full h-full flex-col space-y-4 px-4",
  textContainer: "flex border-b-2 pb-2 border-grey leading-9 font-bold ",
  textName: "text-lightBlue text-lg biome-regular",
  story: "biome-regular text-lg text-black ",
};

const FeatureSupport = () => {
  const [eSport, setEsport] = useState(true);
  return (
    <div className={styles.parentContainer}>
      <div className={styles.btnContainer}>
        <button
          className={`${eSport ? styles.activeBtn : styles.nonActive}`}
          onClick={() => setEsport(true)}
        >
          Gaming Console
        </button>
        <button
          className={`${eSport ? styles.nonActive : styles.activeBtn}`}
          onClick={() => setEsport(false)}
        >
          Other
        </button>
      </div>
      <div className={styles.imgContainer}>
        {eSport ? (
          <img
            src="https://media.publit.io/file/platformSupported.png"
            className={styles.img}
            alt="sportrex games"
          />
        ) : (
          <img
            src="https://media.publit.io/file/otherSupport.png"
            className={styles.img}
            alt="sportrex games"
          />
        )}
      </div>
    </div>
  );
};

export default FeatureSupport;
