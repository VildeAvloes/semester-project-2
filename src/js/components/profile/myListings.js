export function renderMyListings() {
  const myListings = document.createElement('div');
  myListings.classList.add('container', 'mt-4');

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
  createListingButton.classList.add('btn', 'btn-primary');
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

  const loadMoreButton = document.createElement('div');
  loadMoreButton.classList.add('text-center', 'mt-4');

  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.id = 'load-more-btn';
  loadMoreBtn.classList.add('btn', 'btn-outline-primary');
  loadMoreBtn.textContent = 'Load more';

  loadMoreButton.append(loadMoreBtn);
  myListings.append(listingCards, loadMoreButton);

  return myListings;
}
