import calculation from './calculation';

describe('calulation', () => {
  it('renders 2n^2', () => {
    // Set up fixture
    document.body.innerHTML = `
    <input id="x">
    <button id="calculateButton">Get result</button>
    <div id="result"></div>`;

    // Set the value of the input to 4
    document.getElementById('x').value = 4;

    // Run the function
    calculation();

    // Expect the result to be 2 * (4^2) = 32
    expect(document.getElementById('result').textContent).toBe('32');
  });
});
