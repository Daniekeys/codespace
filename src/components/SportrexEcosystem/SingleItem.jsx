import React from 'react'
import card from '../../assets/CARD-FRAME.png'
import ReactPlayer from "react-player/lazy";
const styles = {
    parent:"flex relative ",
    container:"absolute top-4 right-4 flex flex-col w-[16rem] h-[16rem] p-8",
    itemContainer:"relative cardContainer ",
    video:"w-full justify-center items-center",
    text:"text-center text-white biome-bold leading-7 text-[1rem] w-full  ",
    textHover:" text-white biome-regular text-[0.9rem] w-full leading-8 ",

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
          height: "20rem",
          width: "20rem",
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
          <div className="img-hover bg-lightBlue">
              <p className={styles.textHover}>
                {text}
                 {/* Sportrex is the most profitable cloud gaming platform. Miners can easily rent out thier hardware, and contents. Also, we offer a convinent way for gamers to play on demand. */}
              </p>
          </div>
        </div>
        </div>
      </div>
    );
}

export default Special