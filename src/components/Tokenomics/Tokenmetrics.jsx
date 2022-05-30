import React from 'react'

import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player/lazy";

const styles = {
    container: "w-full flex justify-between space-x-8 px-10 pt-2 pb-4 mt-2 ",
    textContainer:"grow-1 space-y-6 flex flex-col mt-14",
    textList:"flex",
    name:"text-white text-[1.37rem] biome-regular ",
    value:"text-yellow  text-[1.37rem] biome-regular",
    imageContainer:"w-6/12 h-full flex justify-center items-center",
    videoContainer:"w-9/12 h-full",
    img:"w-full h-auto"
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
          <div className={styles.videoContainer}>
          <ReactPlayer
            url="https://media.publit.io/file/h_720/18-0.mp4"
            loop={true}
            playing={true}
            muted={true}
            height={"auto"}
            width={"100%"}
          />

        </div>
        </div>
      </div>
    </>
  );
}

export default Tokenmetrics