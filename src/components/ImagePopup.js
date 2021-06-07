function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_figure ${card ? 'popup_visible' : ''}`}>
      <figure className="popup__content popup__content_type_figure">
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <figcaption className="popup__text">{card?.name}</figcaption>
      </figure>
      <button type="button" name="button-cancel" className="popup__button-cancel popup__button-cancel_type_figure" onClick={onClose}></button>
    </div>
  );
}

export default ImagePopup;
