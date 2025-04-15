export function renderSearchBar(onSearch) {
  const form = document.createElement('form');
  form.classList.add('mb-4', 'd-flex', 'justify-content-center');

  const inputGroup = document.createElement('div');
  inputGroup.classList.add('input-group', 'w-50');

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.type = 'search';
  input.placeholder = 'Search listings';
  input.setAttribute('aria-label', 'Search');

  const button = document.createElement('button');
  button.type = 'submit';
  button.classList.add('btn', 'btn-outline-primary');
  button.innerHTML = 'Search';

  inputGroup.append(input, button);
  form.append(inputGroup);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSearch(input.value.trim().toLowerCase());
  });

  return form;
}
