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

      <div className="editPage_bio_box">
        <h2 className="editPage_bio_box_tag">de_vinchee</h2>
        <p className="editPage_bio_box_mainText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="editPage_audio">
        <div className="editPage_audio_musicPlayer"></div>
        <div className="editPage_audio_tracks"> </div>
      </div>
    </div>
  );
}
