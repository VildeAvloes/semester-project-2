import { createListingImage } from './listingImage.js';

export function createListingCard(listing) {
  const { title, description, media, endsAt } = listing;

  const card = document.createElement('div');
  card.className = 'col';

  const imageContent = createListingImage(media);

  card.innerHTML = `
        <div class="card shadow-sm">
          ${imageContent}
          <div class="card-body d-flex flex-column">
            <p class="card-title text-primary fs-5">${title}</p>
            <p class="card-text">${description || 'No description available'}</p>
            <p class="text-muted mt-auto mb-0">Ends: ${new Date(endsAt).toLocaleString()}</p>
          </div>
        </div>
      `;

  return card;
}
