import React, { useEffect, useRef, useState } from "react";
import "./Audioplayer.scss";
import { HiPlayPause } from "react-icons/hi2";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Audioplayer = () => {

    const [playStatus, setPlayStatus] = useState(false)
    const [duration, setDuration] = useState(0)

    const audioPlayer = useRef()

    const togglePlay = () =>{
        if (playStatus === false){
            setPlayStatus(true)
            audioPlayer.current.play()
        }
        else {
            setPlayStatus(false)
            audioPlayer.current.pause()
        }
    }

    useEffect( () => {
        setDuration(audioPlayer?.current?.duration)
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])


  return (
    <div className="audioplayer">
      <audio
      ref={audioPlayer}
        src="https://res.cloudinary.com/dl2liojkl/video/upload/v1671496438/dape2mz8fbiu2sizvgou.mp3"
        preload="metadata"
      ></audio>
      <button className="audioplayer_button2">
        <BsFillSkipBackwardFill />
      </button>

      <button className="audioplayer_button" onClick={togglePlay}>
        {" "}
        <IconContext.Provider value={{ className: "shared-class", size: 28 }}>
          <HiPlayPause />
        </IconContext.Provider>
      </button>
      <button className="audioplayer_button2">
        <BsFillSkipForwardFill />
      </button>

      <div>0:00</div>
      <div>
        <input className="audioplayer_progressBar" type="range"></input>
      </div>
      <div>{duration}</div>
    </div>
  );
};

export { Audioplayer };
