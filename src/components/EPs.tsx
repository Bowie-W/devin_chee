import React from "react";
import "./EPs.scss";

function EPs({ eps }) {

  const playTrack = (event) => {
    console.log(event.target.attributes.value.value)
  }
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
                <div className="singleEp_rightside-trackBox" onClick={playTrack} value={track.trackUrl}>
                  {track.trackTitle}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EPs;
