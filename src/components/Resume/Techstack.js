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
import {
  SiDjango,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,

  SiTypescript,
  SiRedux,

} from "react-icons/si";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";



const techStackData = [
  { icon: <DiReact />, name: 'React JS' },
  { icon: <SiNextdotjs />, name: 'Next JS' },
  { icon: <DiNodejs />, name: 'Node JS' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiTypescript />, name: 'Typescript' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiHtml5 />, name: 'HTML' },
  { icon: <SiBootstrap />, name: 'Bootstrap' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <img src={CSSImage} alt="CSS" />, name: 'CSS' },
  { icon: <img src={FramerSVG} alt="Framer Motion" />, name: 'Framer Motion' },
  { icon: <SiExpress />, name: 'Express JS' },
  { icon: <img src={MaterialImage} alt="Material Design" />, name: 'Material Design' },
];

function Techstack() {

  const [ref, inView] = useInView({
    threshold: 0.1, // Set the threshold to 0.5
  });





  return (
    <div ref={ref}>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {techStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons" >
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
