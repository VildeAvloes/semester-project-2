import { getMyListings } from '../../api/listings/getMyListings.js';
import { renderNextItems } from '../../utils/listings/nextItems.js';
import { renderMessage } from '../common/message.js';

export async function renderMyListings() {
  const myListings = document.createElement('div');
  myListings.classList.add('mt-4');

  const listingsHeader = document.createElement('div');
  listingsHeader.classList.add(
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'mb-3'
  );

  const listingsTitle = document.createElement('h3');
  listingsTitle.classList.add('mb-0');
  listingsTitle.textContent = 'My Listings';

  const createListingButton = document.createElement('button');
  createListingButton.id = 'create-listing-btn';
  createListingButton.classList.add('btn', 'btn-primary', 'min-w-150');
  createListingButton.textContent = 'Create Listing';

  createListingButton.addEventListener('click', () => {
    location.hash = '#create-listing';
  });

  listingsHeader.append(listingsTitle, createListingButton);
  myListings.append(listingsHeader);

  const listingCards = document.createElement('div');
  listingCards.id = 'listing-cards';
  listingCards.classList.add(
    'row',
    'row-cols-1',
    'row-cols-sm-2',
    'row-cols-md-3',
    'g-4'
  );

  const loadMoreButtonWrapper = document.createElement('div');
  loadMoreButtonWrapper.classList.add('text-center', 'mt-4');

  const loadMoreButton = document.createElement('button');
  loadMoreButton.id = 'load-more-btn';
  loadMoreButton.classList.add('btn', 'btn-outline-primary', 'min-w-150');
  loadMoreButton.textContent = 'Load more';

  loadMoreButtonWrapper.append(loadMoreButton);

  let currentIndex = 0;
  const ITEMS_PER_PAGE = 9;
  let myListingsData = [];

  try {
    myListingsData = await getMyListings();

    if (!myListingsData.length) {
      listingCards.append(
        renderMessage('info', 'You have not created any listings yet.')
      );
      loadMoreButton.classList.add('d-none');
    } else {
      currentIndex = renderNextItems(
        myListingsData,
        listingCards,
        currentIndex,
        ITEMS_PER_PAGE
      );

      if (currentIndex >= myListingsData.length) {
        loadMoreButton.classList.add('d-none');
      }
    }
  } catch (error) {
    listingCards.append(
      renderMessage('error', 'Failed to load your listings.')
    );
    console.error('Error loading my listings:', error);
  }

  loadMoreButton.addEventListener('click', () => {
    currentIndex = renderNextItems(
      myListingsData,
      listingCards,
      currentIndex,
      ITEMS_PER_PAGE
    );

    if (currentIndex >= myListingsData.length) {
      loadMoreButton.classList.add('d-none');
    }
  });

  myListings.append(listingCards, loadMoreButtonWrapper);

  return myListings;
}
