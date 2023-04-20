import "./AddTracks.scss";
import CloudinaryUploadWidget from "./CloudinaryUploadWiddget";
import axios from "axios";
import { useEffect, useState } from "react";

function AddTracks({toggleTrackModal}) {

    const [epList, setEpList] = useState([])
    const [addTrackFormStatus, setAddTrackFormStatus] = useState(false)
    const [selectedEp, setSelectedEp] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3030/EPs").then((response) => {
          setEpList(response.data);
        });
      }, []);
    

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

    const uploadTrackMongo = (event) => {
        event?.preventDefault()
        axios.patch('http://localhost:3030/EPs/tracks', {
            id: selectedEp,
            title: trackName,
            descript: trackDescript,
            url: trackUrl,
        })
        .then((res) => {
            console.log(res)
        })
    }

    const trackFormToggle = (event) => {
        if (addTrackFormStatus === false) {
            setSelectedEp(event.target.attributes.value.value)  
            setAddTrackFormStatus(true)
        }
        else {setAddTrackFormStatus(false)}
    }
  
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
    <div className="addTracks_container">
   <div className="addTracks_epContainerList">
    <button className="addTracks_closeButton" onClick={toggleTrackModal}>x</button>
         {epList.map((ep) => (
          <div className="addTracks_singleEp" key={ep._id} value={ep._id}>
              <img className="addTracks_singleEp-cover" src={ep.cover} value={ep._id} onClick={trackFormToggle}/>
              <h1 className="addTracks_singleEp-title" value={ep._id} onClick={trackFormToggle}>{ep.title}</h1>
            </div>))}
    </div>
    {addTrackFormStatus ? <form className="trackForm">
    <button className="addTracks_closeButton" onClick={trackFormToggle}>x</button>
        <input
          className="trackForm_track-title"
          placeholder="Track Title"
          onChange={(e) => setTrackName(e.target.value)}
        ></input>
        <textarea
          className="trackForm_track-descript"
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
          className="trackForm_track-upload cloudinary-button"
          onClick={uploadTrackMongo}
        >
          {" "}
          Upload Track{" "}
        </button>
      </form> : null
      } 
    </div>
  );
}

export default AddTracks;
