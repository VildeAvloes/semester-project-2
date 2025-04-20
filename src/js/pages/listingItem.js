import { getListing } from '../api/auth/listings/index.js';
import { loadProfile } from '../api/auth/index.js';
import { renderMessage, renderWrapper } from '../components/common/index.js';
import { renderListingItemImage } from '../components/listings/index.js';
import { openModal } from '../utils/modal/index.js';

export async function listingItemPage(id) {
  const { container, row, col } = renderWrapper('Listing Details', 'col-md-8');

  const backButton = document.createElement('button');
  backButton.innerHTML = `<i class="bi bi-arrow-left"></i>Back`;
  backButton.classList.add('btn', 'btn-outline-secondary', 'mb-2', 'min-w-150');
  backButton.addEventListener('click', () => {
    window.history.back();
  });
  col.append(backButton);

  try {
    const listing = await getListing(id);
    const data = listing.data;
    document.title = `Bid Society | ${data.title}`;

    const currentUser = loadProfile();
    const currentSeller = data.seller;
    const isOwner = currentSeller?.name === currentUser?.name;

    const now = new Date();
    const hasExpired = new Date(data.endsAt) < now;

    const imageWrapper = document.createElement('div');
    const image = renderListingItemImage(data.media);
    imageWrapper.append(image);

    const title = document.createElement('h2');
    title.classList.add('text-primary');
    title.textContent = data.title;

    const description = document.createElement('p');
    description.textContent = data.description || 'No description available';

    const deadline = document.createElement('p');
    deadline.classList.add('text-muted');
    deadline.textContent = `Deadline: ${new Date(data.endsAt).toLocaleString()}`;

    if (hasExpired) {
      deadline.classList.remove('text-muted');
      deadline.classList.add('text-danger');
    }

    const bidButton = document.createElement('button');
    bidButton.setAttribute('type', 'button');
    bidButton.classList.add('btn', 'btn-primary', 'min-w-150');
    bidButton.textContent = isOwner
      ? 'View current bids'
      : hasExpired
        ? 'View bids'
        : 'Make a bid';

    bidButton.addEventListener('click', () => {
      openModal(data, isOwner);
    });

    col.append(imageWrapper, title, description, deadline, bidButton);
  } catch (error) {
    const errorMessage = renderMessage('error', 'Could not load listing');
    col.append(errorMessage);
    console.error('Failed to load listingitem', error);
  }

  row.append(col);
  container.append(row);
  return container;
}
