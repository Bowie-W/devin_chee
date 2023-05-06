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
  const [eps, setEPs] = useState([])
  const serv_url = import.meta.env.VITE_serv_url

  useEffect(() => {
    axios.get(`${serv_url}/EPs`).then((response) => {
      setEPs(response.data);
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
        <MainPage eps={eps}/>
      </div>
    </div>
  );
}

export default Homepage;
