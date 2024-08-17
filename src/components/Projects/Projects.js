import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import gameDashBoard from "../../Assets/game-dashboard.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Redis Spring Boot"
              description="It is an Simple Redis Cache Implementation Using Spring Boot"
              ghLink="https://github.com/kiranaveen/Redis-Spring-Boot-Implementation"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameDashBoard}
              isBlog={false}
              title="Game Dashboard"
              description="The Game Dashboard is a dynamic and visually appealing web application designed to help users explore and filter a wide range of video games. Built using React , TypeScript and Chackra Ui the application leverages the powerful RAWG API to fetch and display game data, ensuring users have access to the most up-to-date information on their favorite games and genres."
              ghLink="https://github.com/kiranaveen/game-hub-dashboard/tree/master"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spring Boot Mongo Altlas"
              description="This project is to test the performance of Mongo Atlast using threads and Cyclic barier"
              ghLink="https://github.com/kiranaveen/MongoAtlasPerformanceRepo"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Spring Security"
              description="Simple Spring Security Implementation using Java Spring Boot"
              ghLink="https://github.com/kiranaveen/Java-Spring-Security-"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spring Validator"
              description="Spring Boot Validation Implementation"
              ghLink="https://github.com/kiranaveen/SimpleSpringBootValidator"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
