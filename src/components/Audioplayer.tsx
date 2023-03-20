import React, { useEffect, useRef, useState } from "react";
import "./Audioplayer.scss";
import { HiPlayPause } from "react-icons/hi2";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Audioplayer = ({tracks}) => {

    const [playStatus, setPlayStatus] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [initialTrack, setInitialTrack] = useState('')

    const audioPlayer = useRef()
    const progressBar = useRef()


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

    useEffect(()=>{
        setInitialTrack(tracks[0]?.url)
    })

    useEffect( () => {
        setDuration(audioPlayer?.current?.duration)
        // progressBar?.current?.max = 
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    const changeRange = () =>{
        audioPlayer.current.currentTime = progressBar?.current?.value
        progressBar?.current?.style.setProperty('seekBeforeWidth', `${progressBar?.current?.value / duration * 100}`)
        setCurrentTime(progressBar?.current?.value)
    }

  return (
    <div className="audioplayer">
      <audio
      ref={audioPlayer}
        src={initialTrack}
        preload="metadata"
      ></audio>
      <h1 className="audioplayer_trackName">Track Name that is very Long i mean like very long</h1>
      <div className="audioplayer_bottom">
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

      <div>{currentTime}</div>
      <div>
        <input className="audioplayer_progressBar" type="range" defaultValue="0" ref={progressBar} onChange={changeRange}></input>
      </div>
      <div>{duration}</div>
      </div>
   
    </div>
  );
};

export { Audioplayer };
