import React from 'react'
import success from "../../assets/success.png";



const styles = {
  container: "bg-blue w-full h-auto ",
  contentContainer: "w-full p-8 flex flex-col items-center",
  imgContainer: "w-full h-full  justify-center items-center",
  img: "h-[200px] w-[200px]",
  text: "biome-regular text-white text-xl",
  success: "text-green text-[1.37rem] biome-regular",
 getBtn: "text-white m-ctaBtn biome-semigold bg-lightBlue  py-[1rem] px-[2.5rem] mt-[1rem] md:mt-[1rem]",
};


const Success = ({message, handleClose}) => {
    return (
        <div className={styles.container}>
        <div className={styles.contentContainer}>
            <img src={success} className={styles.img} alt="success" />
            <p className={styles.success}>Congratulations</p>
            <p className={styles.text}>
        {message}
            </p>
            <button onClick={handleClose} className={styles.getBtn}>
                Back
            </button>
        </div>
        </div>
    )
}


export default Success