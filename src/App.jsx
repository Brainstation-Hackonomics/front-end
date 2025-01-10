import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
