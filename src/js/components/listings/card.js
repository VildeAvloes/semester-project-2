import { renderCardImage } from './index.js';

export function renderCard(listing) {
  const { title, description, media, id } = listing;

  const maxDescriptionLength = 80;
  const maxTitleLength = 20;

  const truncatedDescription =
    description && description.length > maxDescriptionLength
      ? `${description.substring(0, maxDescriptionLength)}...`
      : description || 'No description available';

  const truncatedTitle =
    title.length > maxTitleLength
      ? `${title.substring(0, maxTitleLength)}...`
      : title;

  const card = document.createElement('div');
  card.classList.add('col');

  const imageContent = renderCardImage(media);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card', 'shadow-sm', 'h-100');

  const cardBody = document.createElement('div');
  cardBody.classList.add(
    'card-body',
    'd-flex',
    'flex-column',
    'overflow-hidden'
  );

  const titleElement = document.createElement('p');
  titleElement.classList.add(
    'card-title',
    'text-primary',
    'fs-5',
    'text-truncate'
  );
  titleElement.textContent = truncatedTitle;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-text', 'text-truncate');
  descriptionElement.textContent = truncatedDescription;

  const readMoreLink = document.createElement('a');
  readMoreLink.classList.add(
    'stretched-link',
    'text-decoration-none',
    'mt-auto'
  );
  readMoreLink.setAttribute('href', `#listing/${id}`);
  readMoreLink.textContent = 'Read More';

  cardBody.append(titleElement, descriptionElement, readMoreLink);
  cardContent.append(imageContent, cardBody);
  card.append(cardContent);

  return card;
}
