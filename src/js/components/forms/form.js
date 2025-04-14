export function renderForm() {
  const form = document.createElement('form');
  form.setAttribute('name', 'auth');
  form.classList.add('p-4');
  return form;
}
