import "./MainPage.scss";
import Header from "../../Components/Header/Header.jsx";
import Filters from "../../Components/Filters/Filters.jsx";
import MainPageCard from "../../Components/MainPageCard/MainPageCard.jsx";
import { useState } from "react";


function MainPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  function filterClickHandler() {
    console.log("clicked")
    setIsFilterOpen(!isFilterOpen);
  }

  const[selectedTags, setSelectedTags] = useState([]);

  function tagClickHandler(event) {
    if (!selectedTags.includes(event.target.innerHTML)) {
      selectedTags.push(event.target.innerHTML)
      console.log("this is tags array",selectedTags)
      setSelectedTags(selectedTags);
    } else {
      const index = selectedTags.indexOf(event.target.innerHTML);
      selectedTags.splice(index, 1);
      console.log("tag removed", selectedTags )
      setSelectedTags(selectedTags);
    }
  }


  return (
    <>
      <Header filterClickHandler={filterClickHandler}/>

      <Filters tagClickHandler={tagClickHandler}  selectedTags={selectedTags}/>

      <MainPageCard></MainPageCard>
    </>
  );
}
export default MainPage;
