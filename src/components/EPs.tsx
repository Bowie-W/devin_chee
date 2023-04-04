import React, { useEffect, useState } from "react";
import { Audioplayer } from "./Audioplayer";
import "./EPs.scss";

function EPs({ eps }) {

  const [playerStatus, setPlayerStatus] = useState(false)

  const playTrack = (event: { target: { attributes: { value: { value: string; }; }; }; }) => {
   let id = event.target.attributes.value.value
   let foundEp = eps.find(ep => ep._id === id)
   console.log(foundEp)
   setTracklist(foundEp.tracks)
   setPlayerStatus(true)
  }

  const toggleplayer = (() => {
    if (playerStatus === true) {
      setPlayerStatus(false)
    }
    else {
      setPlayerStatus(true)
    }

  })

  const [tracklist, setTracklist] = useState([])
  console.log(tracklist)
  
  return (
    <div className="EPs_container">
      <div className="EPs_innerContainer">
        {eps.map((ep) => (
          <div className="singleEp_container" key={ep._id} onClick={playTrack} >
            <div className="singleEp_leftside">
              <img className="singleEp_cover" src={ep.cover} />
              <h1 className="singleEp_title">{ep.title}</h1>
            </div>
            <div className="singleEp_rightside">
              {ep.tracks.map((track) => (
                <p className="singleEp_rightside-trackBox" onClick={playTrack} value={track.trackUrl} key={track.trackTitle}>
                  {track.trackTitle}
                </p>
              ))}
              <div className="singleEp_buttonContainer">
                <button className="singleEp_button" value={ep._id} onClick={playTrack}> Click</button>
              </div>
              
            </div>
          </div>
        ))}
        {playerStatus ? <Audioplayer tracklist={tracklist}/> : null }
      </div>
    </div>
  );
}

export default EPs;
