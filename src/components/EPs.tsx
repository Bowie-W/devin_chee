import {useState } from "react";
import { Audioplayer } from "./Audioplayer";
import "../styles/EPs.scss";

function EPs({ eps }) {
  const [playerStatus, setPlayerStatus] = useState(false);
  const [tracklist, setTracklist] = useState([]);

  console.log(eps)
  const playTrack = (event) => {
    // console.log(event.target);
    let id = event.target.attributes.value.value;
    let foundEp = eps.find((ep) => ep._id === id);
    // console.log(foundEp);
    setTracklist(foundEp.tracks);
    toggleplayer();
  };

  const toggleplayer = () => {
    if (playerStatus === true) {
      setPlayerStatus(false);
      setTimeout(() => {
        setPlayerStatus(true)
      }, "200")
    } else if (playerStatus === false) {
      setPlayerStatus(true);
    }
  };

  return (
    <div className="EPs_innerContainer">
      <div className="EPs_innerContainer-list">
        {eps.map((ep) => (
          <div className="singleEp_container" key={ep._id} onClick={playTrack}>
            <div className='singleEp_topBox'>
            <div className="singleEp_leftside">
              <img className="singleEp_cover" src={ep.cover} />
            </div>
            <div className="singleEp_rightside">
              {ep.tracks.map((track) => (
                <p
                  className="singleEp_rightside-trackBox"
                  value={track.trackUrl}
                  key={track.trackTitle}
                >
                  {track.trackTitle}
                </p>
              ))}
              <div className="singleEp_buttonBox">
              <button
                className="singleEp_button"
                value={ep._id}
                onClick={playTrack}
              >
                Play
              </button>
              </div>
             
            </div>
            </div>
            <h1 className="singleEp_title">{ep.title}</h1>
          </div>
        ))}
      </div>

      {playerStatus ? <Audioplayer tracklist={tracklist} playerStatus={playerStatus} setPlayerStatus={setPlayerStatus} /> : null}
    </div>
  );
}

export default EPs;
