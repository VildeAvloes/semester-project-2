export function renderLoader() {
  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'd-flex',
    'flex-column',
    'justify-content-center',
    'align-items-center',
    'w-100',
    'my-5'
  );

  const spinner = document.createElement('div');
  spinner.classList.add('spinner-border', 'text-primary', 'spinner-lg');
  spinner.setAttribute('role', 'status');

  const span = document.createElement('span');
  span.classList.add('visually-hidden');
  span.textContent = 'Loading...';

  spinner.append(span);
  wrapper.append(spinner);

  const loadingText = document.createElement('p');
  loadingText.textContent = 'Loading page...';
  loadingText.classList.add('mt-3');

  wrapper.append(loadingText);

  return wrapper;
}
