import React from "react";
import { Col, Row ,Tooltip} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
// import { FaCodeCommit } from "react-icons/fa6";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker, 
  DiPostgresql,
  DiLaravel,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiHibernate,
  SiAmazonaws,
  SiMysql,
  SiFlask,
  SiDialogflow,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
        <SiSpringboot title="Spring Boot"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate title = "Hibernate" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker title ="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title = "AWS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title = "MySql"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
      <FaCodeCommit />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title = "Redis"/>
        <span>Redis</span>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title = "PostgreSql" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask title = "Flask"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDialogflow title = "Google Dialogflow"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel title = "Laravel" />
      </Col>
     
    </Row>
  );
}

export default Techstack;
