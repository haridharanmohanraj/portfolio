import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Particle from "./Particle";

function Experience() {
  return (
    <div>
    <Container fluid className="about-section">
      
      <Container>
      <Particle />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Work Experience</strong>
            </h1>
           
          </Col>
          
        </Row>
        <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             <span className="purple">Web development Intern </span>
            from  <br /> <span className="purple"> Chemela Helpdia Charitable Trust</span>
            <br />
            <span className="green">Duration - </span> 09/2022 - 11/2022
            <br />
            <span className="green">Achievements/Task</span>
            
            <ul>
              <li>- Contributed in developing a website in short period of time</li>
              <li>- used Frontend languages</li>
            </ul>
            <br />
            <br />
          
          </p>
          <br />
          <br />
          
         
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
</Container>
</div>
);
}
export default Experience;