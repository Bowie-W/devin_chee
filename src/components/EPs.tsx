import React from "react";
import { Audioplayer } from "./Audioplayer";
import "./EPs.scss";

function EPs({ eps }) {

  const playTrack = (event: { target: { attributes: { value: { value: string; }; }; }; }) => {
    console.log(event.target.attributes.value.value)
  }

  console.log(eps)
  
  return (
    <div className="EPs_container">
      <div className="EPs_innerContainer">
        {eps.map((ep) => (
          <div className="singleEp_container">
            <div className="singleEp_leftside">
              <img className="singleEp_cover" src={ep.cover} />
              <h1 className="singleEp_title">{ep.title}</h1>
            </div>
            <div className="singleEp_rightside">
              {ep.tracks.map((track) => (
                <p className="singleEp_rightside-trackBox" onClick={playTrack} value={track.trackUrl}>
                  {track.trackTitle}
                </p>
              ))}
              {/* <Audioplayer eps={eps}/> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EPs;
