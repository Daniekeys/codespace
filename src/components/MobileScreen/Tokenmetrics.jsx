import React from 'react'

import Fade from "react-reveal/Fade";

const styles = {
    container: "w-full flex flex-col-reverse overflow-y-scroll flow-hide pb-4 mt-2 ",
    textContainer:"w-full  space-y-6 flex flex-col ",
    textList:"flex pl-6  items-center space-x-2",
    name:"text-white text-[0.9rem] biome-regular ",
    value:"text-yellow  text-[0.9rem] biome-regular",
    imageContainer:"w-full h-full flex justify-center items-center",
    img:"w-11/12 h-auto mx-auto" 
}
const data = [
  {
    id:"1",
    name:"Token name:",
    value:"Sportrex Token",
    delay:200
},
  {
    id:"2",
    name:"Symbol:",
    value:"SPT",
    delay:800
},
  {
    id:"3",
    name:"Maximum Supply:",
    value:"1,000,000,000SPT",
    delay:1200
},
  {
    id:"4",
    name:"Listing price:",
    value:"$0.90",
    delay:1800
},
  {
    id:"5",
    name:"Fully diluted MarketCap:",
    value:"$900 Million",
    delay:2200
},
]
const Tokenmetrics = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {data.map((item, index) => {
          return (
            
              <div className={styles.textList} key={index}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.value}>{item.value}</p>
              </div>
            
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://media.publit.io/file/pichart.png"
          alt="piechart"
          className={styles.img}
        />
      </div>
    </div>
    </>
  );
}

export default Tokenmetrics