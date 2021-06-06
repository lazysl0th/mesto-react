import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button type="button" name="button-edit-avatar" className="profile__button-edit-avatar" onClick={onEditAvatar}>
          <div className="profile__edit-avatar-icon"></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about">{currentUser.about}</p>
          <button type="button" name="button-edit" className="profile__button-edit" onClick={onEditProfile}></button>
        </div>
        <button type="button" name="button-add" className="profile__button-add" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {
            cards.map((card) => <Card
                                  key={card._id}
                                  card={card}
                                  onCardClick={onCardClick}
                                  onCardLike={onCardLike}
                                  onCardDelete={onCardDelete}/>)
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
