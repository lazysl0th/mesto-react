import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const informationAboutUserPromise = api.getInformationAboutUser();
    const initialCardsPromise = api.getInitialCards();

    Promise.all([informationAboutUserPromise, initialCardsPromise])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((error) => (console.log(error)));
    }, [])

  return (
    <main className="content">
      <section className="profile">
        <button type="button" name="button-edit-avatar" className="profile__button-edit-avatar" onClick={onEditAvatar}>
          <div className="profile__edit-avatar-icon"></div>
          <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button type="button" name="button-edit" className="profile__button-edit" onClick={onEditProfile}></button>
        </div>
        <button type="button" name="button-add" className="profile__button-add" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {
            cards.map((card) => <Card key={card._id} card={card} onCardClick={onCardClick}/>)
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
