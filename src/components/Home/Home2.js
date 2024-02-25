import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaFacebook  } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a full-time student pursuing a Bachelor's degree in Information Systems with a keen interest in backend development, databases, networking, and cloud technologies.
              <br />
              <br />My journey into the world of programming has ignited a passion for backend technologies, where I've gained knowledge and understanding in languages like <i><b className="purple">C++, C, Python, Node.Js, Php, and React.js</b></i>.
              <br />
              <br />
              I'm fascinated by the complexities of backend systems, databases, and networking protocols, constantly exploring their intricacies and applications.
              <br />
              <br />
              Additionally, I'm eager to delve into cloud computing, understanding its role in modern technology infrastructure and its impact on scalability, security, and reliability.
              <br />
              <br />
              Whenever time permits, I enjoy applying my skills to develop scalable and efficient backend solutions using technologies like <b className="purple">Node.js</b>, while also venturing into <i><b className="purple">cloud platforms and services</b></i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NapsTorres"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/misterlittle.n/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/misterlittle.n/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ntorres@gbox.ncf.edu.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
