import "../CardSection/Card.css";
import { FaUmbrella } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
function CardHeroSection() {
  return (
    <section>
      <div className="container CardHeroSectionInside">
        <div className="row">
          <div className="col-md-3 Kunal">
            <div className="FaFaIconsCard ">
              <FaUmbrella className="iconsizecard" />
            </div>
            <h3>Insurtech</h3>
            <h6>Read More</h6>
          </div>
          <div className="col-md-3 Kunal">
            <div className="FaFaIconsCard">
              <FaGift className="iconsizecard" />
            </div>

            <h3>flex Solution</h3>
            <h6>Read More</h6>
          </div>

          <div className="col-md-3 Kunal">
            <div className="FaFaIconsCard">
              <FaBullhorn className="iconsizecard" />
            </div>
            <h3>Digital </h3>
            <h6>Read More</h6>
          </div>
          <div className="col-md-3 Kunal">
            <div className="FaFaIconsCard">
              <FaHeartbeat className="iconsizecard" />
            </div>
            <h3>Healthtech</h3>
            <h6>Read More</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardHeroSection;
