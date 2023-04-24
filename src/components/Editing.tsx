import "../styles/Editing.scss";
import {useState } from "react";
import AddEp from "./AddEp";
import AddTracks from "./AddTracks";

export default function Editing() {

  const [epModalStatus, setEpModalStatus] = useState(false)
  const [trackModalStatus, setTrackModalStatus] = useState(false)

  const toggleEpModal = () => {
    if (epModalStatus === true) {
      setEpModalStatus(false);
  
    } else if (epModalStatus === false) {
      setEpModalStatus(true);
    }
  };
  
  const toggleTrackModal = () => {
    if (trackModalStatus === true) {
      setTrackModalStatus(false);
  
    } else if (trackModalStatus === false) {
      setTrackModalStatus(true);
    }
  };

  return (
    <div className="editPage_main">
      <div className="editPage_navigation">
        <button className="cloudinary-button" style={{margin: 10}} onClick={toggleEpModal}>Upload a new EP</button>
        <button className="cloudinary-button" onClick={toggleTrackModal}>Add Tracks to an EP</button>
      </div>
      {epModalStatus ? <AddEp setEpModalStatus={setEpModalStatus}/>: null}
      {trackModalStatus ? <AddTracks toggleTrackModal={toggleTrackModal}/> : null}
    </div>
  );
}
