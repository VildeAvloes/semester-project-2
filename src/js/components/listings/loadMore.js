export function renderLoadMoreButton() {
  const loadMoreButton = document.createElement('button');
  loadMoreButton.textContent = 'Load more';
  loadMoreButton.classList.add(
    'btn',
    'btn-outline-primary',
    'mt-4',
    'd-block',
    'mx-auto',
    'min-w-150'
  );
  loadMoreButton.id = 'load-more-btn';
  return loadMoreButton;
}
