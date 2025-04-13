import { getListings } from '../api/listings/get.js';
import { createListingCard } from '../components/listings/listingCard.js';
import { renderWrapper } from '../components/common/wrapper.js';

export async function listingsPage() {
  const { container, row, col } = renderWrapper('Listings');

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('text-center', 'mb-5');

  const descriptionText = document.createElement('p');
  descriptionText.innerHTML =
    'Welcome to listings! </br> Explore listings and bid on your most wanted products';

  descriptionContainer.append(descriptionText);
  col.append(descriptionContainer);

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add(
    'row',
    'row-cols-1',
    'row-cols-sm-2',
    'row-cols-md-3',
    'g-4'
  );
  cardsContainer.id = 'listing-cards';
  col.append(cardsContainer);

  const loadMoreButtonContainer = document.createElement('div');
  loadMoreButtonContainer.classList.add('text-center', 'mt-4');

  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.id = 'load-more-btn';
  loadMoreBtn.classList.add('btn', 'btn-outline-primary');
  loadMoreBtn.textContent = 'Load more';

  loadMoreButtonContainer.append(loadMoreBtn);
  col.append(loadMoreButtonContainer);

  try {
    const { data: listings } = await getListings();

    listings.forEach((listing) => {
      const card = createListingCard(listing);
      cardsContainer.append(card);
    });
  } catch (error) {
    console.error('Feil ved lasting av listings:', error);
  }

  row.append(col);
  container.append(row);

  return container;
}
