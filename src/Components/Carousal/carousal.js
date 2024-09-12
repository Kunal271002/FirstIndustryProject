import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import technology from "../../Assets/Technology.png";
import Analyst from "../../Assets/Analyst.png";
import Flower from "../../Assets/Flower.png";
import Insurance from "../../Assets/Insurance.png";
import digital from "../../Assets/digital.png";
import Mediation from "../../Assets/Meditation.png";
import "../Carousal/Carousal.css";
function Carousal() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 carousal-technology-div-align">
              <div className="detail-box">
                <h1 className="carousal-technology-div-headins ">
                  <b>TECHNOLOGY</b>
                </h1>
                <p className="text-in-footer-left">
                  Welcome to NivoTime, your one-stop-shop for technology and
                  Consulting services. Our experienced team provides website
                  design and development, mobile app development, cloud
                  computing, cybersecurity, and software consulting services
                  using up-to-date technologies and proven methods.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">
                    <h6>Read more</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={technology}
                alt="Logo"
                width="585px"
                height="446px"
                className="d-inline-block align-top img-fluid"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 carousal-technology-div-align">
              <div className="detail-box">
                <h1 className="carousal-technology-div-headins ">
                  <b>CONSULTING AND ANANYTICS</b>
                </h1>
                <p className="text-in-footer-left">
                  At NivoTime, we specialize in insurance data analytics and
                  benefits analysis with benchmarking. Our advanced tools
                  identify trends and patterns to optimize your benefits
                  strategy. We compare your program to industry standards,
                  ensuring competitive benefits for top talent.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">
                    <h6>Read more</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Analyst}
                alt="Logo"
                width="585px"
                height="446px"
                className="d-inline-block align-top img-fluid"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 carousal-technology-div-align">
              <div className="detail-box">
                <h1 className="carousal-technology-div-headins ">
                  <b>Flex Solution</b>
                </h1>
                <p className="text-in-footer-left">
                  NivoTime offers flexible benefits solutions to help businesses
                  attract and retain top talent while controlling costs. Our
                  customizable solutions allow employees to choose from a
                  variety of benefit options tailored to their unique needs,
                  including healthcare, retirement, and wellness programs. With
                  our advanced technology and expert guidance, we make it easy
                  to manage and administer your benefits program.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">
                    <h6>Read more</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Flower}
                alt="Logo"
                width="585px"
                height="446px"
                className="d-inline-block align-top img-fluid"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 carousal-technology-div-align">
              <div className="detail-box">
                <h1 className="carousal-technology-div-headins ">
                  <b>INSURETECH</b>
                </h1>
                <p className="text-in-footer-left">
                  We stay at the forefront of the rapidly evolving insurtech
                  landscape to offer innovative solutions that help businesses
                  succeed in the insurance industry. Our expert team leverages
                  the latest technologies, such as AI and machine learning, to
                  streamline processes, improve customer experience, and reduce
                  costs.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">
                    <h6>Read more</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Insurance}
                alt="Logo"
                width="585px"
                height="446px"
                className="d-inline-block align-top img-fluid"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 carousal-technology-div-align">
              <div className="detail-box">
                <h1 className="carousal-technology-div-headins ">
                  <b>DIGITAL MARKETING</b>
                </h1>
                <p className="text-in-footer-left">
                  We specialize in digital marketing services that help
                  businesses succeed online. With a team of experts and a focus
                  on measurable results, we stay ahead of the curve with the
                  latest strategies and technologies.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">
                    <h6>Read more</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={digital}
                alt="Logo"
                width="585px"
                height="446px"
                className="d-inline-block align-top img-fluid"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 carousal-technology-div-align">
              <div className="detail-box">
                <h1 className="carousal-technology-div-headins ">
                  <b>HEALTHTEACH</b>{" "}
                </h1>
                <p className="text-in-footer-left">
                  NivoTime provides innovative healthtech solutions to help
                  healthcare businesses improve patient care, increase
                  efficiency, and reduce costs. Our services include
                  telemedicine, electronic medical records, and data analytics,
                  among others. Trust our expert team to provide personalized
                  solutions tailored to your unique needs.
                </p>
                <div className="nav-link">
                  <button className="getintouch-btn">
                    <h6>Read more</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Mediation}
                alt="Logo"
                width="585px"
                height="446px"
                className="d-inline-block align-top img-fluid"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
