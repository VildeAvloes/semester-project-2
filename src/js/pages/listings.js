import { getListings } from '../api/auth/listings/index.js';
import { renderMessage, renderWrapper } from '../components/common/index.js';
import {
  renderDescription,
  renderLoadMoreButton,
  renderSearchBar,
} from '../components/listings/index.js';
import { renderNextItems } from '../utils/listings/nextItems.js';

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
  const ITEMS_PER_PAGE = 9;

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

  col.append(descriptionContainer, searchBar);

  try {
    const { data } = await getListings();

    allListings = data;
    filteredListings = data;
    handleNextItems(filteredListings);

    col.append(cardsContainer, loadMoreButton);
  } catch (error) {
    const errorMessage = renderMessage('error', 'Failed to load listings');
    col.append(errorMessage);
    console.error(error);
  }

  loadMoreButton.addEventListener('click', () =>
    handleNextItems(filteredListings)
  );

  row.append(col);
  container.append(row);

  return container;
}
