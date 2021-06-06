import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const initialCardsPromise = api.getInitialCards();

    initialCardsPromise
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => (console.log(error)));
    }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error) => (console.log(error)));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => (console.log(error)));
  }

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
                                  onCardLike={handleCardLike}
                                  onCardDelete={handleCardDelete}/>)
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
