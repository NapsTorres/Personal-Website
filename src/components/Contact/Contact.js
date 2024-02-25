import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Container fluid className="contact-section">
      <Particle />
        <Row>
          <Col md={12} className="contact-social">
            <h1 className="larger-text">FIND ME ON</h1>
            <p className="larger-text">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="contact-links">
              <li className="contact-icons">
                <a
                  href="https://github.com/NapsTorres"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-contact-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="contact-icons">
                <a
                  href="https://www.facebook.com/misterlittle.n/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-contact-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="contact-icons">
                <a
                  href="https://www.instagram.com/misterlittle.n/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-contact-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="contact-icons">
                <a
                  href="mailto:ntorres@gbox.ncf.edu.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-contact-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
