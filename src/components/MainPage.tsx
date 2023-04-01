import "./MainPage.scss";
import axios from "axios";
import { useEffect } from "react";
import { Audioplayer } from "./Audioplayer";

export default function MainPage({ profile, tracks }): JSX.Element {
  console.log(profile.picture);

  return (
    <div className="mainPage_container">
      <div className="mainPage_profile">
     
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
      
      </div>
      {/* <div className="mainPage_audio">
        <Audioplayer tracks={tracks} />
      </div> */}
    </div>
  );
}
