export function profilePage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = /*html*/ `
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="p-4">
          <h1 class="text-center text-dark">My profile</h1>
          
          <hr />

          <div class="d-flex align-items-center mb-4">
            <img id="profile-avatar" src="https://ui-avatars.com/api/?name=Vilde+Avløs&background=random" alt="Avatar" class="rounded-circle me-4" width="100" height="100" />
            <div>
              <p id="profile-name" class="fs-2 fw-bold mb-1">@username</p>
              <p id="profile-email" class="mb-1 text-secondary">epost@stud.noroff.no</p>
              <div class="d-flex">
                <p class="fs-5 fw-bold me-2">Credits:</p>
                <p id="profile-credits" class="fs-5 fw-bold text-secondary">1000</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="avatarUrl" class="form-label">Update avatar (URL)</label>
            <input type="url" class="form-control" id="avatarUrl" placeholder="Paste your url here..." />
            <button id="update-avatar" class="btn btn-secondary mt-2">Update avatar</button>
          </div>

          <hr />

          <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="mb-0">My Listings</h3>
              <button id="create-listing-btn" class="btn btn-primary">Create Listing</button>
            </div>

            <div id="listing-cards" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              <!-- Listings blir lagt til her med JS -->
            </div>

            <div class="text-center mt-4">
              <button id="load-more-btn" class="btn btn-outline-primary">Load more</button>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  `;

  const createListingButton = container.querySelector('#create-listing-btn');
  createListingButton.addEventListener('click', () => {
    location.hash = '#create-listing';
  });

  return container;
}
