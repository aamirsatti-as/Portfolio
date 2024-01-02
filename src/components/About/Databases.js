import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMongodb,
  SiPostgresql,
  SiMysql
} from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
        <div>
        <SiMongodb />
        </div>
        <h2>
          Mongo DB
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
        <SiPostgresql />
        </div>
        <h2>
          Postgre SQL
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
        <SiMysql />
        </div>
        <h2>
          SQL
        </h2>
      </Col>
    </Row>
  );
}

export default Databases;
