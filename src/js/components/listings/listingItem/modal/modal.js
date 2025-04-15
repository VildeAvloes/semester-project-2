import { renderBody } from './body.js';
import { renderFooter } from './footer.js';
import { renderHeader } from './header.js';

export function renderModal(closeModal, listing) {
  const modal = document.createElement('div');
  modal.classList.add(
    'modal-container',
    'bg-white',
    'rounded',
    'shadow',
    'p-4',
    'w-100'
  );

  const header = renderHeader(closeModal);
  const body = renderBody(listing.bids);
  const footer = renderFooter(closeModal);

  modal.append(header, body, footer);

  return modal;
}
