import React, { useEffect, useRef, useState } from "react";
import "./Audioplayer.scss";
import { HiPlayPause } from "react-icons/hi2";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Audioplayer = ({ eps }) => {
  const [playStatus, setPlayStatus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [initialTrack, setInitialTrack] = useState("");
  const [initialTrackUrl, setInitialTrackUrl] = useState("");
  const [trackDescript, setTrackDescript] = useState("");
  const [trackName, setTrackName] = useState("");
  const [toggleStatus, setToggleStatus] = useState(false);
  const [epForPlayer, setEpForPlayer] = useState([])
  console.log(eps)

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
  console.log(playStatus);

  const hidePlayer = () => {
    if (toggleStatus === false) {
      setToggleStatus(true);
    } else {
      setToggleStatus(false);
    }
  };

  useEffect(() => {
    setEpForPlayer(eps)
  }, [])

  useEffect(() => {
    setInitialTrack(eps?.tracks[0]);
    setInitialTrackUrl(eps?.tracks[0]?.url);
    setTrackDescript(eps?.tracks[0]?.descript);
    setTrackName(eps?.tracks[0]?.title);
  }, [initialTrack]);

  const nextTrack = () => {
    let trackIndex = eps?.tracks.indexOf(initialTrack);
    if (trackIndex !== eps?.tracks.length - 1) {
      setInitialTrack(eps?.tracks[trackIndex + 1]);
      setInitialTrackUrl(eps?.tracks[trackIndex + 1]?.url);
      setTrackDescript(eps?.tracks[trackIndex + 1]?.descript);
      setTrackName(eps?.tracks[trackIndex + 1]?.title);
    } else {
      setInitialTrack(eps?.tracks[0]);
      setInitialTrackUrl(eps?.tracks[0]?.url);
      setTrackDescript(eps?.tracks[0]?.descript);
      setTrackName(eps?.tracks[0]?.title);
    }
  };

  const prevTrack = () => {
    let trackIndex = eps?.tracks.indexOf(initialTrack);
    console.log(eps?.tracks[eps?.tracks.length - 1]);
    if (trackIndex !== 0) {
      setInitialTrack(eps?.tracks[trackIndex - 1]);
      setInitialTrackUrl(eps?.tracks[trackIndex - 1]?.url);
      setTrackDescript(eps?.tracks[trackIndex - 1]?.descript);
      setTrackName(eps?.tracks[trackIndex - 1]?.title);
    } else {
      setInitialTrack(eps?.tracks[eps?.tracks.length - 1]);
      setInitialTrackUrl(eps?.tracks[eps?.tracks.length - 1]?.url);
      setTrackDescript(eps?.tracks[eps?.tracks.length - 1]?.descript);
      setTrackName(eps?.tracks[eps?.tracks.length - 1]?.title);
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
    initialTrack,
  ]);

  console.log(initialTrack);
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
      {/* new model thing */}

       {/* <div className="singleEp_topside">
            <div className="singleEp_leftside">
              <div className="singleEp_leftside-cover"></div>
              <h1 className="singleEp_leftside-title">{ep.title}</h1>
            </div>
            <div className="singleEp_rightside-eps?.tracks">
              {ep.eps?.tracks.map((track) => (<span>{track.trackTitle}</span>))}
            </div>
          </div> */}
      <audio ref={audioPlayer} src={initialTrackUrl} preload="metadata"></audio>
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
