import "../styles/MainPage.scss";
import { useRef, useState } from "react";
import Projects from "./Projects";
import EPs from "./EPs";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ScrollButtonBox from "./ScrollButtonBox";
import Header from "./Header";

export default function MainPage({ profile, tracks, eps }): JSX.Element {

  const [bgColor, setBgColor] = useState("");

  const parallax = useRef<IParallax>(null!);

  // const titleObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setBgColor("blue");
  //     } else {
  //       setBgColor("red");
  //     }
  //   });
  // });
  // const titleEles = document.querySelectorAll(".mainPage_project-component-endMark");
  // titleEles.forEach((el) => titleObserver.observe(el));

  return (
    <Parallax
      ref={parallax}
      pages={3}
      className={`mainPage_container ${bgColor}`}
    >
      <Header/>
      <ParallaxLayer offset={0}> <div className="red spacer"></div></ParallaxLayer>
      <ParallaxLayer>
      <img
            src="https://awv3node-homepage.surge.sh/build/assets/stars.svg"
            className="mainPage_stars"
          ></img>
      </ParallaxLayer>
    
       <ParallaxLayer offset={0.9} sticky={{ start: 0, end: 2 }} style={{width: "10%" }}>
          <ScrollButtonBox parallax={parallax} />
        </ParallaxLayer>
      <div className="mainPage_parallax">
        <ParallaxLayer
          offset={0}
          speed={1}
          className="mainpage_background-peak"
        >
          <img
            className="mainPage_background-peak"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1681240933/layered-steps-haikei_ay0dgb.svg"
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
          </div>
        </ParallaxLayer>
       
        <ParallaxLayer offset={1}> <div className="blue spacer"></div></ParallaxLayer>
        <ParallaxLayer offset={1} className="mainPage_background2">
          <Projects bgColor={bgColor} setBgColor={setBgColor} />
          <div className="mainPage_project-component-endMark"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1}>
          <img
            src="https://awv3node-homepage.surge.sh/build/assets/stars.svg"
            className="mainPage_stars"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          className="mainpage_background-peak"
        >
          <img
            className="mainPage_background-peak"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1681953162/layered-steps-haikei_2_gzpvpt.svg"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4}>
          <img
            src="https://awv3node-homepage.surge.sh/build/assets/stars.svg"
            className="mainPage_stars"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="mainPage_layer2">
          <EPs eps={eps} />
        </ParallaxLayer>
        

      </div>
    </Parallax>
  );
}
