const age = parseInt (prompt("How old are you?"));


if(isNaN(age) || age < 0){
    console.log("Plase write a real positive number");
} else  if(age < 18) {
    console.log("Your age too young.");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80){
    console.log("You can't drink.")
} else if(age === 100){
    console.log("wow");
} else if(age > 80) {
    console.log("You can sometimes drink");
} 