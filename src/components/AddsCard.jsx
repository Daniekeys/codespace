import React, { useState, useEffect } from "react";


const imagesUrl = [
  "https://media.publit.io/file/ads7.png",
  "https://media.publit.io/file/ads4.png",
  "https://media.publit.io/file/ads3.png",
  "https://media.publit.io/file/ads2.png",
  "https://media.publit.io/file/ads1.png",
  "https://media.publit.io/file/ads5.png",
  "https://media.publit.io/file/ads6.png",
 
];

const styles = {
  container: " hidden md:block w-full h-auto lg:h-[27rem] my-10 md:mt-12 mb-4 bg-white flex justify-center items-center transition-all ease-in-out",
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
