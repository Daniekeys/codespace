import React from 'react'
import circle from "../../assets/movingCircle.png";


// The sportrex native token, SPT, is minted on multi-chain networks. These includes:
const styles = {
  container: "w-full flex flex-col-reverse space-y-8 ",
  textContainer: "w-full space-y-4 flex flex-col px-4",
  spliterContainer:"w-full flex flex-col space-y-2 ",
  partA:"w-9/12 flex flex-col space-y-4",
  partB:"w-9/12 flex flex-col space-y-4 pb-4",
  name: "text-white text-[14px] biome-regular mt-10",
  value: "text-yellow  text-[14px] biome-regular",
  imageContainer: "w-full  h-full flex justify-center items-center",
  img: "w-10/12 h-auto mx-auto",
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
        <img src={circle} alt="piechart" className={styles.img} />
      </div>
    </div>
  );
}

export default MultiChain