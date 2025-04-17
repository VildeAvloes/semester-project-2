import { renderHeader } from './index.js';

export function renderWrapper(headingText, contentColClass = 'col-md-8') {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  const headerRow = document.createElement('div');
  headerRow.classList.add('row', 'justify-content-center');

  const headerCol = document.createElement('div');
  headerCol.classList.add('col-md-10');

  const header = renderHeader(headingText);
  headerCol.append(header);
  headerRow.append(headerCol);

  const contentRow = document.createElement('div');
  contentRow.classList.add('row', 'justify-content-center');

  const contentCol = document.createElement('div');
  contentCol.classList.add(contentColClass);

  contentRow.append(contentCol);

  container.append(headerRow, contentRow);

  return {
    container,
    row: contentRow,
    col: contentCol,
  };
}
