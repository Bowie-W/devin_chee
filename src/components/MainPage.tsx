import "./MainPage.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Audioplayer } from "./Audioplayer";
import Projects from "./Projects";
import EPs from "./EPs";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function MainPage({ profile, tracks, eps }): JSX.Element {
  console.log(profile.picture);

  const [bgColor, setBgColor] = useState('')

  const parallax = useRef<IParallax>(null!);

  const container = document.querySelectorAll('.mainPage_container')
  
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          setBgColor('red')
        }
        else {
          setBgColor('blue')
        }
    })
})
const titleEles = document.querySelectorAll('.projects_title')
titleEles.forEach((el) => titleObserver.observe(el))



  return (
    <Parallax ref={parallax} pages={3} className={`mainPage_container ${bgColor}`}>
      <div className="mainPage_parallax">
        <ParallaxLayer
          offset={0}
          speed={1}
          className="mainpage_background-peak flipped"
        >
          <img
            className="mainPage_background-peak"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1680744995/layered-peaks-haikei_6_ehizwq.svg"
          ></img>
        </ParallaxLayer>

        <ParallaxLayer offset={0}>
          <div className="mainPage_profile">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <button onClick={() => parallax.current.scrollTo(1)}></button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="mainPage_background2">
          <Projects bgColor={bgColor} setBgColor={setBgColor}/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          className="mainpage_background-peak"
        >
          <img
            className="mainPage_background-peak"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1680744990/layered-peaks-haikei_5_giprha.svg"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} className="mainPage_layer2 flipped">
          <EPs eps={eps} />
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}
