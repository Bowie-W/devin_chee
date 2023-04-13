import "./Editing.scss";
import CloudinaryUploadWidget from "./CloudinaryUploadWiddget";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Editing() {
  const [trackDescript, setTrackDescript] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackUrl, setTrackUrl] = useState("");
  const [trackAudio, setTrackAudio] = useState("");

  const uploadTrack = () => {
    axios.post("http://localhost:3030/tracks", {
      title: trackName,
      descript: trackDescript,
      url: trackUrl,
    });
  };

  console.log(trackAudio);

  const cloudUpload = () => {
    const formData = new FormData();
    formData.append("file", trackAudio);
    formData.append("upload_preset", "Testing");
    formData.append("apikey", 933797642957498);
    formData.append("timestamp", Date.now());

    axios
      .post("https://api.cloudinary.com/v1_1/dl2liojkl/video/upload", formData)
      .then((res) => {
        console.log(res);
        setTrackUrl(res.data.url);
        console.log(trackUrl);
      });
  };

  useEffect(() => {
    cloudUpload();
    console.log("Track Primed");
  }, [trackAudio]);

  return (
    <div className="editPage_main">
      <div className="editPage_navigation">
        <button className="cloudinary-button" style={{margin: 10}}>Upload a new EP</button>
        <button className="cloudinary-button">Add Tracks to an EP</button>
      </div>
      {/* <form className="editPage_track">
        <input
          className="editPage_track-title"
          placeholder="Track Title"
          onChange={(e) => setTrackName(e.target.value)}
        ></input>
        <textarea
          className="editPage_track-descript"
          placeholder="Tell 'em about your sound bro"
          onChange={(e) => setTrackDescript(e.target.value)}
        ></textarea>
        <input
          type="file"
          name="audio"
          onChange={(e) => {
            setTrackAudio(e.target.files[0]);
          }}
        ></input>
        <button
          className="editPage_track-upload cloudinary-button"
          onClick={uploadTrack}
        >
          {" "}
          Upload Track{" "}
        </button>
      </form> */}
    </div>
  );
}
