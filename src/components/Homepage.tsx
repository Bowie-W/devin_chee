import axios from "axios";
import {
  ReactComponentElement,
  ReactElement,
  useEffect,
  useState,
} from "react";
import "./Homepage.scss";
import Intro from "./intro";
import LandingPage from "./LandingPage";
import Projects from "./Projects";

function Homepage() {
  const [introEle, setIntroEle] = useState<JSX.Element | null>(<Intro />);
  const [landPageStatus, setLandPageStatus] = useState<JSX.Element | null>(
    null
  );
  const [pageDisplay, setPageDisplay] = useState("homepage_landingpage-hidden")

  const [profile, setProfile] = useState({});
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/tracks").then((response) => {
      setTracks(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3030/profile").then((response) => {
      setProfile(response.data[0]);
    });
  }, []);

  setTimeout(() => {
    setIntroEle(null);
    setPageDisplay("homepage_landingpage")
    
  }, 6250);

  return (
    <div className="homepage">
      <div className="homepage_intro">{introEle}</div>
      <div className={pageDisplay}>
        <LandingPage profile={profile} tracks={tracks} />
      <Projects/>
      </div>
   
    </div>
  );
}

export default Homepage;
