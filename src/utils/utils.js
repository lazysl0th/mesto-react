import { imagePopup, submitPopup, api, userInfo } from '../../pages/index.js';
import Card from '../components/Card.js';

function showElement (name, link) {
  imagePopup.openPopup(name, link);
}

function deleteElement (cardId, buttonDelete) {
  submitPopup.openPopup(cardId, buttonDelete);
}

function addCardLike (cardId) {
  return api.addLikeCard(cardId)
}

function deleteCardLike (cardId) {
  return api.deleteLikeCard(cardId)

}

export const createCard = (card) => {
  const newCard = new Card ({
    data: card,
    handleCardClick: showElement,
    handleCardDelete: deleteElement,
    handleAddLike: addCardLike,
    handleDeleteLike: deleteCardLike
  }, '#element-template', userInfo.userId);
  return newCard.generateElement();
}
