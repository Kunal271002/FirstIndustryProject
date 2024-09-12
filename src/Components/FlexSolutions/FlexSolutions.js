import "../PhoneNetwork/phone.css";
import SettingHand from "../../Assets/Settings.png";
export default function Flexsolutions() {
  return (
    <section className="backgroundimage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="downmargin">
              <div className="textaglinleft">
                <h1>
                  <b>Flex Solution</b>
                </h1>

                <p>
                  Flex is non-wage compensation provided by a company to its
                  employees. These benefits can include health insurance,
                  retirement plans, paid time off, and other perks. Flex can be
                  an important factor in attracting and retaining top talent, as
                  well as promoting employee well-being and satisfaction.
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
              src={SettingHand}
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
