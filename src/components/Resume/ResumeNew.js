import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Databases from "./Databases";
import Languages from './Languages'


function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Technologies </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Databases</strong> 
        </h1>
        <Databases />

        <h1 className="project-heading">
          <strong className="purple">Languages</strong>
        </h1>
        <Languages />
        </Container>
    </Container>
  );
}

export default Skills;
