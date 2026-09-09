// Create heading
let heading = document.createElement("h1");
heading.textContent = "Interactive Calculator";
document.body.appendChild(heading);

// Create first number input
let number1 = document.createElement("input");
number1.type = "text";
number1.placeholder = "Enter first number";
document.body.appendChild(number1);

// Create second number input
let number2 = document.createElement("input");
number2.type = "text";
number2.placeholder = "Enter second number";
document.body.appendChild(number2);

// Create third number input
let number3 = document.createElement("input");
number3.type = "text";
number3.placeholder = "Enter third number";
document.body.appendChild(number3);

// Create email input
let email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter your email";
document.body.appendChild(email);

// Create button
let button = document.createElement("button");
button.textContent = "Calculate Sum";
document.body.appendChild(button);

// Create paragraph
let paragraph = document.createElement("p");
paragraph.textContent = "The sum will appear here.";
document.body.appendChild(paragraph);

// Calculate the sum
button.addEventListener("click", function() {

    let n1 = Number(number1.value);
    let n2 = Number(number2.value);
    let n3 = Number(number3.value);

    let sum = n1 + n2 + n3;

    paragraph.textContent = "The sum of the numbers is: " + sum;
});
