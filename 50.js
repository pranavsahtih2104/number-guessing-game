function checkNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number each time
    const userInput = parseInt(document.getElementById("userInput").value);
    const outputField = document.getElementById("output");

    if (userInput === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
        outputField.value = "";
    }else if(userInput>10){
        alert("Please enter a number between 1 and 10");
    } else if(isNaN(userInput)){
        alert("Please enter a number");
    }
    else {
        outputField.value = `incorrect ${randomNumber}.`;
    }
}
