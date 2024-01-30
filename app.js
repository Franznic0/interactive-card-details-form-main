// output

const nameOut = document.querySelector('#name-output');
const cardNumOut = document.querySelector(".card-number");
const expMonthOut = document.querySelector("#month-output");
const expYearOut = document.querySelector("#year-output");
const cvcOut = document.querySelector(".cvc-number");

// input

const nameIn = document.querySelector("#cardholder-name");
const cardNumIn = document.querySelector("#card-number");
const expMonthIn = document.querySelector("#exp-date-month");
const expYearIn = document.querySelector("#exp-date-year");
const cvcIn = document.querySelector("#cvc");

// error

const errName = document.querySelector("#error-cardholder");
const errNumber = document.querySelector("#error-number");
const errDate = document.querySelector("#error-date");
const errCvc = document.querySelector("#error-cvc");

//reset button
const reset = document.querySelector('.complete-submit');


// update values

function updateValues() {

    let nameExe = "Jane Appleseed";
nameIn.oninput = () => {
    if (nameIn.value == "") {
        nameOut.innerText = nameExe;
    } else {
        nameOut.innerText = nameIn.value;
    }
}

let numExe = "0000 0000 0000 0000";
cardNumIn.oninput = () => {
    if (cardNumIn.value == "") {
        cardNumOut.innerText = numExe;
    } else {

        
        cardNumOut.innerText = cardNumIn.value;
    }
}

str.match(/(\d{4})/g).join(" ")

let dateExe = "00";
expMonthIn.oninput = () => {
    if (expMonthIn.value == "") {
        expMonthOut.innerText = dateExe;
    } else {
        expMonthOut.innerText = expMonthIn.value;
    }
}

expYearIn.oninput = () => {
    if (expYearIn.value == "") {
        expYearOut.innerText = dateExe;
    } else {
        expYearOut.innerText = expYearIn.value;
    }
}

let cvcExe = "000";
cvcIn.oninput = () => {
    if (cvcIn.value == "") {
        cvcOut.innerText = cvcExe;
    } else {
        cvcOut.innerText = cvcIn.value;
    }
}

}

// validate form

function validateValue () {

}

// error message

// reset

// function clearForm() {
//     const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
//     for (let i=0; i < inputContainers.length; i++) {
//       inputContainers[i].innerHTML = "";
//     }
//   }
// budgetNumberInput.value = '';
// 

updateValues();