import { getListings } from '../api/listings/get.js';
import { renderMessage } from '../components/common/message.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderCard } from '../components/listings/card.js';

export async function listingsPage() {
  const { container, row, col } = renderWrapper('Listings', 'col-md-10');

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('text-center', 'mb-5');

  const descriptionText = document.createElement('p');
  descriptionText.innerHTML =
    'Welcome to listings! <br /> Explore listings and bid on your most wanted products';

  descriptionContainer.append(descriptionText);
  col.append(descriptionContainer);

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add(
    'row',
    'row-cols-1',
    'row-cols-sm-2',
    'row-cols-lg-3',
    'g-4'
  );
  cardsContainer.id = 'listing-cards';
  col.append(cardsContainer);

  const loadMoreButtonContainer = document.createElement('div');
  loadMoreButtonContainer.classList.add('text-center', 'mt-4');

  const loadMoreButton = document.createElement('button');
  loadMoreButton.id = 'load-more-btn';
  loadMoreButton.classList.add('btn', 'btn-outline-primary');
  loadMoreButton.textContent = 'Load more';

  loadMoreButtonContainer.append(loadMoreButton);
  col.append(loadMoreButtonContainer);

  try {
    const { data: listings } = await getListings();

    listings.forEach((listing) => {
      const card = renderCard(listing);
      cardsContainer.append(card);
    });
  } catch (error) {
    descriptionText.innerHTML = '';
    loadMoreButton.remove('button');
    const errorMessage = renderMessage(
      'error',
      'Failed to load listings. Please try again later.'
    );
    errorMessage.classList.add('d-flex', 'justify-content-center');
    col.append(errorMessage);
    console.error('Error loading listings:', error);
  }

  row.append(col);
  container.append(row);

  return container;
}
