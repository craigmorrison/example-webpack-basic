import attachListener from './attachListener.js';
import calculation from './calculation.js';

// Mock out the calculation function run by the event listener
jest.mock('./calculation');

describe('index', () => {
  it('runs the calculation function when the result button is clicked', () => {
    // Set up HTML fixture
    document.body.innerHTML = `<button id="calculateButton">Get result</button>`;

    // Attach the event listener to the button
    attachListener();

    // Simulate a click of the button
    document.getElementById('calculateButton').click();

    // Expect the calculation function to have been called out to upon click
    expect(calculation).toHaveBeenCalled();
  });
});
