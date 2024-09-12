import React from "react";
import "../Healthcare/Healthcare.css";
import Carousel from "react-bootstrap/Carousel";
import cover1 from "../../Assets/cover1.jpg";
import cover2 from "../../Assets/cover2.jpg";
import cover3 from "../../Assets/cover3.jpg";
import cover4 from "../../Assets/cover4.jpg";
import cover5 from "../../Assets/cover5.jpg";
import cover6 from "../../Assets/cover6.jpg";
import cover7 from "../../Assets/cover7.jpg";
import cover8 from "../../Assets/cover8.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Healthcare() {
  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-xl-8 col-lg-8 col-md-10">
            <div className="WhyChooseUs-justify">
              <strong>
                <b>
                  <h2 className="whychooseUsText">
                    Integrated healthcare with insurance benefits
                  </h2>
                </b>
              </strong>
            </div>
            <div className="choosebar"></div>
            <div className="WhyChooseUs-justify chooseCaption">
              <p>
                Comprehensive healthcare programs with insurance benefits
                provide a range of services to address overall well-being,
                including preventive care, treatment, and wellness support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <dir className="container">
        <Carousel indicators={false}>
          <Carousel.Item interval={1000}>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={cover1}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={cover2}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={cover3}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={cover4}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={cover5}
                  alt="Logo"
                  width="290px"
                  height="446px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={cover6}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={cover7}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={cover8}
                  alt="Logo"
                  width="290px"
                  height="200px"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </dir>
    </section>
  );
}
