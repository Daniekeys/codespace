import React from 'react';
import Special from '../components/Special'



const styles = {
    parentContainer: "w-full h-full flex"
}

const Testing = () => {

    return (
         <div className="flex justify-start items-center flex-col h-screen overflow-y-hidden">
      <div className=" relative w-full h-full">
        <video
          src="https://media.publit.io/file/h_720/road_map-T.mp4"
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        </div>
        </div>
    )
}

export default Testing
