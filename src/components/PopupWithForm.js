import React from 'react';

function PopupWithForm({title, name, children, textButtonSubmit, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_form ${isOpen ? 'popup_visible' : ''}`}>
      <form name={name} className="popup__content popup__content_type_form" noValidate>
        <h2 className="popup__heading">{title}</h2>
        {children}
        <button type="submit" name="buttonSave" className="popup__button-save">{textButtonSubmit}</button>
      </form>
      <button type="button" name="buttonCancel" className="popup__button-cancel" onClick={onClose}></button>
    </div>
  );
}

export default PopupWithForm;
