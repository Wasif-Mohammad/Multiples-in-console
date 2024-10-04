function getMultiples() {
    // Prompt the user for a number
    let number = parseInt(prompt("Enter a number:"));

    // Check if the input is a valid number
    if (!isNaN(number)) {
        console.log(`Multiples of ${number} up to ${number * 10}:`);
        
        // Loop to calculate and log multiples
        for (let i = 1; i <= 10; i++) {
            console.log(number * i);
        }
    } else {
        console.log("Please enter a valid number.");
    }
}

// Call the function when the page loads
window.onload = getMultiples;
