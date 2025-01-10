import "./MainPageCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MainPageCard() {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState("");
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const apiPath = `${url}/advisor`;
    const fetchCards = async () => {
      try {
        const response = await axios.get(apiPath);
        console.log(response.data);
        setCards(response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      }
    };
    fetchCards();
  }, [url]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cards === null) {
    return <div>Loading...</div>;
  }

  return (
    <article className="main">
      {cards.map((card, index) => (
        <figure className="maincard" key={index}>
          <img className="maincard__image" src={`${url}/${card.photo}`}></img>
          <h3 className="maincard__header">{card.Name}</h3>
          <p className="maincard__body">{card.intro}</p>
          <section className="maincard__tag-section">
            <section className="maincard__tag-section">
              <ul className="maincard__list">
                <>
                  {" "}
                  {card.filter &&
                    card.filter.personality.map((tag, tagIndex) => (
                      <li className="maincard__items" key={tagIndex}>
                        {tag}
                      </li>
                    ))}{" "}
                </>
                <>
                  {" "}
                  {card.filter &&
                    card.filter.communication.map((tag, tagIndex) => (
                      <li className="maincard__items" key={tagIndex}>
                        {tag}
                      </li>
                    ))}{" "}
                </>
                <>
                  {" "}
                  {card.filter &&
                    card.filter.philosophy.map((tag, tagIndex) => (
                      <li className="maincard__items" key={tagIndex}>
                        {tag}
                      </li>
                    ))}{" "}
                </>
                <>
                  {" "}
                  {card.filter &&
                    card.filter.personality.map((tag, tagIndex) => (
                      <li className="maincard__items" key={tagIndex}>
                        {tag}
                      </li>
                    ))}{" "}
                </>
              </ul>
            </section>
          </section>
        </figure>
      ))}
    </article>
  );
}
