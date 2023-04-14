import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddEp.scss";
import CloudinaryUploadWidget from "./CloudinaryUploadWiddget";

function AddEp({setEpModalStatus}) {
  const [uploadedImage, setUploadedImage] = useState("");
  const [epTitle, setEpTitle] = useState('')

  console.log(uploadedImage);

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
      .then((res) =>{
        setUploadedImage(res.data.url);
      })
      .then(() =>{
        setEpModalStatus(false)
      });
  };

  console.log(epTitle)

  const uploadEp = (event) =>{
    event.preventDefault()
    axios
    .post('http://localhost:3030/eps', {
        title : epTitle,
        cover : uploadedImage,
        tracks : []
    })

  }

  const closeModal = (event)=>{
    event.preventDefault()
    setEpModalStatus(false)
  }

  return (
    <form className="addEp_container">
        <button className="addEp_closeButton" onClick={closeModal}>X</button>
      <input className="addEp_title" placeholder="Title" onChange={(e) =>
        setEpTitle(e.target.value)
      }></input>
      <div className="addEp_picBox">
        {" "}
        <img id="uploadedimage" src={uploadedImage} alt="Ep-pic" />
        <input
            className=" pl-20 my-5 text-white-50 "
            type="file"
            name="image"
            onChange={(e) => {
              setUploadedImage(e.target.files[0]);
            }}
          ></input>
      </div>
      <button className="cloudinary-button" onClick={uploadEp}>Upload this Ep</button>
    </form>
  );
}   

export default AddEp;
