import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddCard}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e){
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name,
      link,
    });
    onClose();
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='form_add-element'
      textButtonSubmit='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
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
          value={link}
          onChange={handleChangeLink}
          id="link-input"
          className="popup__item popup__item_link"
          placeholder="Ссылка на картинку"
          required />
        <span
          className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
