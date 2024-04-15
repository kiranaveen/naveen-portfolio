import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  // SiMetasploit,
  SiDatagrip ,
  SiIntellijidea ,
  SiWindows ,
  SiKalilinux ,
  // SiMetasploit ,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
           <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatagrip />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMetasploit />
      </Col> */}

 
    </Row>
  );
}

export default Toolstack;
