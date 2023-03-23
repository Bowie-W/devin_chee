import React, { useEffect, useRef, useState } from "react";
import "./Audioplayer.scss";
import { HiPlayPause } from "react-icons/hi2";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Audioplayer = ({ tracks }) => {
  const [playStatus, setPlayStatus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [initialTrack, setInitialTrack] = useState("");
  const [initialTrackUrl, setInitialTrackUrl] = useState("");
  const [trackDescript, setTrackDescript] = useState("");

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const togglePlay = () => {
    if (playStatus === false) {
      setPlayStatus(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(playing);
    } else {
      setPlayStatus(false);
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    setInitialTrack(tracks[0]);
    setInitialTrackUrl(tracks[0]?.url);
    setTrackDescript(tracks[0]?.descript);
  }, [tracks]);

  const nextTrack = () => {
    console.log(tracks.indexOf(initialTrack))
    let trackIndex = tracks.indexOf(initialTrack);
    if (trackIndex !== tracks.length - 1) {
      setInitialTrack(tracks[trackIndex + 1]);
      setInitialTrackUrl(tracks[trackIndex + 1]?.url);
      setTrackDescript(tracks[trackIndex+ + 1]?.descript);
    } 
    else {
      setInitialTrack(tracks[0]);
      setInitialTrackUrl(tracks[0]?.url);
      setTrackDescript(tracks[0]?.descript);
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(Math.floor(audioPlayer.current.duration));
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, nextTrack]);

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
      <audio ref={audioPlayer} src={initialTrackUrl} preload="metadata"></audio>
      <h1 className="audioplayer_trackName">
        Track Name that is very Long i mean like very long
      </h1>
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
        <button className="audioplayer_button2" onClick={nextTrack}>
          <BsFillSkipForwardFill />
        </button>

        <div>{calcTime(currentTime)}</div>
        <div>
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
      <div className="audioplayer_trackDescript-box">
        <p className="audioplayer_trackDescript-text">{trackDescript}</p>
      </div>
    </div>
  );
};

export { Audioplayer };
