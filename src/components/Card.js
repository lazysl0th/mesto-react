function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
    <button type="button" name="button-delete" className="element__button-delete"></button>
    <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
    <h2 className="element__text">{card.name}</h2>
    <div className="element__like">
      <button type="button" name="button-like" className="element__button-like"></button>
      <p className="element__like-number">{(card.likes.length > 0) ? card.likes.length : ''}</p>
    </div>
    </li>
  );
}

export default Card;
