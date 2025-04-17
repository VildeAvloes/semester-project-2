export function renderHeader(onClose) {
  const wrapper = document.createElement('div');

  const header = document.createElement('div');
  header.classList.add(
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'mb-2'
  );

  const title = document.createElement('h2');
  title.classList.add('modal-title', 'm-0');
  title.textContent = 'Bids';

  const closeButton = document.createElement('button');
  closeButton.classList.add('btn-close');
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.addEventListener('click', onClose);

  header.append(title, closeButton);

  const hr = document.createElement('hr');
  hr.classList.add('mt-2', 'mb-3');

  wrapper.append(header, hr);
  return wrapper;
}
