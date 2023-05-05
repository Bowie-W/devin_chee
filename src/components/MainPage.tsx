import "../styles/MainPage.scss";
import { useRef, useState } from "react";
import Projects from "./Projects";
import EPs from "./EPs";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ScrollButtonBox from "./ScrollButtonBox";
import Header from "./Header";

export default function MainPage({ eps }): JSX.Element {
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
    <Parallax ref={parallax} pages={3} className={`mainPage_container blue`}>
      <Header />
      <ParallaxLayer offset={0}>
        {" "}
        <div className="red spacer"></div>
      </ParallaxLayer>
      <ParallaxLayer>
        <img
          src="https://awv3node-homepage.surge.sh/build/assets/stars.svg"
          className="mainPage_stars"
        ></img>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.9}
        sticky={{ start: 0, end: 2 }}
        style={{ width: "10%" }}
      >
        <ScrollButtonBox parallax={parallax} />
      </ParallaxLayer>
      <div className="mainPage_parallax">
        <ParallaxLayer
          offset={0}
          speed={0.45}
          className="mainpage_background-peak"
        >
          <img
            className="mainPage_background-peak"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1681240933/layered-steps-haikei_ay0dgb.svg"
          ></img>
        </ParallaxLayer>

        <ParallaxLayer offset={0}>
          <div className="mainPage_profile">
            <span className="mainPage_profile-text">
              Madeslusiv is a stereo group based in Vancouver, BC whose primary
              objective is to explore singular and otherworldly soundscapes and
              challenge preconceived notions of what music can be. By utilizing
              noise and nontraditional musical arrangements, and various
              programs. The group creates a sonic atmosphere that acts as a
              conduit between the conscious and unconscious mind. Madeslusiv
              takes inspiration from experimental music genres such as ambient,
              drone, and noise, with an aim to expand the definition of music
              and investigate uncharted sonic landscapes. In essence, the group
              strives to challenge conventional music boundaries, seeking to
              create something truly original.
            </span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          {" "}
          <div className="blue spacer"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} className="mainPage_background2">
          <Projects bgColor={bgColor} setBgColor={setBgColor} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          className="mainpage_background2-peak"
        >
          <img
            className="mainPage_background2-peak"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1681953162/layered-steps-haikei_2_gzpvpt.svg"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <img
            src="https://awv3node-homepage.surge.sh/build/assets/stars.svg"
            className="mainPage_stars"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.45} className="mainPage_layer2">
          <EPs eps={eps} />
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}
