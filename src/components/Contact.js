import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import TitleHeader from "./TitleHeader";
import "./Contact.css";
import Profile from "../media/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faHeadphonesAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <div className="contact">
      <TitleHeader titleBg="Contact" title="Get In" coloredWord="Touch" />
      <Container className="contact-info">
        <Row>
          <Col lg={4} md={6} sm={6} xs={12}>
            <div className="rn-address">
              <div className="icon">
                <FontAwesomeIcon icon={faHeadphonesAlt} />
              </div>
              <div className="inner">
                <h4 className="title">Contact with Phone Number</h4>
                <p>+212 629 038608</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <div className="rn-address">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="inner">
                <h4 className="title">Email Address</h4>
                <p>abdelkarimoutik@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <div className="rn-address">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>
              <div className="inner">
                <h4 className="title">Location</h4>
                <p>Khouribga, Morocco</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="form-contact">
        <Row>
          <Col xs={12} md={6}>
            <div className="section-title text-left mb-50">
              <h2 className="title">Contact Us.</h2>
              <p>
                I am available for freelance work or anythong to add my
                creativity. Connect with me via phone:{" "}
                <span className="colored">+212 629 038608</span> or email:{" "}
                <span className="colored">abdelkarimoutik@gmail.com</span>
              </p>
            </div>
            <div className="form-wrapper">
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Your Name *" />
                </Form.Group>
                <Form.Group>
                  <Form.Control placeholder="Your Email *" type="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Control placeholder="Write a Subject" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  className="mt-3 btn-download"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="thumbnail">
              <img src={Profile} alt="karim" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
