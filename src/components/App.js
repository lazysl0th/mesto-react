import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('')


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
    setSelectedCard('')
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>

      <PopupWithForm
        title='Обновить аватар'
        name='form_update-avatar'
        children={
          <>
            <input type="url" name="link" id="link-avatar-input" className="popup__item popup__item_link" placeholder="Ссылка на аватар" required />
            <span className="popup__error link-avatar-input-error"></span>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups} />

      <PopupWithForm
        title='Редактировать профиль'
        name='form_edit-profile'
        children={
          <>
            <input type="text" name="name" id="name-profile-input" className="popup__item popup__item_name" placeholder="" minLength="2" maxLength="40" required/>
            <span className="popup__error name-profile-input-error"></span>
            <input type="text" name="about" id="about-input" className="popup__item popup__item_about" placeholder="" minLength="2" maxLength="200" required/>
            <span className="popup__error about-input-error"></span>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} />

      <PopupWithForm
        title='Новое место'
        name='form_add-element'
        children={
          <>
            <input type="text" name="name" id="name-element-input" className="popup__item popup__item_name" placeholder="Название" minLength="2" maxLength="30" required/>
            <span className="popup__error name-element-input-error"></span>
            <input type="url" name="link" id="link-input" className="popup__item popup__item_link" placeholder="Ссылка на картинку" required />
            <span className="popup__error link-input-error"></span>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups} />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />

      <Footer />
    </div>
  );
}

export default App;
