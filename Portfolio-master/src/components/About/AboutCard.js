import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haridharan Mohanraj </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />I am  pursuing computer science  in Vellore Institute Of Technology.I did internship
             at xxx company . I am good at coding and problem solving.
            
            <br />
            <br />
            Apart from Technical, some others hobbies!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore the world
            </li> 
            <li className="about-activity">
              <ImPointRight />Creative Design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Experience is the name everyone gives to their mistakes."
          </p>
          <footer className="blockquote-footer">Haridharan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
