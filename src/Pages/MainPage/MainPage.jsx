import "./MainPage.scss";
import Header from "../../Components/Header/Header";
import Filters from "../../Components/Filters/Filters";
import MainPageCard from "../../Components/MainPageCard/MainPageCard";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  return (
    <>
      <Header></Header>
      <Filters></Filters>
      <MainPageCard></MainPageCard>
      <Footer></Footer>
    </>
  );
}
export default MainPage;
