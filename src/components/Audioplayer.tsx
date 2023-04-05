import React, { useEffect, useRef, useState } from "react";
import "./Audioplayer.scss";
import { HiPlayPause } from "react-icons/hi2";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Audioplayer = ({ tracklist }) => {
  const [playStatus, setPlayStatus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState("");
  const [currentTrackUrl, setCurrentTrackUrl] = useState("");
  const [trackDescript, setTrackDescript] = useState("");
  const [trackName, setTrackName] = useState("");
  const [toggleStatus, setToggleStatus] = useState(false);
  const [epForPlayer, setEpForPlayer] = useState([])
  const [primedTrack, setPrimedTrack] = useState([])

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const canvasRef = useRef();
  const source = useRef();
  const analyser = useRef();

  const togglePlay = () => {
    if (playStatus === false) {
      setPlayStatus(true);
      let audioContext = new AudioContext();

      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(playing);
    } else {
      setPlayStatus(false);

      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const hidePlayer = () => {
    if (toggleStatus === false) {
      setToggleStatus(true);
    } else {
      setToggleStatus(false);
    }
  };

  useEffect(() => {
    if(tracklist){  
      setCurrentTrack(tracklist[0]);
      setCurrentTrackUrl(tracklist[0].trackUrl);
      setTrackDescript(tracklist[0].trackDescript);
      setTrackName(tracklist[0].trackTitle);
    }
    
  }, []);

  console.log(currentTrack)
  console.log(tracklist)

  const nextTrack = () => {
    let trackIndex = tracklist.indexOf(currentTrack);
    if (trackIndex !== tracklist.length - 1) {
      setCurrentTrack(tracklist[trackIndex + 1]);
      setCurrentTrackUrl(tracklist[trackIndex + 1]?.trackUrl);
      setTrackDescript(tracklist[trackIndex + 1]?.trackDescript);
      setTrackName(tracklist[trackIndex + 1]?.trackTitle);
    } else {
      setCurrentTrack(tracklist[0]);
      setCurrentTrackUrl(tracklist[0]?.trackUrl);
      setTrackDescript(tracklist[0]?.trackDescript);
      setTrackName(tracklist[0]?.trackTitle);
    }
  };

  const prevTrack = () => {
    let trackIndex = tracklist.indexOf(currentTrack);
    console.log(tracklist[tracklist.length - 1]);
    if (trackIndex !== 0) {
      setCurrentTrack(tracklist[trackIndex - 1]);
      setCurrentTrackUrl(tracklist[trackIndex - 1]?.trackUrl);
      setTrackDescript(tracklist[trackIndex - 1]?.trackDescript);
      setTrackName(tracklist[trackIndex - 1]?.trackTitle);
    } else {
      setCurrentTrack(tracklist[tracklist.length - 1]);
      setCurrentTrackUrl(tracklist[tracklist.length - 1]?.trackUrl);
      setTrackDescript(tracklist[tracklist.length - 1]?.trackDescript);
      setTrackName(tracklist[tracklist.length - 1]?.trackTitle);
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(Math.floor(audioPlayer.current.duration));
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    nextTrack,
    currentTrack,
  ]);

  console.log(currentTrack);
  console.log(duration);

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar?.current?.value;
    changeTime();
  };

  const calcTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const retrMins = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const retrSecs = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${retrMins}:${retrSecs}`;
  };

  const playing = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeTime();
    animationRef.current = requestAnimationFrame(playing);
  };

  const changeTime = () => {
    progressBar?.current?.style.setProperty(
      "seekBeforeWidth",
      `${(progressBar?.current?.value / duration) * 100}%`
    );
    setCurrentTime(progressBar?.current?.value);
  };

  return (
    <div className="audioplayer">
      <audio ref={audioPlayer} src={currentTrackUrl} preload="metadata"></audio>
      <div className="audioplayer_top">
        {" "}
        <h1 className="audioplayer_trackName">{trackName}</h1>
        <canvas ref={canvasRef} width={200} height={50}></canvas>
      </div>

      <div className="audioplayer_bottom">
        <div className="audioplayer_buttonBox">
          <button className="audioplayer_button2" onClick={prevTrack}>
            <BsFillSkipBackwardFill />
          </button>

          <button className="audioplayer_button" onClick={togglePlay}>
            {" "}
            <IconContext.Provider
              value={{ className: "shared-class", size: 28 }}
            >
              <HiPlayPause />
            </IconContext.Provider>
          </button>
          <button className="audioplayer_button2" onClick={nextTrack}>
            <BsFillSkipForwardFill />
          </button>
        </div>

        <div className="audioplayer_progBox">
          <div>{calcTime(currentTime)}</div>
          <div className="audioplayer_progressBarBox">
            <input
              className="audioplayer_progressBar"
              type="range"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            ></input>
          </div>
          <div>{calcTime(duration)}</div>
        </div>
      </div>
      <div className="audioplayer_trackDescript-box">
        <p className="audioplayer_trackDescript-text">{trackDescript}</p>
      </div>
    </div>
  );
};

export { Audioplayer };
