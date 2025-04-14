export function renderHeader(headingText) {
  const header = document.createElement('header');
  header.classList.add('text-center');

  const heading = document.createElement('h1');
  heading.classList.add('text-dark');
  heading.textContent = headingText;

  const hr = document.createElement('hr');
  hr.classList.add('mb-4');

  header.append(heading, hr);

  return header;
}
