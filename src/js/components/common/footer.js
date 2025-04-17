export function renderFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('bg-light', 'text-center', 'py-4', 'mt-5');

  const container = document.createElement('div');
  container.classList.add('container');

  const copyright = document.createElement('p');
  copyright.classList.add('mb-1', 'fw-bold');
  copyright.textContent = 'Bid Society © 2025';

  const slogan = document.createElement('p');
  slogan.classList.add('text-muted', 'small', 'mb-0');
  slogan.textContent =
    'A place to bid, win, and celebrate second-hand treasures';

  container.append(copyright, slogan);
  footer.append(container);

  return footer;
}
