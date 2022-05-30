import React from "react";

// import {CheckIcon} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import ReactPlayer from "react-player/lazy";
import CheckIcon from "./CheckIcon";




const styles = {
  parentContainer: "w-full pl-4 md:pl-0 h-full my-10 md:mt-8 relative pt-10 md:pt-0",
  container: "w-full h-full flex flex-col space-y-4 ",
  titleContainer: "w-full",
  title:
    " biome-bold text-2xl gradient-text lg:text-[2.5rem] h-fit leading-10 ",
  imgContainer: "w-full h-full flex  justify-center items-center",
  imgParker: "w-full md:w-8/12",
  img: "w-full h-auto transition ease-in-out delay-150 hover:-translate-y-3 hover:skey-y-3",
  itemsContainer:
    "w-full flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:space-x-6 md:items-center",
  item: " w-full md:w-4/12 flex items-start  ",
  icon: "text-white text-xl mt-2 ",
  text: "biome-regular m-story leading-[25px] md:leading-9 md:text-[1.375rem] text-white",
 
};

const listArray = [
  {
    id: "1",
    icon: CheckIcon,
    story: "Unlock limitless online transaction with the new Sportrex card ",
    delay: 300,
    marginTop: "0rem",
  },
  {
    id: "2",
    icon: CheckIcon,
    story: "Withdraw from crypto ATMs anywhere in the world",
    delay: 1000,
    marginTop: "0rem",
  },
  {
    id: "3",
    icon: CheckIcon,
    story:
      "Spend from your card no matter where you are, even in the Metaverse. ",
    delay: 1700,
    marginTop: "2rem",
  },
];

const SportrexCard = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>SportrexCARDS</h1>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgParker}>
            <ReactPlayer
              url="https://media.publit.io/file/h_480/Card-p.mp4"
              loop={true}
              playing={true}
              muted={true}
              height={"auto"}
              width={"100%"}
            />
            {/* <img src={cards} alt="supported cards by spotrex" className={styles.img} /> */}
          </div>
        </div>
        <div className={styles.itemsContainer}>
          {listArray.map((item, index) => {
            return (
              <Fade delay={item.delay} key={index} bottom>
                <div
                  key={index}
                  className={styles.item}
                  style={{
                    marginTop: item.marginTop,
                  }}
                >
                  <CheckIcon />
                  <p className={styles.text}>{item.story}</p>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SportrexCard;
