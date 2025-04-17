import { renderPage } from '../utils/renderPage.js';
import * as page from '../pages/index.js';

const routes = {
  '': page.homePage,
  '#home': page.homePage,
  '#listings': page.listingsPage,
  '#profile': page.profilePage,
  '#register': page.registerPage,
  '#login': page.loginPage,
  '#create-listing': page.createListingPage,
};

function onRouteChange() {
  const hash = window.location.hash || '#home';

  if (hash.startsWith('#listing/')) {
    const id = hash.split('/')[1];
    renderPage(page.listingItemPage(id));
    return;
  }

  const route = routes[hash];

  if (route) {
    renderPage(route());
  } else {
    renderPage(page.notFoundView());
  }
}

export function initRouter() {
  window.addEventListener('hashchange', onRouteChange);
  window.addEventListener('load', onRouteChange);
}
