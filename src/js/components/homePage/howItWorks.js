export function renderHowItWorks() {
  const howItWorksSection = document.createElement('section');
  howItWorksSection.classList.add('py-5', 'bg-light', 'rounded', 'px-3');

  const howItWorksHeader = document.createElement('h2');
  howItWorksHeader.classList.add('text-center', 'fw-bold', 'mb-4');
  howItWorksHeader.textContent = 'How It Works';

  const stepsRow = document.createElement('div');
  stepsRow.classList.add('row', 'text-center', 'g-4');

  const steps = [
    {
      icon: 'bi-person-plus',
      title: '1. Create an Account',
      description: 'Sign up and join our community of bidders.',
    },
    {
      icon: 'bi-search',
      title: '2. Browse Listings',
      description: 'Find items you love from verified sellers.',
    },
    {
      icon: 'bi-cash-coin',
      title: '3. Place Your Bid',
      description: 'Enter the auction and place your bid securely.',
    },
    {
      icon: 'bi-trophy',
      title: '4. Win & Celebrate',
      description: 'If you win, the item is yours!',
    },
  ];

  steps.forEach((step) => {
    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-3');

    const icon = document.createElement('i');
    icon.classList.add('bi', step.icon, 'fs-1', 'text-primary', 'mb-3');

    const stepTitle = document.createElement('h3');
    stepTitle.classList.add('fs-5', 'fw-bold');
    stepTitle.textContent = step.title;

    const stepDescription = document.createElement('p');
    stepDescription.classList.add('text-muted', 'small');
    stepDescription.textContent = step.description;

    col.append(icon, stepTitle, stepDescription);
    stepsRow.append(col);
  });

  const registerButton = document.createElement('button');
  registerButton.classList.add(
    'btn',
    'btn-primary',
    'd-block',
    'mx-auto',
    'mt-4',
    'min-w-150'
  );
  registerButton.textContent = 'Register Now';
  registerButton.setAttribute('type', 'button');
  registerButton.addEventListener('click', () => {
    location.hash = '#register';
  });

  howItWorksSection.append(howItWorksHeader, stepsRow, registerButton);

  return howItWorksSection;
}
