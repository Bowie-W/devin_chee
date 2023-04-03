import "./MainPage.scss";
import axios from "axios";
import { useEffect, useRef } from "react";
import { Audioplayer } from "./Audioplayer";
import Projects from "./Projects";
import EPs from "./EPs";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function MainPage({ profile, tracks, eps }): JSX.Element {
  console.log(profile.picture);

  const parallax = useRef<IParallax>(null!);

  return (
    <Parallax ref={parallax} pages={4} className="mainPage_container">
      <div className="mainPage_parallax">
        <ParallaxLayer offset={0}>
          <div className="mainPage_profile">
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <button onClick={() => parallax.current.scrollTo(1)}></button>
        
          </div>
 
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <div className="mainPage_audio">
            <Audioplayer tracks={tracks} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <EPs eps={eps} />
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}
