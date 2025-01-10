import "./MainPage.scss";
import Header from "../../Components/Header/Header";
import Filters from "../../Components/Filters/Filters";
import MainPageCard from "../../Components/MainPageCard/MainPageCard";
import { useState } from "react";


function MainPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  function filterClickHandler() {
    console.log("clicked")
    setIsFilterOpen(!isFilterOpen);
  }

  const[selectedTags, setSelectedTags] = useState([])

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
      {isFilterOpen?<Filters tagClickHandler={tagClickHandler}  selectedTags={selectedTags}/>: ""}
      <MainPageCard></MainPageCard>
    </>
  );
}
export default MainPage;
