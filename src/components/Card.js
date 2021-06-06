import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__button-delete ${!isOwn && 'element__button-delete_invisible'}`
  )

  const cardLikeButtonClassName = (
    `element__button-like ${isLiked && 'element__button-like_active'}`
  )

  function handleImageClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
    <button type="button" name="button-delete" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
    <img className="element__image" src={card.link} alt={card.name} onClick={handleImageClick}/>
    <h2 className="element__text">{card.name}</h2>
    <div className="element__like">
      <button type="button" name="button-like" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
      <p className="element__like-number">{(card.likes.length > 0) ? card.likes.length : ''}</p>
    </div>
    </li>
  );
}

export default Card;
