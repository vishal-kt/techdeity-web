
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
    let weight = parseFloat(weightInput);

    // Check if the inputs are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("error-message").innerHTML = "Please enter valid height and weight.";
    } else {
        // Clear the error message if inputs are valid
        document.getElementById("error-message").innerHTML = "";
    }
}

function calculateBMI() {

    let heightInput = document.getElementById("height").value;
     let weightInput = document.getElementById("weight").value;
     

            // Convert input values to numbers
            let height = parseFloat(heightInput);
            let weight = parseFloat(weightInput);
            // Calculate BMI
            let bmi = weight / (height * height);

            // Display the result
            document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}

var button = document.getElementById("calculate");
button.addEventListener("click", calculateBMI);