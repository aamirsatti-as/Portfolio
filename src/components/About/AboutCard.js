import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Aamir Naseer</span>, a passionate and results-driven software developer
            with a versatile skill set and two years of hands-on experience.
            My expertise spans across a range of technologies, enabling me to build robust and scalable applications.
            Let me tell you a bit about myself:
            <br />
            <br />
            <ul>
              <li>Specializing in <span className="purple">React JS, Next JS</span> for dynamic and interactive user interfaces.</li>
              <li>Proficient in <span className="purple">Express JS, Node JS, and Django,</span> bringing server-side logic to life for robust web application backends.</li>
              <li>Well-versed in front-end frameworks and libraries, including <span className="purple">CSS, Material UI, Ant Design, Bootstrap, and Tailwind CSS,</span> enabling the creation of visually stunning and responsive designs.</li>
              <li>Experienced with both <span className="purple">Mongo DB and relational databases (SQL, Postgres)</span> for optimized data storage and retrieval.</li>
              <li>Proficient in version control using <span className="purple">GitHub,</span> ensuring collaborative and efficient development workflows.</li>
            </ul>
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          <footer className="blockquote-footer">Aamir Naseer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
