import { renderImage } from './cardImage.js';

export function renderCard(listing) {
  const { title, description, media, id } = listing;

  const maxDescriptionLength = 80;
  const descriptionLength =
    description && description.length > maxDescriptionLength
      ? `${description.substring(0, maxDescriptionLength)}...`
      : description;

  const card = document.createElement('div');
  card.classList.add('col');

  const imageContent = renderImage(media);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card', 'shadow-sm', 'position-relative');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column');

  const titleElement = document.createElement('p');
  titleElement.classList.add('card-title', 'text-primary', 'fs-5');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-text');
  descriptionElement.textContent =
    descriptionLength || 'No description available';

  const readMoreLink = document.createElement('a');
  readMoreLink.classList.add('stretched-link', 'text-decoration-none');
  readMoreLink.setAttribute('href', `#listing/${id}`);
  readMoreLink.textContent = 'Read More';

  cardBody.append(titleElement, descriptionElement, readMoreLink);
  cardContent.append(imageContent, cardBody);
  card.append(cardContent);

  return card;
}
