class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInformationAboutUser() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
      })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
      })
      .then(this._checkResponse);
  }

  editInformationAboutUser({name, about}) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
        })
      })
      .then(this._checkResponse);
  }

  addCard({name, link}) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
        })
      })
      .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}cards/likes/${id}`, {
        method: 'PUT',
        headers: this._headers,
      })
        .then(this._checkResponse);
    } else {
      return fetch(`${this._baseUrl}cards/likes/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      })
        .then(this._checkResponse);
    }
  }

  updateAvatar({link}){
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
        })
    })
      .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23/',
  headers: {
    authorization: 'a820ff32-e1e8-488c-be97-b68f912afc14',
    'Content-Type': 'application/json'
  }
});

export default api;
