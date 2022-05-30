import React from 'react'


// The sportrex native token, SPT, is minted on multi-chain networks. These includes:
const styles = {
  container: "w-full flex justify-between space-x-8 p-10 mt-4 ",
  textContainer: "w-7/12 space-y-12 flex flex-col",
  
  name: "text-white text-[1.37rem] biome-regular mt-10",
  value: "text-yellow  text-[1.37rem] biome-regular",
  imageContainer: "w-5/12 h-full",
  img: "w-full h-auto",
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