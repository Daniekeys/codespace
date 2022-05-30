import React from "react";
import item from "../../assets/cancel.png";
import error from "../../assets/error.png";


const styles = {
  container: "bg-blue w-full h-auto ",
  contentContainer: "w-full p-8 flex flex-col items-center",
  imgContainer: "w-full h-full  justify-center items-center",
  img: "h-[200px] w-[200px]",
  text: "biome-regular text-white text-xl",
  error: "text-orange text-2xl",
  getBtn:
    "text-white m-ctaBtn biome-semigold bg-lightBlue  py-[1rem] px-[2.5rem] mt-[1rem] md:mt-[1rem]",
};

const ErrorComponent = ({ message, handleClose }) => {

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img
          src="https://media.publit.io/file/c_fill,h_200,w_300/Error_perspective_matte.jpg"
          className={styles.img}
          alt="success"
        />
        <p className={styles.error}>Error</p>
        <p className={styles.text}>{message}</p>
        <button onClick={handleClose} className={styles.getBtn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
