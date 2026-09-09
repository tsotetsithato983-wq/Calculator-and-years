// ===============================
// CREATE THE INTERFACE USING DOM
// ===============================

// Heading
let heading = document.createElement("h1");
heading.textContent = "Interactive Calculator";
document.body.appendChild(heading);


// ---------- NUMBER 1 ----------
let number1 = document.createElement("input");
number1.type = "text";
number1.placeholder = "Enter number 1";
document.body.appendChild(number1);


// ---------- NUMBER 2 ----------
let number2 = document.createElement("input");
number2.type = "text";
number2.placeholder = "Enter number 2";
document.body.appendChild(number2);


// ---------- NUMBER 3 ----------
let number3 = document.createElement("input");
number3.type = "text";
number3.placeholder = "Enter number 3";
document.body.appendChild(number3);


// ---------- EMAIL ----------
let email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter email";
document.body.appendChild(email);


// ---------- CALCULATE BUTTON ----------
let calculateButton = document.createElement("button");
calculateButton.textContent = "Calculate Sum";
document.body.appendChild(calculateButton);


// ---------- RESULT PARAGRAPH ----------
let result = document.createElement("p");
result.textContent = "Sum: ";
document.body.appendChild(result);


// ===============================
// CALCULATE SUM FUNCTION
// ===============================

function calculateSum() {

    let n1 = Number(number1.value);
    let n2 = Number(number2.value);
    let n3 = Number(number3.value);

    let sum = n1 + n2 + n3;

    result.textContent = "Sum: " + sum;
}


// Button event
calculateButton.addEventListener("click", calculateSum);


// ===============================
// DAYS OF THE WEEK
// ===============================

let dayTitle = document.createElement("h2");
dayTitle.textContent = "Monday";
document.body.appendChild(dayTitle);


let dayButton = document.createElement("button");
dayButton.textContent = "Change day";
document.body.appendChild(dayButton);


// Array containing the days
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


// Index starts at Monday
let dayIndex = 0;


// Function to change day
function changeDay() {

    dayIndex++;

    // Go back to Monday after Sunday
    if (dayIndex >= days.length) {
        dayIndex = 0;
    }

    dayTitle.textContent = days[dayIndex];
}


// Button event
dayButton.addEventListener("click", changeDay);


// ===============================
// MONTHS
// ===============================

let monthTitle = document.createElement("h2");
monthTitle.textContent = "January";
document.body.appendChild(monthTitle);


let monthButton = document.createElement("button");
monthButton.textContent = "Change month";
document.body.appendChild(monthButton);


// Array containing months
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


// Index starts at January
let monthIndex = 0;


// Function to change month
function changeMonth() {

    monthIndex++;

    // Go back to January after December
    if (monthIndex >= months.length) {
        monthIndex = 0;
    }

    monthTitle.textContent = months[monthIndex];
}


// Button event
monthButton.addEventListener("click", changeMonth);
