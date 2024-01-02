import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import { MdCss } from "react-icons/md";
// import { TbBrandNextjs } from "react-icons/tb";
import {
    SiFirebase,
    SiNextdotjs,
    SiBootstrap,
    SiHtml5,
    SiCsswizardry
} from "react-icons/si";
// import { SiNextdotjs } from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <div>
                    <CgCPlusPlus />
                </div>
                <h2>
                    C++
                </h2>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <div>
                    <DiJavascript1 />
                </div>
                <h2>
                    Javascript
                </h2>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div>
                    <DiPython />
                </div>
                <h2>
                    Python
                </h2>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div>
                    <DiJava />
                </div>
                <h2>
                    Java
                </h2>
            </Col>
        </Row>
    );
}

export default Techstack;
