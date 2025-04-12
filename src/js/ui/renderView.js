export function renderView(view) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
