import "./App.scss";
import ScotiabankLogo from "./assets/logos/Scotiabank.png";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Arrow from "../src/assets/images/Arrow.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPageCard from "./Components/MainPageCard/MainPageCard";

function App() {
  return (
    <>
      <Header />
      <MainPageCard />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
