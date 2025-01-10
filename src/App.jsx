import "./App.scss";
import ScotiabankLogo from "./assets/logos/Scotiabank.png";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Arrow from "../src/assets/images/Arrow.svg";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPageCard from "./Components/MainPageCard/MainPageCard";

function App() {
  return (
    <>
      <Header />
      <MainPageCard />
      <Footer />
    </>
  );
}

export default App;
