import React,{useState} from 'react'

const styles = {
  parentContainer:
    "w-full h-full lg:h-full  flex-col px-2 lg:px-4 pt-4 lg:py-8 biome-regular space-y-4 bg-white",
  btnContainer: "w-full flex justify-center space-x-4 items-center ",
  activeBtn:
    "text-white text-[12px] md:text-[14px] bg-lightBlue biome-regular px-2 py-2 sm:px-6 sm:py-2",
  nonActive:
    "text-grey text-[12px] md:text-[14px]  border-2 biome-regular border-grey px-2 py-2 sm:px-6 sm:py-2",
  imgContainer: "w-full h-fit sm:h-full ",
  img: "w-full lg:w-full h-auto mx-auto",
  textParent:
    "flex w-full sm:h-full h-52 overflow-y-scroll flow-hide flex-col space-y-4 sm:px-4",
  textContainer:
    "flex flex-col lg:flex-row lg:border-b-2 pb-2 border-grey font-bold  ",
  textName: "text-lightBlue text-[14px] md:text-[20px] biome-semibold",
  story:
    " m-story-feature biome-semibold text-base sm:text-[1.3rem] text-black sm:leading-9 ",
};
const sportrexGame = [
  {
    id: "1",
    name: "Contender-",
    story: `  is an all-in-one (P2E) mobile boardgame hub, comprising on-demand boardgames, tailored for all boardgames enthusiast. It features cutting-edge niche and generalist game modes, immersive UI, interactive social gaming, unique community experience, NFT in-game pieces and boards assets, 
a whole new world of gaming fuelled economy and so much more.`,
  },
  {
    id: "2",
    name: " GGANBU-",
    story: ` Inspired by the Netflix hit "Squid Game"; My GGANBU "close friend/ partner" is a Mars themed (P2E) mobile game with MetaVerse experience. It presents a challenging & innovative way for building partnerships, teams and diverse & inclusive communities on the playground. 
It also boasts multiple, interactive and fun games / game modes for teams of two.`,
  },
  {
    id: "3",
    name: "GEEKIST-",
    story: `  Geekist is a fun trivia game that cuts across countless topics and industries. The game rewards knowledge and provides a platform where "geeks" can learn more. Learning and earning has never been more fun!
`,
  },
  
];

// ###########################################################################################################
const SportrexGame = () => {
  return (
    <div className={styles.textParent}>
      {
        sportrexGame.map((item, index) => {
          return (
            <div className={styles.textContainer} key={index}>
              <p className={styles.textName}>{item.name}</p>
              <p className={styles.story}>{item.story}</p>
              </div>
          )
        })
      }
    </div>
  )
}







// #####################################################################################################

const FeatureGame = () => {
  const [allGames, setAllGames] = useState(true);

  return (
    <div className={styles.parentContainer}>
      <div className={styles.btnContainer}>
        <button
          className={`${allGames ? styles.activeBtn : styles.nonActive}`}
          onClick={() => setAllGames(true)}
        >
          All Games
        </button>
        <button
          className={`${allGames ? styles.nonActive : styles.activeBtn}`}
          onClick={() => setAllGames(false)}
        >
          Sportrex Games
        </button>
      </div>
      <div className={styles.imgContainer}>
        {allGames ? (
          <img
            src="https://media.publit.io/file/allGames.png"
            className={styles.img}
            alt="sportrex games"
          />
        ) : (
          <SportrexGame />
        )}
      </div>
    </div>
  );
}

export default FeatureGame