import React,{useState} from 'react'
import InfluencerModal from '../Modals/InfluencerModal'



const styles = {
  container:
    "w-full  h-full overflow-y-scroll flow-hide lg:h-full sm:px-2 lg:p-6 flex flex-col  space-y-4 ",
  story: "text-black biome-regular m-story-feature md:text-[1.3rem]  md:leading-9 ",
  btn: "  md:w-8/12 bg-lightBlue flex text-[0.9rem] md:text-[1.375rem] items-center biome-semibold justify-center py-4 text-white mb-6 ",
};



const InfluencerProgram = () => {
  const [openModal, setOpenModal] = useState(false);

  
  return (
    <div className={styles.container}>
      <p className={styles.story}>
        This feature is one of Sportrex's strong empowerment points. It is not
        only designed for top influencers and celebrities because we believe
        every one of us is a walking influence and has the ability to impact our
        environment. As such, to join our influencer program, all you have to do
        is sign up.
      </p>
      <p className={styles.story}>
        The requirement for each level of reward is explicitly stated to avoid a
        lack of clarity. We all have a role to play; join our influencer program
        to determine yours.
      </p>
      <button className={styles.btn} onClick={() => setOpenModal(true)}>
        Become an influencer
      </button>
      <InfluencerModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default InfluencerProgram