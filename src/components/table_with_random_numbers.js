import _ from 'lodash';

export default (size = 3) => {
  const element = document.createElement('table');

  for (var i = 0; i < size; i++) {
    var row = document.createElement('tr')

    for (var j = 0; j < size; j++) {
      var cell = document.createElement('td');
      cell.innerHTML = _.random(1, 9).toString();
      row.appendChild(cell);
    }
    element.appendChild(row);
  }

  return element;
};
