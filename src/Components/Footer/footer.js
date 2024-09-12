import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../Assets/nivologo.png";

const Footer = () => {
  return (
    <footer className="footer bg-light pt-5">
      <Container>
        <Row>
          {/* Company Info Section */}
          <Col md={3}>
            <img
              src={logo}
              alt="Logo"
              width="278px"
              height="120px"
              className="d-inline-block align-top img-fluid"
              // Ensures the logo doesn't grow too large
            />
            <div className="container mt-2">
              <p className="text-in-footer-left">
                NivoTime is a leading provider of innovative technology
                solutions and digital marketing expertise to businesses across a
                range of industries.
              </p>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col md={3} className="col-md-3 offset-md-1 item-left">
            <div>
              <div style={{ textAlign: "left" }}>
                <h5 className="mb-3" >QUICK LINKS</h5>
                <div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#home" className="text-muted ">
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="#about" className="text-muted">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#privacy" className="text-muted">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#terms" className="text-muted">
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Us Section */}
          <Col md={5}>
            <div style={{ textAlign: "left" }}>
              <h5 className="mb-3">CONTACT US</h5>
              <p className="text-muted">
                <FaMapMarkerAlt /> Mumbai, India
              </p>
              <p className="text-muted">
                <FaEnvelope /> info@nivotiime.com
              </p>
              <p className="text-muted">
                <FaPhoneAlt /> +91 9004651881
              </p>
              <a href="#twitter" className="btn btn-outline-secondary me-2">
                <FaTwitter />
              </a>
              <a href="#facebook" className="btn btn-outline-secondary me-2">
                <FaFacebookF />
              </a>
              <a href="#linkedin" className="btn btn-outline-secondary me-2">
                <FaLinkedinIn />
              </a>
              <a href="#instagram" className="btn btn-outline-secondary">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom py-3" style={{ background: "#351f54" }}>
        <Container>
          <Row>
            <Col className="text-center" style={{ color: "#ffff" }}>
              © All Rights Reserved By NivoTime
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
