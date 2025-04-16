import { isLoggedIn } from '../../api/auth/state.js';
import { renderModal } from '../../components/listings/listingItem/modal/modal.js';
import { trapFocus } from './focus.js';
import { renderListeners } from './listeners.js';

export function openModal(listing, isOwner = false) {
  if (!isLoggedIn()) {
    location.hash = '#login';
    return;
  }

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'bid-modal';
  modalOverlay.classList.add(
    'position-fixed',
    'top-0',
    'start-0',
    'w-100',
    'h-100',
    'bg-dark',
    'bg-opacity-50',
    'd-flex',
    'justify-content-center',
    'align-items-center',
    'z-3'
  );

  const closeModal = () => {
    modalOverlay.remove();
    cleanupListeners();
  };

  const modal = renderModal(closeModal, listing, isOwner);
  modalOverlay.append(modal);
  document.body.append(modalOverlay);

  const cleanupListeners = renderListeners(modalOverlay, closeModal);

  trapFocus(modal);
}
