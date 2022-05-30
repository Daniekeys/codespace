import React from 'react'
import card from '../../assets/CARD-FRAME.png'
import ReactPlayer from "react-player/lazy";
const styles = {
    parent:"flex relative mobile-card ",
    container:"absolute top-4 right-4 flex flex-col w-[10rem] h-[10rem] p-2",
    itemContainer:"relative cardContainer ",
    video:"w-full justify-center items-center",
    text:"text-center text-white biome-bold leading-7 text-[0.8rem] w-full  ",
    textHover:" text-white biome-regular text-[12px] w-full leading-8 ",
}
const Special = ({url, text, title}) => {
    return (
      <div
        className={styles.parent}
        style={{
          background: "transparent ",
          backgroundImage: `url(${card})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "14rem",
          width: "14rem",
        }}
      >
        <div className={styles.container}>
            <div className={styles.itemContainer}>
          <div className={styles.video}>
            <ReactPlayer
              url={url}
              loop={true}
              playing={true}
              muted={true}
              height={"auto"}
              width={"100%"}
            />
          </div>
          <p className={styles.text}>
            {title}
              {/* P2P Match and Betting */}
          </p>
          <div className="m-img-hover bg-lightBlue">
              <p className={styles.textHover}>
                {text}
              </p>
          </div>
        </div>
        </div>
      </div>
    );
}

export default Special