import "../WhyChooseUs/choose.css";
import servies from "../../Assets/servies.png";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaBullhorn } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
export default function choose() {
  return (
    <section className="sectionPadding">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            <div className="WhyChooseUs-justify">
              <strong>
                <h2 className="whychooseUsText">Why Choose us?</h2>
              </strong>
            </div>
            <div className="choosebar"></div>
            <div className="WhyChooseUs-justify chooseCaption">
              <p>
                A web-based interface that allows employers and employees to
                access the platform and interact with the different
                functionalities and features of the system.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div
              style={{
                width: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div className="cardPadding">
                <div >
                  <h3>Digital Services</h3>
                  <p>Offering digital services on all media channels</p>
                </div>
                <div className="displayitems md-2 " >
                  <div className="iconschoose md-2" style={{margin: "20px"}}>
                    <FaBullhorn size={35} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div className="cardPadding">
                <div >
                  <h3>Digital Services</h3>
                  <p>Offering digital services on all media channels</p>
                </div>
                <div className="displayitems md-2 " >
                  <div className="iconschoose md-2" style={{margin: "20px"}}>
                    <FaUserMd  size={35} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div className="cardPadding">
                <div >
                  <h3>Digital Services</h3>
                  <p>Offering digital services on all media channels</p>
                </div>
                <div className="displayitems md-2 " >
                  <div className="iconschoose md-2" style={{margin: "20px"}}>
                  <FaTachometerAlt size={35} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={servies}
              alt="Logo"
              width="585px"
              height="446px"
              className="d-inline-block align-top img-fluid"
            />
          </div>
          <div className="col-md-4">
          <div
              style={{
                width: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div className="cardPadding">
                <div >
                  <h3>Digital Services</h3>
                  <p>Offering digital services on all media channels</p>
                </div>
                <div className="displayitems md-2 " >
                  <div className="iconschoose md-2" style={{margin: "20px"}}>
                    <FaBullhorn size={35} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div className="cardPadding">
                <div >
                  <h3>Digital Services</h3>
                  <p>Offering digital services on all media channels</p>
                </div>
                <div className="displayitems md-2 " >
                  <div className="iconschoose md-2" style={{margin: "20px"}}>
                    <FaChartBar size={35} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                boxShadow: "0 3px 15px rgba(25, 25, 25, 0.1)",
                border: "none",
                borderRadius: "0px",
              }}
              className="mb-4"
            >
              <div className="cardPadding">
                <div >
                  <h3>Digital Services</h3>
                  <p>Offering digital services on all media channels</p>
                </div>
                <div className="displayitems md-2 " >
                  <div className="iconschoose md-2" style={{margin: "20px"}}>
                  <FaFlask size={35} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
