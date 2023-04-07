import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Netflix-clone.png";
import projImg2 from "../assets/img/AMULib.png";
import projImg4 from "../assets/img/Minesweeper.png";
import projImg5 from "../assets/img/Rock_Paper_Sheldon.jpg";
import projImg6 from "../assets/img/ROVc.jpg";
import projImg3 from "../assets/img/Personal-Website-Basic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description: "Mimicked Netflix Design",
      imgUrl: projImg1,
    },
    {
      title: "AMULib",
      description: "Notes library for our college",
      imgUrl: projImg2,
    },
    {
      title: "Personal Website (Basic)",
      description: "Only uses HTML, CSS and Vanilla JS",
      imgUrl: projImg3,
    },
    {
      title: "Minesweeper Game",
      description: "Minesweeper Game built using Tkinter.",
      imgUrl: projImg4,
    },
    {
      title: "Rock Paper Scissors Lizard Spock",
      description: "Inspired by Sheldon Cooper from TBBT",
      imgUrl: projImg5,
    },
    {
      title: "AMU ROvC underwater robot",
      description: "Underwater robot for a competition at college",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My projects have been listed below. These include
                    Netflix-clone using React, Minesweeper using Tkinter, Rock
                    Paper Scissors Lizards Spock in Python and much more. Other
                    projects are available at my{" "}
                    <a href="github.com/rajuljha">github</a>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
