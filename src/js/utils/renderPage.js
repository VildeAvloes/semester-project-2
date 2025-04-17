export async function renderPage(page) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const pageElement = await page;
  app.append(pageElement);
}
