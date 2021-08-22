import { double, square } from './utils.js';

function calculation() {
  const x = document.getElementById('x').value;

  // Calculate the new value
  const result = double(square(x));

  // Add the extra header
  document.getElementById('result').textContent = result;
}

export default calculation;
