import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Napoleon Torres or Naps</span> currently studiying at{" "}
            <span className="purple">Naga College Foundation</span>, pursuing a Bachelor's degree in Information Systems.
            <br />
            <br />
            My journey into the world of programming has been an exciting one. While I'm primarily focused on my studies, I also dedicate time to enhance my skills and gain practical experience.
            <br />
            <br />
            I am passionate about software development and always eager to learn new technologies and methodologies.
            <br />
            <br />
            Here are some activities that I actively engage in as a student:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring various subjects and delving into academic research
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in student clubs or organizations related to technology or my field of study
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating with peers on projects and assignments to deepen understanding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am committed to my academic journey and strive to make the most of every learning opportunity."{" "}
          </p>
          <footer className="blockquote-footer">Naps</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
