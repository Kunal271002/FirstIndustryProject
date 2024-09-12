import "../PhoneNetwork/phone.css";
import PhoneNetwork from "../../Assets/Phone chat.jpg";
export default function Phone() {
  return (
    <section className="backgroundimage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="downmargin">
              <div className="textaglinleft">
                <h1>
                  <b>Digital Marketing</b>
                </h1>

                <p>
                  We are a team of experts who are dedicated in helping
                  businesses of all sizes grow and thrive in the digital
                  landscape. At NivoTime, we believe in a data-driven approach
                  to digital marketing. We use advanced analytics tools to track
                  and measure the performance of your campaigns, allowing us to
                  continually optimize and refine your strategy for maximum ROI.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">Read More</button>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={PhoneNetwork}
              alt="Logo"
              width="554px"
              height="450px"
              className="d-inline-block align-top img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
