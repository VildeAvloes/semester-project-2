import { logout } from '../api/auth/logout.js';
import { isLoggedIn, profile } from '../api/auth/state.js';

export function profilePage() {
  // Sjekk om bruker er logget inn
  if (!isLoggedIn()) {
    // Hvis ikke logget inn, gå til login siden
    location.hash = '#login';
    return;
  }

  const userProfile = profile();
  if (!userProfile) {
    location.hash = '#login';
    return;
  }

  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  // Create Row and Column
  const row = document.createElement('div');
  row.classList.add('row', 'justify-content-center');

  const col = document.createElement('div');
  col.classList.add('col-md-8');
  row.appendChild(col);
  container.appendChild(row);

  // Profile Title
  const heading = document.createElement('h1');
  heading.classList.add('text-center', 'text-dark');
  heading.textContent = 'My Profile';
  col.appendChild(heading);

  // log out
  const logoutButton = document.createElement('button');
  logoutButton.classList.add('btn', 'btn-primary', 'w-100', 'mb-4');
  logoutButton.textContent = 'Log Out';
  logoutButton.addEventListener('click', () => {
    // Fjern token og profil fra lagringen
    logout();

    // Omled til login-siden
    location.hash = '#login';
  });
  col.appendChild(logoutButton);

  // Profile Details Section
  const profileSection = document.createElement('div');
  profileSection.classList.add('d-flex', 'align-items-center', 'mb-4');

  const avatar = document.createElement('img');
  avatar.id = 'profile-avatar';
  avatar.src =
    userProfile.avatarUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile.name)}&background=b9c5d3&color=2c3e50`;
  avatar.alt = 'Avatar';
  avatar.classList.add('rounded-circle', 'me-4');
  avatar.width = 100;
  avatar.height = 100;

  const profileInfo = document.createElement('div');

  const username = document.createElement('p');
  username.id = 'profile-name';
  username.classList.add('fs-2', 'fw-bold', 'mb-1');
  username.textContent = userProfile.name;
  const email = document.createElement('p');
  email.id = 'profile-email';
  email.classList.add('mb-1', 'text-secondary');
  email.textContent = userProfile.email;

  const creditsContainer = document.createElement('div');
  creditsContainer.classList.add('d-flex');

  const creditsLabel = document.createElement('p');
  creditsLabel.classList.add('fs-5', 'fw-bold', 'me-2');
  creditsLabel.textContent = 'Credits:';

  const creditsValue = document.createElement('p');
  creditsValue.id = 'profile-credits';
  creditsValue.classList.add('fs-5', 'fw-bold', 'text-secondary');
  creditsValue.textContent = userProfile.credits || '0'; // Bruk profilens credits eller default

  // Append profile details
  creditsContainer.appendChild(creditsLabel);
  creditsContainer.appendChild(creditsValue);
  profileInfo.appendChild(username);
  profileInfo.appendChild(email);
  profileInfo.appendChild(creditsContainer);

  profileSection.appendChild(avatar);
  profileSection.appendChild(profileInfo);
  col.appendChild(profileSection);

  // Avatar Update Section
  const avatarUpdateSection = document.createElement('div');
  avatarUpdateSection.classList.add('mb-3');

  const avatarLabel = document.createElement('label');
  avatarLabel.setAttribute('for', 'avatarUrl');
  avatarLabel.classList.add('form-label');
  avatarLabel.textContent = 'Update avatar (URL)';

  const avatarInput = document.createElement('input');
  avatarInput.type = 'url';
  avatarInput.classList.add('form-control');
  avatarInput.id = 'avatarUrl';
  avatarInput.placeholder = 'Paste your URL here...';

  const updateButton = document.createElement('button');
  updateButton.id = 'update-avatar';
  updateButton.classList.add('btn', 'btn-secondary', 'mt-2');
  updateButton.textContent = 'Update Avatar';

  avatarUpdateSection.appendChild(avatarLabel);
  avatarUpdateSection.appendChild(avatarInput);
  avatarUpdateSection.appendChild(updateButton);

  col.appendChild(avatarUpdateSection);

  // Listings Section
  const listingsSection = document.createElement('div');
  listingsSection.classList.add('container', 'mt-4');

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

  listingsHeader.appendChild(listingsTitle);
  listingsHeader.appendChild(createListingButton);
  listingsSection.appendChild(listingsHeader);

  const listingCards = document.createElement('div');
  listingCards.id = 'listing-cards';
  listingCards.classList.add(
    'row',
    'row-cols-1',
    'row-cols-sm-2',
    'row-cols-md-3',
    'g-4'
  );
  listingsSection.appendChild(listingCards);

  const loadMoreButton = document.createElement('div');
  loadMoreButton.classList.add('text-center', 'mt-4');

  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.id = 'load-more-btn';
  loadMoreBtn.classList.add('btn', 'btn-outline-primary');
  loadMoreBtn.textContent = 'Load more';

  loadMoreButton.appendChild(loadMoreBtn);
  listingsSection.appendChild(loadMoreButton);

  col.appendChild(listingsSection);

  // Event listener for Create Listing Button
  createListingButton.addEventListener('click', () => {
    location.hash = '#create-listing';
  });

  return container;
}
