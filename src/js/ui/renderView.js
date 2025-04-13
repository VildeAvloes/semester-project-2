export async function renderView(view) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const viewElement = await view;
  app.appendChild(viewElement);
}
