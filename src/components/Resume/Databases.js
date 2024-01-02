// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiMongodb,
//   SiPostgresql,
//   SiMysql
// } from "react-icons/si";

// function Databases() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//      <Col xs={4} md={2} className="tech-icons">
//         <div>
//         <SiMongodb />
//         </div>
//         <h2>
//           Mongo DB
//         </h2>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <div>
//         <SiPostgresql />
//         </div>
//         <h2>
//           Postgre SQL
//         </h2>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <div>
//         <SiMysql />
//         </div>
//         <h2>
//           SQL
//         </h2>
//       </Col>
//     </Row>
//   );
// }

// export default Databases;


import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from 'framer-motion';
import { SiMongodb, SiPostgresql, SiMysql } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const databasesData = [
  { icon: <SiMongodb />, name: "Mongo DB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "SQL" },
];

function Databases() {

  const [ref, inView] = useInView({
    threshold: 0.1, // Set the threshold to 0.5
  });
  return (
    <div ref={ref}>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {databasesData.map((db, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
            }}
          >
            <div>{db.icon}</div>
            <h2>{db.name}</h2>
          </motion.div>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Databases;
