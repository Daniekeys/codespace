import React, { useState } from "react";
import SingleCard from "./SingleCard";
import Carousel from "react-elastic-carousel";
import Special from "../Special";
import SingleItem from './SingleItem'
import MobileCard from './MobileCard'
import {upperArray, downArray, mobileArray} from './data'

const styles = {
  parentContainer: "w-full h-full flex flex-col my-8 md:mt-2",
  sectionA: "w-full h-full flex justify-between",
  title:
    "biome-bold text-2xl gradient-text lg:text-[2.5rem] leading-10 h-fit  mb-16 ",
  btnContainer: "w-40 h-full flex space-x-6",
  activeBtn: "text-lightBlue text-2xl hover:text-lightBlue",
  inActiveBtn: "text-grey text-2xl hover:text-lightBlue",
  container: "w-full h-full",
  sectionB: " hidden lg:flex lg:w-full overflow-x-hidden  flex flex-col",
  sectionC: "w-full lg:hidden overflow-x-hidden  flex flex-col",
  cardContainer: "w-full flex space-x-4  min-w-full",
};

const SportrexEcosytem = () => {
  const [activeBtn, setActiveBtn] = useState(true);

  const left = () => {
    setActiveBtn(true);
  };
  const right = () => {
    setActiveBtn(false);
  };
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 1024, itemsToShow: 3 },
    { width: 1279, itemsToShow: 5 },
    { width: 1320, itemsToShow: 6 },
  ];

  return (
    <div className={styles.parentContainer}>
      <div className={styles.sectionA}>
        <h1 className={styles.title}>Sportrex Ecosytem</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionB}>
          <Carousel breakPoints={breakPoints} pagination={false}>
            {upperArray.map((item, index) => {
              const { url, text, title } = item;
              return (
                <SingleItem key={index} url={url} text={text} title={title} />
              );
            })}
          </Carousel>
          <Carousel breakPoints={breakPoints} pagination={false}>
            {downArray.map((item, index) => {
              const { url, text, title } = item;
              return (
                <SingleItem key={index} url={url} text={text} title={title} />
              );
            })}
          </Carousel>
       
        </div>
        <div className={styles.sectionC}>
          <Carousel breakPoints={breakPoints} pagination={false}>
            {mobileArray.map((item, index) => {
              const { url, text, title } = item;
              return (
                <MobileCard key={index} url={url} text={text} title={title} />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SportrexEcosytem;
