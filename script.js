// Get the display element
const display = document.querySelector('input[name="display"]');

// Function to handle button click
function updateDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listeners for buttons
document.querySelectorAll('.calculater input').forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.value;

        if (buttonValue === 'AC') {
            clearDisplay();
        } else if (buttonValue === 'DE') {
            deleteLast();
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            updateDisplay(buttonValue);
        }
    });
});
 
