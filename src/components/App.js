import React from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const currentUserPromise = api.getInformationAboutUser();

    currentUserPromise
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => (console.log(error)));
    }, [])


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({name, about}) {
    api.editInformationAboutUser({name, about})
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => (console.log(error)));
  }

  function handleUpdateAvatar({link}) {
    api.updateAvatar({link})
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => (console.log(error)));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <PopupWithForm
          title='Новое место'
          name='form_add-element'
          textButtonSubmit='Сохранить'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} >
            <input
              type="text"
              name="name"
              id="name-element-input"
              className="popup__item popup__item_name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required/>
            <span
              className="popup__error name-element-input-error"></span>
            <input
              type="url"
              name="link"
              id="link-input"
              className="popup__item popup__item_link"
              placeholder="Ссылка на картинку"
              required />
            <span
              className="popup__error link-input-error"></span>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
