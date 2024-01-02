import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiExpress } from "react-icons/si";
import MaterialImage from '../../Assets/Material.png'
import CSSImage from '../../Assets/css.png'
import FramerSVG from '../../Assets/framer-motion.svg'
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
// import { TbBrandNextjs } from "react-icons/tb";
import {
  SiDjango,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiReact />
        </div>
        <h2>
          React JS
        </h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <div>
          <SiNextdotjs />
        </div>
        <h2>
          Next JS
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiNodejs />
        </div>
        <h2>
          Node JS
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiDjango />
        </div>
        <h2>
          Django
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiTypescript />
        </div>
        <h2>
          Typescript
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiRedux />
        </div>
        <h2>
          Redux
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiHtml5 />
        </div>
        <h2>
          HTML
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiBootstrap />
        </div>
        <h2>
          Bootstrap
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiTailwindcss />
        </div>
        <h2>
          Tailwind CSS
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img src={CSSImage} alt="CSS" />
        </div>
        <h2>
          CSS
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img src={FramerSVG} alt="CSS" />
        </div>
        <h2>
          Framer Motion
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiExpress />
        </div>
        <h2>
          Express JS
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img src={MaterialImage} alt="Material Design" />
        </div>
        <h2>Material Design</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
