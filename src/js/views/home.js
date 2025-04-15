import { renderHowItWorks } from '../components/homePage/howItWorks.js';

export function homePage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  const welcomeContainer = document.createElement('div');
  welcomeContainer.classList.add('row', 'align-items-center', 'gy-4', 'mb-5');

  const welcomeText = document.createElement('div');
  welcomeText.classList.add(
    'col-12',
    'col-md-6',
    'text-center',
    'text-md-start'
  );

  const heading = document.createElement('h1');
  heading.classList.add('fw-bold', 'mb-3');
  heading.textContent = 'Welcome to Bid Society';

  const subText = document.createElement('p');
  subText.classList.add('lead', 'text-muted');
  subText.textContent =
    'Discover unique treasures, place your bids, and win second-hand gems from people just like you.';

  const ctaButton = document.createElement('a');
  ctaButton.classList.add('btn', 'btn-primary', 'mt-3');
  ctaButton.href = '#listings';
  ctaButton.textContent = 'Browse Listings';

  welcomeText.append(heading, subText, ctaButton);

  const colImage = document.createElement('div');
  colImage.classList.add('col-12', 'col-md-6', 'text-center');

  const welcomeImage = document.createElement('img');
  welcomeImage.src = '../../../public/assets/couple.jpg';
  welcomeImage.alt = 'Woman and man outside interacting with a smartphone.';
  welcomeImage.classList.add('img-fluid', 'rounded', 'shadow');

  colImage.append(welcomeImage);

  welcomeContainer.append(welcomeText, colImage);

  // Legg til How It Works seksjonen fra den nye komponenten
  const howItWorksSection = renderHowItWorks();

  container.append(welcomeContainer, howItWorksSection);

  return container;
}
