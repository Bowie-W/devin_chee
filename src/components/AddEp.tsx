import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/AddEp.scss";

function AddEp({ setEpModalStatus }) {
  const [uploadedImage, setUploadedImage] = useState("");
  const [epTitle, setEpTitle] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const serv_url = import.meta.env.VITE_serv_url


  useEffect(() => {
    previewImage();
    console.log("image being set");
  }, [uploadedImage]);

  const previewImage = () => {
    const formData = new FormData();
    formData.append("file", uploadedImage);
    formData.append("upload_preset", "Testing");
    formData.append("apikey", 933797642957498);
    formData.append("timestamp", Date.now());

    axios
      .post("https://api.cloudinary.com/v1_1/dl2liojkl/image/upload", formData)
      .then((res) => {
        setImagePreview(res.data.url);
      });
  };

  const uploadEp = (event) => {
    event.preventDefault();
    axios
      .post(`${serv_url}/EPs`, {
        title: epTitle,
        tracks: [],
        cover: imagePreview,
      })
      .then((res) => {
        setEpModalStatus(false);
      });
  };

  const closeEpModal = (event) => {
    event.preventDefault();
    setEpModalStatus(false);
  };

  return (
    <form className="addEp_container">
      <button className="addEp_closeButton" onClick={closeEpModal}>
        X
      </button>
      <input
        className="addEp_title"
        placeholder="Title"
        onChange={(e) => setEpTitle(e.target.value)}
      ></input>
      <div className="addEp_picBox">
        {" "}
        <img id="uploadedimage" src={imagePreview} alt="Ep-pic" />
        <input
          className=""
          type="file"
          name="image"
          onChange={(e) => {
            setUploadedImage(e.target.files[0]);
          }}
        ></input>
      </div>
      <button className="cloudinary-button" onClick={uploadEp}>
        Upload this Ep
      </button>
    </form>
  );
}

export default AddEp;
