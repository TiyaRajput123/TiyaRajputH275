function checkFare() {
    const age = document.getElementById("age").value;
    const fareOutput = document.getElementById("fareOutput");
    
    if (age <= 19) {
    fareOutput.textContent = "You can pay child’s fare.";
    } else {
    fareOutput.textContent = "You must pay the adult fare.";
    }
    }
    
    function displayCuisine() {
    const name = document.getElementById("foodName").value;
    const cuisine = document.getElementById("foodCuisine").value;
    const foodOutput = document.getElementById("foodOutput");
    
    foodOutput.value = `Hello ${name}, you have chosen ${cuisine} cuisine!`;
    }