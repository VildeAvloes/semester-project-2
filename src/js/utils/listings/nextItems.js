import { renderCard } from '../../components/listings/index.js';

export function renderNextItems(listings, container, startIndex, count) {
  const next = listings.slice(startIndex, startIndex + count);
  next.forEach((listing) => {
    const card = renderCard(listing);
    container.append(card);
  });
  return startIndex + count;
}
