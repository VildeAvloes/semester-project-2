export function renderDescription() {
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('text-center', 'mb-4');

  const descriptionText = document.createElement('p');
  descriptionText.textContent =
    'Explore and search through all listed products and bid on your most wanted ones!';

  descriptionContainer.append(descriptionText);
  return descriptionContainer;
}
