import "./App.css";
import AdvertizedSection from "./components/AdvertizedSection";
import Article from "./components/animettedText/Article";
import HeroSection from "./components/HeroSection";
import HowIt from "./components/HowIt";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Article></Article>
      <HeroSection></HeroSection>
      <HowIt></HowIt>
      <AdvertizedSection></AdvertizedSection>
    </div>
  );
}

export default App;
