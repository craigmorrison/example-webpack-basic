import calculation from './calculation.js';

function attachListener() {
  document.getElementById('calculateButton').addEventListener('click', () => {
    calculation();
  });
}

export default attachListener;
