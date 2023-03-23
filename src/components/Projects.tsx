import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects_container">
      <h1 className="projects_title">Projects</h1>
      <div className="projects_project1-container">
        <Link
          to="https://www.forze-volume1.com/"
          className="projects_project1-container-link"
        >
          <img
            className="projects_project1-container-pic"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1679613586/Ze_Cover_Artwork-Concept-2-Revised-02-13-23_pp1i43.jpg"
          ></img>
        </Link>

        <div className="projects_project1-container-rightBox">
          <div className="projects_project1-container-titleBox">
            <h1 className="projects_project1-container-title">
              For: Ze Volume 1
            </h1>
            <h1 className="projects_project1-container-subtitle">
              An Immersive Art Experience
            </h1>
          </div>

          <h2 className="projects_project1-container-credit"> Sound-Designer</h2>
          <p className="projects_project1-container-descript">
            A mix-media interactive fashion show! Immerse yourself in a complete
            visual and auditory experience. This surreal sci-fi world is created
            through a fusion of art forms and a textural ambient soundscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
