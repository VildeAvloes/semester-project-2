import { logout } from '../../api/auth/logout.js';
import { isLoggedIn } from '../../api/auth/state.js';

export function renderNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

  const container = document.createElement('div');
  container.classList.add('container');

  const brand = document.createElement('a');
  brand.classList.add('navbar-brand');
  brand.textContent = 'Bid Society';
  brand.href = '#home';

  const toggleButton = document.createElement('button');
  toggleButton.type = 'button';
  toggleButton.classList.add('navbar-toggler');
  toggleButton.setAttribute('data-bs-toggle', 'collapse');
  toggleButton.setAttribute('data-bs-target', '#mainNavbar');
  toggleButton.setAttribute('aria-controls', 'mainNavbar');
  toggleButton.setAttribute('aria-expanded', 'false');
  toggleButton.setAttribute('aria-label', 'Toggle navigation');

  const toggleIcon = document.createElement('span');
  toggleIcon.classList.add('navbar-toggler-icon');
  toggleButton.append(toggleIcon);

  const navbarCollapse = document.createElement('div');
  navbarCollapse.classList.add('collapse', 'navbar-collapse');
  navbarCollapse.id = 'mainNavbar';

  const navList = document.createElement('ul');
  navList.classList.add('navbar-nav', 'ms-auto');

  const loggedIn = isLoggedIn();

  const links = loggedIn
    ? [
        { name: 'Home', href: '#home' },
        { name: 'Listings', href: '#listings' },
        { name: 'My Profile', href: '#profile' },
        { name: 'Log Out', href: 'javascript:void(0);', onClick: logout },
      ]
    : [
        { name: 'Home', href: '#home' },
        { name: 'Listings', href: '#listings' },
        { name: 'Log In', href: '#login' },
        { name: 'Register', href: '#register' },
      ];

  links.forEach((link) => {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const a = document.createElement('a');
    a.classList.add('nav-link');
    a.textContent = link.name;
    a.href = link.href;

    if (link.onClick) {
      a.addEventListener('click', link.onClick);
    }

    li.append(a);
    navList.append(li);
  });

  navbarCollapse.append(navList);
  container.append(brand, toggleButton, navbarCollapse);
  nav.append(container);

  return nav;
}
