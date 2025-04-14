import { renderView } from '../ui/renderView.js';
import * as views from './../views/index.js';

const routes = {
  '': views.homePage,
  '#home': views.homePage,
  '#listings': views.listingsPage,
  '#profile': views.profilePage,
  '#register': views.registerPage,
  '#login': views.loginPage,
};

function onRouteChange() {
  const hash = window.location.hash || '#home';

  if (hash.startsWith('#listing/')) {
    const id = hash.split('/')[1];
    renderView(views.listingItemPage(id));
    return;
  }

  const route = routes[hash];

  if (route) {
    renderView(route());
  } else {
    renderView(views.notFoundView());
  }
}

export function initRouter() {
  window.addEventListener('hashchange', onRouteChange);
  window.addEventListener('load', onRouteChange);
}
