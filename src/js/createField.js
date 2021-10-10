export default function create(n) {
  const gameField = document.getElementById('gameField');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < (n ** 2); i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameField.appendChild(cell);
  }
}
