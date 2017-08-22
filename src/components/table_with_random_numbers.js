import _ from 'lodash';

export default (size = 3) => {
  let row;
  let i;
  let j;
  let cell;

  const element = document.createElement('div');

  const table = document.createElement('table');

  for (i = 0; i < size; i += 1) {
    row = document.createElement('tr');

    for (j = 0; j < size; j += 1) {
      cell = document.createElement('td');
      cell.innerHTML = _.random(1, 9).toString();
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  element.appendChild(table);

  return element;
};
