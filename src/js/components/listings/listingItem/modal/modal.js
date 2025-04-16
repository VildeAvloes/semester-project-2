import { renderBody } from './body.js';
import { renderFooter } from './footer.js';
import { renderHeader } from './header.js';

export function renderModal(closeModal, listing, isOwner) {
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
  const body = renderBody(listing, isOwner);
  const bidInput = body.bidInput;
  const bidList = body.bidList;
  const footer = renderFooter(closeModal, isOwner, listing, bidInput, bidList);
  modal.append(header, body, footer);

  return modal;
}
