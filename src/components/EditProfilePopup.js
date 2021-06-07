import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name ? currentUser.name : '');
    setDescription(currentUser.about? currentUser.about : '');
  }, [currentUser, isOpen]);


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
          title='Редактировать профиль'
          name='form_edit-profile'
          textButtonSubmit='Сохранить'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit} >
            <input
              type="text"
              name="name"
              id="name-profile-input"
              className="popup__item popup__item_name"
              placeholder=""
              minLength="2"
              maxLength="40"
              value={name}
              onChange={handleChangeName}
              required/>
            <span
              className="popup__error name-profile-input-error"></span>
            <input
              type="text"
              name="about"
              id="about-input"
              className="popup__item popup__item_about"
              placeholder=""
              minLength="2"
              maxLength="200"
              value={description}
              onChange={handleChangeDescription}
              required/>
            <span
              className="popup__error about-input-error"></span>
        </PopupWithForm>
  );
}

export default EditProfilePopup;
