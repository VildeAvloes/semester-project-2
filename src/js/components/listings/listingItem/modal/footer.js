export function renderFooter(onClose) {
  const footer = document.createElement('div');
  footer.classList.add(
    'modal-footer',
    'd-flex',
    'justify-content-end',
    'gap-2',
    'mt-4'
  );

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn', 'btn-outline-secondary', 'min-w-150');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', onClose);

  const submitButton = document.createElement('button');
  submitButton.classList.add('btn', 'btn-primary', 'min-w-150');
  submitButton.textContent = 'Submit Bid';

  footer.append(cancelButton, submitButton);
  return footer;
}
