import React from 'react';
import checkIcon from "../assets/checkIcon.png";

const styles = {
    container:"w-[40px] h-[40px] flex justify-center items-start ",
    img: "w-[16px] h-[16px] mt-2"
}
const CheckIcon  = () => {
    return (
    <>
    <div className={styles.container}>
        <img src={checkIcon} alt="check icon" className={styles.img}  />
    </div>

    </>
    )
}

export default CheckIcon