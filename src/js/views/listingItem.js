import { getListing } from '../api/listings/get.js';
import { renderMessage } from '../components/common/message.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderImage } from '../components/listings/cardImage.js';

export async function listingItemPage(id) {
  const { container, row, col } = renderWrapper('Listing Details', 'col-md-10');

  try {
    const listing = await getListing(id);

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('w-50');
    const image = renderImage(listing.data.media);

    imageWrapper.append(image);

    const title = document.createElement('h2');
    title.textContent = listing.data.title;

    const description = document.createElement('p');
    description.textContent =
      listing.data.description || 'No description available';

    const deadline = document.createElement('p');
    deadline.classList.add('text-muted');
    deadline.textContent = `Deadline: ${new Date(listing.data.endsAt).toLocaleString()}`;

    col.append(imageWrapper, title, description, deadline);
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
