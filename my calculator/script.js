// Get the display screen element
const display = document.getElementById('display');

// Function to add characters to the display
function appendToDisplay(value) {
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

// Function to evaluate the expression and show the result
function calculateResult() {
    try {
        // Use the built-in eval() function to calculate the result
        // The 'try...catch' block will handle any errors, like division by zero
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}