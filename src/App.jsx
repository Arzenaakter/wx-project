import "./App.css";
import AdvertizedSection from "./components/AdvertizedSection";
import Article from "./components/animettedText/Article";
import Cards from "./components/CardsSection/Cards";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";
import HeroSection from "./components/HeroSection";
import HowIt from "./components/HowIt";
import Navbar from "./components/Navbar";
import StillNotSection from "./components/StillNotSection";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Article></Article>
      <HeroSection></HeroSection>
      <HowIt></HowIt>
      <AdvertizedSection></AdvertizedSection>
      <Cards></Cards>
      <StillNotSection></StillNotSection>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </div>
  );
}

export default App;
