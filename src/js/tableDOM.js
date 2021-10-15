const file = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

export default function createTable() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < file.length; i++) {
    const table = document.getElementById('table');
    const row = document.createElement('tr');
    row.innerHTML = `
        <tr data-id="${file[i].id}" data-title="${file[i].title}" data-year="${file[i].year}" data-imdb="${file[i].imdb}">
  <td>#${file[i].id}</td>
  <td>${file[i].title}</td>
  <td>(${file[i].year})</td>
  <td>imdb: ${file[i].imdb}</td>
</tr><br>`;
    table.insertBefore(row, null);
  }
}
