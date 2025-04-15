import { getListing } from '../api/listings/get.js';
import { renderMessage } from '../components/common/message.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderListingItemImage } from '../components/listings/listingItemImage.js';
import { openModal } from '../ui/modal/modal.js';

export async function listingItemPage(id) {
  const { container, row, col } = renderWrapper('Listing Details', 'col-md-10');

  try {
    const listing = await getListing(id);
    console.log(listing);

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add();
    const image = renderListingItemImage(listing.data.media);

    imageWrapper.append(image);

    const title = document.createElement('h2');
    title.textContent = listing.data.title;

    const description = document.createElement('p');
    description.textContent =
      listing.data.description || 'No description available';

    const deadline = document.createElement('p');
    deadline.classList.add('text-muted');
    deadline.textContent = `Deadline: ${new Date(listing.data.endsAt).toLocaleString()}`;

    const bidButton = document.createElement('button');
    bidButton.setAttribute('type', 'button');
    bidButton.classList.add('btn', 'btn-primary');
    bidButton.textContent = 'Make a bid';

    bidButton.addEventListener('click', () => {
      openModal(listing.data);
    });

    col.append(imageWrapper, title, description, deadline, bidButton);
  } catch (error) {
    const errorMessage = renderMessage('error', 'Could not load listing');
    col.append(errorMessage);
    console.error(errorMessage);
    console.error('Failed to load listingitem', error);
  }

  row.append(col);
  container.append(row);
  return container;
}
