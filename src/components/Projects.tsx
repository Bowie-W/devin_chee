import "../styles/Projects.scss";
import Slider from "react-slick";
import "../styles/Carousel.scss";
import "../styles/Carousel-theme.scss";

function Projects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  const hiddenEles = document.querySelectorAll(".hidden");
  hiddenEles.forEach((el) => observer.observe(el));



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projects_container">
      <div className="projects_stars"></div>
      <div className="projects_innerContainer">
        <h1 className="projects_title hidden">Projects</h1>
        <Slider {...sliderSettings}>
        <div className="projects_project1-container">
            <div
              className="projects_project1-container-link hidden"
            >
              <img
                className="projects_project1-container-pic"
                src="https://res.cloudinary.com/dl2liojkl/image/upload/v1679613586/Ze_Cover_Artwork-Concept-2-Revised-02-13-23_pp1i43.jpg"
              ></img>
            </div>

            <div className="projects_project1-container-rightBox hidden">
              <div className="projects_project1-container-titleBox">
                <h1 className="projects_project1-container-title">
                  For: Ze Volume 1
                </h1>
                <h1 className="projects_project1-container-subtitle">
                  An Immersive Art Experience
                </h1>
              </div>

              <h2 className="projects_project1-container-credit">
                {" "}
                Sound Designer
              </h2>
              <p className="projects_project1-container-descript">
                A mix-media interactive fashion show! Immerse yourself in a
                complete visual and auditory experience. This surreal sci-fi
                world is created through a fusion of art forms and a textural
                ambient soundscape.
              </p>
            </div>
          </div>
         
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
