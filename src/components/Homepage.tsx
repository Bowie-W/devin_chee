import axios from "axios";
import {
  useEffect,
  useState,
} from "react";
import "../styles/Homepage.scss";
import Intro from "./intro";
import MainPage from "./MainPage";

function Homepage() {
  const [introEle, setIntroEle] = useState<JSX.Element | null>(<Intro />);
  const [pageDisplay, setPageDisplay] = useState("homepage_mainPage-hidden");

  const [profile, setProfile] = useState({});
  const [tracks, setTracks] = useState([]);
  const [eps, setEPs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3030/tracks").then((response) => {
      setTracks(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3030/EPs").then((response) => {
      setEPs(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3030/profile").then((response) => {
      setProfile(response.data[0]);
    });
  }, []);

  setTimeout(() => {
    setIntroEle(null);
    setPageDisplay("homepage_mainPage");
  }, 6250);

  return (
    <div className="homepage">
      <div className="homepage_intro">{introEle}</div>
      <div className={pageDisplay}>
        <MainPage profile={profile} tracks={tracks} eps={eps}/>
      </div>
    </div>
  );
}

export default Homepage;
