import React from 'react'


// The sportrex native token, SPT, is minted on multi-chain networks. These includes:
const styles = {
  container: "w-full flex flex-col-reverse px-4 py-4  ",
  textContainer: "w-full  flex flex-col",
  
  name: "text-white text-[0.9rem] biome-regular mt-8",
  value: "text-yellow  text-[0.9rem] biome-regular",
  imageContainer: "w-full h-full",
  img: "w-10/12 h-auto mx-auto",
};
const SPT = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
          <p className={styles.name}>
            Our native Token (SPT) is the means of exchange on the sportrex
            ecosystem. It can be converted to other cryptocurrencies or fiat for
            an easy transaction, faster blockchain interaction, and
            interoperability.
          </p>
          <p className={styles.value}>
            SPT will be initially developed as a BSC and ERC-20 compatible token
            on a multichain layers network.
          </p>
      </div>
        <div className={styles.imageContainer}>
          <img
            src="https://media.publit.io/file/sportcoin.png"
            alt="piechart"
            className={styles.img}
          />
        </div>
    </div>
  );
}

export default SPT