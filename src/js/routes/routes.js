import { renderView } from '../ui/renderView.js';
import * as views from './../views/index.js';

// Definerer rutene og tilhørende visninger
const routes = {
  '': views.homePage,
  '#home': views.homePage,
  '#listings': views.listingsPage,
  '#profile': views.profilePage,
  '#register': views.registerPage,
  '#login': views.loginPage,
};

// Funksjon for å håndtere ruteendringer
function onRouteChange() {
  const hash = window.location.hash || '#home';
  const route = routes[hash];

  if (route) {
    renderView(route());
  } else {
    renderView(views.notFoundView());
  }
}

// Initialiserer routeren
export function initRouter() {
  window.addEventListener('hashchange', onRouteChange);
  window.addEventListener('load', onRouteChange);
}
