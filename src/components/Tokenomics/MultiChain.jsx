import React from 'react'
import circle from "../../assets/movingCircle.png";
import ReactPlayer from "react-player/lazy";
// https://media.publit.io/file/h_720/emblema2-s.mp4

// The sportrex native token, SPT, is minted on multi-chain networks. These includes:
const styles = {
  container: "w-full flex justify-between space-x-8 px-10 pt-10 pb-4 mt-4 ",
  textContainer: "w-7/12 space-y-4 flex flex-col",
  spliterContainer: "w-full flex space-x-6",
  partA: "w-7/12 flex flex-col space-y-4",
  partB: "w-5/12 flex flex-col space-y-4",
  name: "text-white text-[1.37rem] biome-regular mt-10",
  value: "text-yellow  text-[1.37rem] biome-regular",
  videoContainer: "w-9/12 h-full",
  imageContainer: "w-5/12 h-full flex justify-center items-center",

  img: "w-10/12 h-auto",
};
const side1 = [
  "Ethereum Network(ERC20)",
  "Binance Chain (BEP20)",
  "Enjin Blockchain",
  "TRON Blockchain",
  

]
const side2 = [
  "Polkadot Network",
  "Cardano Network",
  "Polygon Network-MATIC",
  "Tezos Blockchain",
  

]
const MultiChain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.name}>
          The sportrex native token, SPT, is minted on multi-chain networks.
          These includes:
        </p>
        <div className={styles.spliterContainer}>
          <div className={styles.partA}>
            {side1.map((item, index) => {
              return (
                <p key={index} className={styles.value}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className={styles.partB}>
            {side2.map((item, index) => {
              return (
                <p key={index} className={styles.value}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.videoContainer}>
        <ReactPlayer
          url="https://media.publit.io/file/h_720/emblema2-s.mp4"
          loop={true}
          playing={true}
          muted={true}
          height={"auto"}
          width={"100%"}
        />
      </div>
      </div>
    </div>
  );
}

export default MultiChain