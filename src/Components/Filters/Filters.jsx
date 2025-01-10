import "./Filters.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Filters() {
  const [tags, setTags] = useState();
  const [personality, setPersonality] = useState([]);
  const [communication, setCommunication] = useState([]);
  const [philosophy, setPhilosopy] = useState([]);
  const [preference, setPreference] = useState([]);


  async function getTags() {
    try {
      const response = await axios.get("http://localhost:8080/filter");
      const tagList = response.data;
      setTags(tagList);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {getTags()}, []);
  useEffect(() => {
    if (tags) {
      setPersonality(tags.personality)
      setCommunication(tags.communication)
      setPhilosopy(tags.philosophy)
      setPreference(tags.preference)
    }
  }, [])

  return (
    <>
      <section className="filter">
        <h2 className="filter__title">Filter</h2>
        <h3 className="filter__label">Personality</h3>
        <ul className="filter__list">
        {personality.map((item, index) => {
          return(
            <li key={index} className="filter__tag">{item}</li>
          )
        })}
        </ul>
        <h3 className="filter__label">Communication</h3>
        <ul className="filter__list">
        {communication.map((item, index) => {
          return(
            <li key={index} className="filter__tag">{item}</li>
          )
        })}
        </ul>

        <h3 className="filter__label">Philosophy</h3>
        <ul className="filter__list">
        {philosophy.map((item, index) => {
          return(
            <li key={index} className="filter__tag">{item}</li>
          )
        })}
        </ul>

        <h3 className="filter__label">Preference</h3>
        <ul className="filter__list">
        {preference.map((item, index) => {
          return(
            <li key={index} className="filter__tag">{item}</li>
          )
        })}
        </ul>
        
      </section>
    </>
  );
}

export default Filters;
