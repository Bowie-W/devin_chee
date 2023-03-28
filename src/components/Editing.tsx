import "./Editing.scss";
import CloudinaryUploadWidget from "./CloudinaryUploadWiddget";

export default function Editing() {
  return (
    <div className="editPage_main">
      <div className="editPage_picture_box">
        <div className="editPage_button_box">
          <img
            className="editPage_profilePic"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1677886778/devin_chee-pic_imjsb5.jpg"
          ></img>
          <CloudinaryUploadWidget />
        </div>
      </div>

    <form className="editPage_track">
      <input className="editPage_track-title" placeholder="Track Title"></input>
      <input className="editPage_track-descript" type="textarea" placeholder="Tell 'em about your sound bro"></input>
      <button className="editPage_track-upload cloudinary-button"> Upload Track </button>
    </form>
    </div>
  );
}
