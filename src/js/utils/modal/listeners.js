export function renderListeners(modalOverlay, closeModal) {
  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  function handleOutsideClick(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  }

  document.addEventListener('keydown', handleEscape);
  modalOverlay.addEventListener('click', handleOutsideClick);

  return () => {
    document.removeEventListener('keydown', handleEscape);
    modalOverlay.removeEventListener('click', handleOutsideClick);
  };
}
