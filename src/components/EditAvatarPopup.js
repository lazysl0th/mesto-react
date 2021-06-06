import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      link: avatarRef.current.value,
    });
    onClose();
  }

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='form_update-avatar'
      textButtonSubmit='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
        <input
          ref={avatarRef}
          type="url"
          name="link"
          id="link-avatar-input"
          className="popup__item popup__item_link"
          placeholder="Ссылка на аватар"
          required />
        <span
          className="popup__error link-avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
