import "./Editing.scss";
import CloudinaryUploadWidget from "./CloudinaryUploadWiddget";
import axios from "axios";
import { useEffect, useState } from "react";
import AddEp from "./AddEp";
import AddTracks from "./AddTracks";

export default function Editing() {
  // const [trackDescript, setTrackDescript] = useState("");
  // const [trackName, setTrackName] = useState("");
  // const [trackUrl, setTrackUrl] = useState("");
  // const [trackAudio, setTrackAudio] = useState("");

  // const uploadTrack = () => {
  //   axios.post("http://localhost:3030/tracks", {
  //     title: trackName,
  //     descript: trackDescript,
  //     url: trackUrl,
  //   });
  // };

  // console.log(trackAudio);

  // const cloudUpload = () => {
  //   const formData = new FormData();
  //   formData.append("file", trackAudio);
  //   formData.append("upload_preset", "Testing");
  //   formData.append("apikey", 933797642957498);
  //   formData.append("timestamp", Date.now());

  //   axios
  //     .post("https://api.cloudinary.com/v1_1/dl2liojkl/video/upload", formData)
  //     .then((res) => {
  //       console.log(res);
  //       setTrackUrl(res.data.url);
  //       console.log(trackUrl);
  //     });
  // };

  // useEffect(() => {
  //   cloudUpload();
  //   console.log("Track Primed");
  // }, [trackAudio]);

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
