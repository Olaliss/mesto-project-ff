// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, handleDeleteClick) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    
    cardElement.querySelector('.card__title').textContent = cardData.name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => handleDeleteClick(cardElement));
    
    return cardElement;
  }

// @todo: Функция удаления карточки
function handleDeleteClick(cardElement) {
    cardElement.remove();
  }

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, handleDeleteClick);
  cardContainer.append(cardElement);
});
