import "./App.css";
import NivoTimeNavbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Carousal from "./Components/Carousal/carousal";
import CardHeroSection from "./Components/CardSection/Card";
import Choose from "./Components/WhyChooseUs/choose";
import Insureteach from "./Components/Insuretech/insureteach";
import Phone from "./Components/PhoneNetwork/Phone";
import Flexsolutions from "./Components/FlexSolutions/FlexSolutions";
import Services from "./Components/TechnologyServies/services";
import Healthcare from "./Components/Healthcare/Healthcare";
function App() {
  return (
    <div className="App">
      <NivoTimeNavbar />
      <Carousal />
      <CardHeroSection />
      <Choose />
      <Insureteach/>  
      <Healthcare/>
      <Flexsolutions/>
      <Services/>
      <Phone/>
      <Footer />
    </div>
  );
}

export default App;
