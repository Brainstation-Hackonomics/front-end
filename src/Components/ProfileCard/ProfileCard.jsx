import "./ProfileCard.scss";

function ProfileCard() {
  return (
    <figure className="profilecard">
      <img className="profilecard__image"></img>
      <h3 className="profilecard__header">Cheryl Smith</h3>
      <section className="profilecard__tags">
        tags section
        <ul className="profilecard__list">
          <li className="profilecard__items">tag</li>
        </ul>
      </section>
    </figure>
  );
}

export default ProfileCard;
