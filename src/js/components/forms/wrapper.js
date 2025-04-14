import { renderHeader } from '../common/header.js';

export function renderWrapper(headingText) {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  const row = document.createElement('div');
  row.classList.add('row', 'justify-content-center');

  const col = document.createElement('div');
  col.classList.add('col-md-6');

  const header = renderHeader(headingText);

  col.append(header);
  row.append(col);
  container.append(row);

  return {
    container,
    row,
    col,
  };
}
