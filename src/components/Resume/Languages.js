import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython, DiJava } from "react-icons/di";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';


const techStackData = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "Javascript" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
];

function Techstack() {
    const [ref, inView] = useInView({
        threshold: 0.1, // Set the threshold to 0.5
      });
  return (
    <div ref={ref}>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
             <motion.div initial={{ opacity: 0, x: -20 }}
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.2,
                  delay: index * 0.2, // Stagger the animations based on the index
                },
              },
              hidden: { opacity: 0, x: -20 },
            }}>
          <div>{tech.icon}</div>
          <h2>{tech.name}</h2>
          </motion.div>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Techstack;
