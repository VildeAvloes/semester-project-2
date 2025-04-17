import { renderWrapper, renderMessage } from '../components/common/index.js';

export function errorPage() {
  const { container, col } = renderWrapper('Oops! Something went wrong');

  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'd-flex',
    'flex-column',
    'align-items-center',
    'text-center',
    'mt-5'
  );

  const errorMessage = renderMessage(
    'error',
    'Failed to load the page. Please try again later.'
  );

  const backButton = document.createElement('a');
  backButton.href = '#home';
  backButton.classList.add('btn', 'btn-primary', 'mt-4');
  backButton.innerHTML = `<i class="bi bi-arrow-left"></i>Go back home`;

  wrapper.append(errorMessage, backButton);
  col.append(wrapper);
  return container;
}
