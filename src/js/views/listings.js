import { getListings } from '../api/listings/get.js';
import { createListingCard } from '../components/listings/listingCard.js';

export async function listingsPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = `
    <div class="text-center mb-5">
      <h1 class="text-dark">Listings</h1>
      <p>Welcome to listings! </br> Explore listings and bid on your most wanted products</p>
    </div>
    <div id="listing-cards" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <!-- Cards will be inserted here -->
    </div>
    <div class="text-center mt-4">
      <button id="load-more-btn" class="btn btn-outline-primary">Load more</button>
    </div>
  `;

  const cardsContainer = container.querySelector('#listing-cards');

  try {
    const { data: listings } = await getListings();

    listings.forEach((listing) => {
      const card = createListingCard(listing);
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Feil ved lasting av listings:', error);
  }

  return container;
}
