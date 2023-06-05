import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
  DiPhp,
  
} from "react-icons/di";
import {
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiNodejs /></a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiPhp /></a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href="JAVASCRIPT"><DiJavascript1 /> </a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiMysql /> </a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiReact /></a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href=""><SiTailwindcss /></a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiHtml5 /></a>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiMongodb /></a>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiGit /></a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a href=""><DiPython /></a>
      </Col>
     
    </Row>
  );
}

export default Techstack;
