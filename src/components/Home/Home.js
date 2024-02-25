import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile.png";
import Home2 from "./Home2";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Naps </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
  );
}

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Time Student",
          "Gamer",
          "Manga Reader",
          "Music Listener",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Home;
