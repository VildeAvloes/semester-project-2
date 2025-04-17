import { renderLoader } from '../components/common/index.js';
import { errorPage } from '../pages/index.js';

export async function renderPage(pagePromise) {
  const app = document.getElementById('app');

  app.innerHTML = '';
  const loader = renderLoader();
  app.append(loader);

  try {
    const pageElement = await pagePromise;
    app.innerHTML = '';
    app.append(pageElement);
  } catch (error) {
    console.error('Page rendering failed:', error);
    app.innerHTML = '';
    app.append(errorPage());
  }
}
