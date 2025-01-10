import "./ProfileCard.scss";

function ProfileCard() {
  return (
    <figure className="profilecard">
      <div className="profilecard__image"></div>
      <h3 className="profilecard__header">Cheryl Smith</h3>
      <p className="profilecard__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        recusandae minima harum error nihil voluptas eaque atque quae qui sint
        officiis doloremque eveniet labore quia neque possimus, soluta alias
        sit.
      </p>
      <section className="profilecard__tag-section">
        <ul className="profilecard__list">
          <li className="profilecard__items">Tag</li>
          <li className="profilecard__items">Tag</li>
          <li className="profilecard__items">Tag</li>
          <li className="profilecard__items">Tag</li>
          <li className="profilecard__items">Tag</li>
          <li className="profilecard__items">Tag</li>
        </ul>
      </section>
    </figure>
  );
}

export default ProfileCard;
