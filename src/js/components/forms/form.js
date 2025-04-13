export function renderForm(children = []) {
  const form = document.createElement('form');
  form.setAttribute('name', 'auth');
  form.classList.add('p-4');

  children.forEach((child) => form.appendChild(child));
  return form;
}
