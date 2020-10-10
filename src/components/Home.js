import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";
import "./Home.css";
import profile from "../media/profile.jpg";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Container className="home" fluid>
      <Row className="home-details justify-content-cente">
        <Col className="profile mb-5" lg={4}>
          <div className="background-border text-center">
            <img
              src={profile}
              class="avatar avatar-ex-large shadow-md"
              alt=""
            />
          </div>
        </Col>
        <Col lg={8} className="text-left">
          <div className="ml-5">
            <h4 className="text-uppercase">HI THERE!</h4>
            <h2 className="text-uppercase">
              I'm <span className="name">ABDELKARIM MOUTIK</span>
            </h2>
            <p>
              I'm student at 1337 <span className="name">&&</span> a{" "}
              <Typed
                strings={[
                  "Full stack developer.",
                  "C enthusiasm.",
                  "Python lover.",
                  "SQL passionate.",
                ]}
                loop
                typeSpeed={100}
                backSpeed={100}
                backDelay={2000}
                loopCount={0}
                showCursor
                cursorChar="▌"
              />
              <br />
              Give me a computer and a hard problem and you won't hear my voice
              till I'm done.
            </p>
            <Link to="/about" className="btn btn-home">
              MORE ABOUT ME
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
