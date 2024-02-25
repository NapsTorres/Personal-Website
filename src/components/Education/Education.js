import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCards from "./EducationCard";
import Particle from "../Particle";
import CWCSImg from "../../Assets/CWCS.jpg";
import DSCImg from "../../Assets/DSC.jpg";
import NCFImg from "../../Assets/NCF.png";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the educational institutions I've attended.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="education-card">
            <EducationCards
              imgPath={CWCSImg}
              isBlog={false}
              title="Calabanga West Central School (CWCS)"
              description="I attended Calabanga West Central School (CWCS) for my elementary education. This institution provided me with a strong foundation in various subjects and helped shape my academic journey."
              ghLink="https://www.facebook.com/calabanga.westcentralsch"
              demoLink="CWCS"
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCards
              imgPath={DSCImg}
              isBlog={false}
              title="Dominican School of Calabanga (DSC)"
              description="During my high school and senior high school years, I studied at Dominican School of Calabanga (DSC). This institution provided me with a holistic education, focusing not only on academics but also on character development and extracurricular activities."
              ghLink="https://www.facebook.com/DominicanSchoolOfCalabanga"
              demoLink="DSC"
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCards
              imgPath={NCFImg}
              isBlog={false}
              title="Naga College Foundation (NCF)"
              description="Currently, I am pursuing my Bachelor of Science in Information System degree at Naga College Foundation (NCF). NCF has provided me with advanced knowledge and skills in the field of information systems, preparing me for a career in technology."
              ghLink="https://www.ncf.edu.ph"
              demoLink="NCF"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
