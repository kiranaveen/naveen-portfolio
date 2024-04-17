import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip as ReactTooltip } from 'react-tooltip'


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
        <SiIntellijidea title= "Intellij Idea Ultimate" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux title = "Kali Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title = "Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title = "Post Man"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatagrip title= "DataGrip"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMetasploit />
      </Col> */}

 
    </Row>
  );
}

export default Toolstack;
