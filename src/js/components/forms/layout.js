export function createFormLayout(headingText) {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  const row = document.createElement('div');
  row.classList.add('row', 'justify-content-center');

  const col = document.createElement('div');
  col.classList.add('col-md-6');

  const heading = document.createElement('h1');
  heading.classList.add('mb-4', 'text-center', 'text-dark');
  heading.textContent = headingText;

  const hr = document.createElement('hr');
  hr.classList.add('mb-4');

  col.append(heading, hr);
  row.append(col);
  container.append(row);

  return {
    container,
    row,
    col,
  };
}
