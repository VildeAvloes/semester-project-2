export function listingsPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = `
    <div class="text-center mb-5">
      <h1 class="text-dark">Listings</h1>
      <p>Welcome to listings! </br> Explore listings and bid on your most wanted products</p>
    </div>

    <div id="listing-cards" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <!-- Listing cards legges til her med JavaScript -->
    </div>

    <div class="text-center mt-4">
      <button id="load-more-btn" class="btn btn-outline-primary">Load more</button>
    </div>
  `;

  return container;
}
