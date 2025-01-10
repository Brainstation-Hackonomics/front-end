import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileCard.scss";

function ProfileCard() {
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
    <article>
      {cards.map((card, index) => (
        <figure className="profilecard" key={index}>
          <img
            src={`${url}/${card.photo}`}
            alt=""
            className="profilecard__image"
          />
          <h3 className="profilecard__header">{card.Name}</h3>
          <p className="profilecard__subheader">Age:&nbsp;&nbsp;{card.Age}</p>
          <p className="profilecard__body"></p>
          <p className="profilecard__body">{card.intro}</p>
          <section className="profilecard__tag-section">
            <ul className="profilecard__list">
              {card.filter?.personality?.map((tag, tagIndex) => (
                <li className="profilecard__items" key={tagIndex}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        </figure>
      ))}
    </article>
  );
}

export default ProfileCard;
