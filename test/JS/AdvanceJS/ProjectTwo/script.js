
document.getElementById("height").addEventListener("input", liveValidation);
document.getElementById("weight").addEventListener("input", liveValidation);
function liveValidation() {
    // Reset error message
    document.getElementById("error-message").innerHTML = "";

    // Get the input values
    var heightInput = document.getElementById("height").value;
    var weightInput = document.getElementById("weight").value;

    // Convert input values to numbers
    var height = parseFloat(heightInput);
    var weight = parseFloat(weightInput);

    // Check if the inputs are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("error-message").innerHTML = "Please enter valid height and weight.";
    } else {
        // Clear the error message if inputs are valid
        document.getElementById("error-message").innerHTML = "";
    }
}

function calculateBMI() {
    
}
