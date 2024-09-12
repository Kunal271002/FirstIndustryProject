import "../Insuretech/insuretech.css";
import Umbrealla from "../../Assets/Umbrella.png";
export default function Insureteach() {
  return (
    <section className="backgroundimage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="downmargin">
              <div className="textaglinleft">
                <h1><b>Insuretech</b></h1>

                <p>
                  Insurance is a financial product that offers protection
                  against unforeseen events. It provides compensation for losses
                  in exchange for regular payments of premiums. Insurance can
                  cover various aspects of life, including health, property,
                  liability, and more.
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
              src={Umbrealla}
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
