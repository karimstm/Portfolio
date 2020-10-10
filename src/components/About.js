import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "./ListItem";
import "./About.css";
import TitleHeader from "./TitleHeader";
import profile from "../media/profile.jpg";

function About(props) {
  return (
    <div className="about">
      <TitleHeader title="About" coloredWord="Me" titleBg="Resume" />
      <section className="main-content">
        <Container>
          <Row>
            <Col lg={6} xl={7} md={12}>
              <Row>
                <Col xs={12}>
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                    Personal Infos
                  </h3>
                </Col>
                <Col xs={12} className="d-block d-sm-none"></Col>
                <Col xs={6}>
                  <ul className="about-list list-unstyled">
                    <ListItem title="First Name" value="Abdelkarim" />
                    <ListItem title="Last Name" value="Moutik" />
                    <ListItem title="Age" value="26" />
                    <ListItem title="Nationality" value="Moroccan" />
                    <ListItem title="Freelance" value="Available" />
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="about-list list-unstyled">
                    <ListItem title="Country" value="Morocco" />
                    <ListItem title="Phone" value="+212 629 038608" />
                    <ListItem title="Email" value="abdelkarimoutik@gmail.com" />
                    <ListItem
                      title="Skype"
                      value="live:.cid.b336e93f1710ebf0"
                    />
                    <ListItem
                      title="Languages"
                      value="English, French, Arabic"
                    />
                  </ul>
                </Col>
                <Col xs={12} className="mt-3">
                  <a
                    href="https://drive.google.com/u/0/uc?id=1eEnUfbF0M3VerA4dgQ6Xd6CeIzYeCP1P&export=download"
                    class="btn btn-download"
                  >
                    <span data-hover="Download CV">Download CV</span>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} xl={5}>
              <div className="image-thumbnail">
                <img src={profile} alt="MOUTIK ABDELKARIM" />
              </div>
            </Col>
          </Row>
          <hr className="seperator" />
          {/* Skills section */}
          <Row>
            <Col xs={12}>
              <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                {" "}
                MY SKILLS{" "}
              </h3>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p90 center dark">
                <span>90%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">html</h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p70 center dark">
                <span>70%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">css</h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p90 center dark">
                <span>90%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">
                javascript
              </h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p85 center dark">
                <span>85%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">
                C-Language
              </h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p80 center dark">
                <span>80%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">React</h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p70 center dark">
                <span>70%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">Python</h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p80 center dark">
                <span>80%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">Node Js</h6>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-sm-5">
              <div class="c100 p25 center dark">
                <span>25%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <h6 class="text-uppercase text-center mt-2 mt-sm-4">C++</h6>
            </Col>
          </Row>

          <hr className="seperator" />
          {/* Resume section */}
          <Row>
            <Col xs={12}>
              <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                {" "}
                EXPERIENCE && EDUCATION{" "}
              </h3>
            </Col>
            <Col xs={12}>
              <iframe
                title="Resume"
                src="https://drive.google.com/file/d/1eEnUfbF0M3VerA4dgQ6Xd6CeIzYeCP1P/preview"
                height="900"
                style={{ width: "100%" }}
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
