import "./App.scss";
import ScotiabankLogo from "./assets/logos/Scotiabank.png";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Arrow from "../src/assets/images/Arrow.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
      <img className="logo" src={ScotiabankLogo} alt="" />
      <br />
      <div className="test">BUTTON</div>
      <br />
      <div className="blue-button">Learn More</div>
      <img src={Arrow} className="blue-button__icon"></img>
      <div className="tag-style">Learn About This Account</div>
      <p className="card">
        This is just to demonstrate the card border. use @include card-border to
        use. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        doloremque voluptas blanditiis delectus ex amet earum? Quis accusamus
        voluptate dolores quia eos temporibus itaque debitis rerum, provident
        autem? Exercitationem, modi.
      </p>
      <ProfileCard></ProfileCard>
      <Footer />
    </>
  );
}

export default App;
