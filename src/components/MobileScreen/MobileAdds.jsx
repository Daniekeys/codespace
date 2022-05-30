import React, { useState, useEffect } from "react";

const imagesUrl = [
    "https://media.publit.io/file/Property-1-banner-3-2-1.png",
    "https://media.publit.io/file/Property-1-mobile-ADS-1.png",
    "https://media.publit.io/file/Property-1-mobile-ADS-E.png",
    "https://media.publit.io/file/Property-1-mobile-ADS-H-1.png",
    "https://media.publit.io/file/Property-1-mobile-ADS-F.png",
    "https://media.publit.io/file/Property-1-mobile-ADS-c.png",
    "https://media.publit.io/file/Property-1-mobile-ADS-b-4.png",
];


const styles = {
  container:
    "w-full md:hidden h-auto lg:h-[27rem] my-10 md:my-20 bg-white flex justify-center items-center transition-all ease-in-out",
  image: "w-full h-full ",
};
const AddsCard = () => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imagesUrl[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === imagesUrl.length - 1) {
        setIndex(0);
        setImage(imagesUrl[index]);
      } else {
        setIndex(index + 1);
        setImage(imagesUrl[index]);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.container}>
      <img src={image} alt="adds" className={styles.image} />
    </div>
  );
};

export default AddsCard;
