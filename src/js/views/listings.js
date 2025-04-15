import { getListings } from '../api/listings/get.js';
import { renderMessage } from '../components/common/message.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderDescription } from '../components/listings/description.js';
import { renderLoadMoreButton } from '../components/listings/loadMore.js';
import { renderSearchBar } from '../components/listings/searchBar.js';
import { renderNextItems } from '../utils/listings/nextItems.js';

const ITEMS_PER_PAGE = 9;

export async function listingsPage() {
  const { container, row, col } = renderWrapper('Listings', 'col-md-10');

  const descriptionContainer = renderDescription();
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add(
    'row',
    'row-cols-1',
    'row-cols-sm-2',
    'row-cols-lg-3',
    'g-4'
  );
  cardsContainer.id = 'listing-cards';

  const loadMoreButton = renderLoadMoreButton();

  let allListings = [];
  let filteredListings = [];
  let currentIndex = 0;

  function resetListings() {
    cardsContainer.innerHTML = '';
    currentIndex = 0;
  }

  function handleNextItems(listings) {
    currentIndex = renderNextItems(
      listings,
      cardsContainer,
      currentIndex,
      ITEMS_PER_PAGE
    );

    if (currentIndex >= listings.length) {
      loadMoreButton.classList.add('d-none');
    } else {
      loadMoreButton.classList.remove('d-none');
    }
  }

  function handleSearch(query) {
    resetListings();
    filteredListings = allListings.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    handleNextItems(filteredListings);
  }

  const searchBar = renderSearchBar(handleSearch);

  col.append(descriptionContainer, searchBar, cardsContainer, loadMoreButton);
  row.append(col);
  container.append(row);

  try {
    const { data } = await getListings();
    allListings = data;
    filteredListings = data;
    handleNextItems(filteredListings);
  } catch (error) {
    const errorMessage = renderMessage('error', 'Failed to load listings');
    col.append(errorMessage);
    console.error(error);
  }

  loadMoreButton.addEventListener('click', () =>
    handleNextItems(filteredListings)
  );

  return container;
}
