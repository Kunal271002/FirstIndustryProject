import React from "react";
import "../TechnologyServies/services.css";
import firstimage from "../../Assets/8.png";
import secondimage from "../../Assets/12.png";
import thirdimage from "../../Assets/13.png";
import fourthimage from "../../Assets/8.png";
export default function services() {
  return (
    <section className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8 col-lg-8 col-md-10">
          <div className="WhyChooseUs-justify">
            <strong>
              <b>
                <h2 className="whychooseUsText">Technology Services</h2>
              </b>
            </strong>
          </div>
          <div className="choosebar"></div>
          <div className="WhyChooseUs-justify chooseCaption">
            <p>
              The technology platform for Flex Benefits Solutions may include
              the following components.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="servicesstyle">
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div style={{padding:"24px"}}>
                <img
                  src={firstimage}
                  alt="Logo"
                  width="125px"
                  height="125"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div style={{padding:"24px"}}>
                <h6><b>Software Development</b></h6>
                <div className="container">
                  <p>
                    It is a planned and structured process where we develop
                    software from its desired form through, to its final
                    manifestitation of the software, it inclues the process of
                    writing and maintaining the source code
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="servicesstyle">
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div style={{padding:"24px"}}>
                <img
                  src={secondimage}
                  alt="Logo"
                  width="125px"
                  height="125"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div style={{padding:"24px"}}>
                <h6><b>Software Development</b></h6>
                <div className="container">
                  <p>
                    It is a planned and structured process where we develop
                    software from its desired form through, to its final
                    manifestitation of the software, it inclues the process of
                    writing and maintaining the source code
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="servicesstyle">
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div style={{padding:"24px"}}>
                <img
                  src={thirdimage}
                  alt="Logo"
                  width="125px"
                  height="125"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div style={{padding:"24px"}}>
                <h6><b>Software Development</b></h6>
                <div className="container">
                  <p>
                    It is a planned and structured process where we develop
                    software from its desired form through, to its final
                    manifestitation of the software, it inclues the process of
                    writing and maintaining the source code
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="servicesstyle">
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div style={{padding:"24px"}}>
                <img
                  src={fourthimage}
                  alt="Logo"
                  width="125px"
                  height="125"
                  className="d-inline-block align-top img-fluid"
                />
              </div>
              <div style={{padding:"24px"}}>
                <h6><b>Software Development</b></h6>
                <div className="container">
                  <p>
                    It is a planned and structured process where we develop
                    software from its desired form through, to its final
                    manifestitation of the software, it inclues the process of
                    writing and maintaining the source code
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
