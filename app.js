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
const reset = document.querySelector('#complete-submit');

// update values
    function updateValues() {

        // Name
        let nameExe = "Jane Appleseed";
    nameIn.oninput = () => {
        if (nameIn.value == "") {
            nameOut.innerText = nameExe;
        } else if (!nameIn.value.match(/[A-Za-z+s]+/)) {
            nameIn.classList.add('error');
            errName.innerHTML = "Insert valid name";
        } else {
            nameIn.classList.remove('error');
            errName.innerHTML = "";
            nameOut.innerText = nameIn.value;
        };
    }

    // Card Number
    let numExe = "0000 0000 0000 0000";
    cardNumIn.oninput = () => {
        if (cardNumIn.value == "") {
            cardNumOut.innerText = numExe;
        } else if (!cardNumIn.value.match(/^[0-9]+$/)){
            cardNumIn.classList.add("error");
            errNumber.innerHTML = "Wrong format, numbers only";
        } else {
            cardNumIn.classList.remove("error");
            errNumber.innerHTML = "";
            cardNumOut.innerText = cardNumIn.value.match(/(\d{4})/g).join(" ");
        }
    }

    // Month
    let dateExe = "00";
    expMonthIn.oninput = () => {
        if (expMonthIn.value == "") {
            expMonthOut.innerText = dateExe;
        } else if (expMonthIn.value > 12){
            expMonthIn.classList.add("error");
            errDate.innerHTML = "Invalid date";
        } else {
            expMonthIn.classList.remove("error");
            errDate.innerHTML = "";
            expMonthOut.innerText = expMonthIn.value;
        }
    }

    // Year
    expYearIn.oninput = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        let checkYear = "20" + expYearIn.value;
        let maxValididty = currentYear + 4;

        if (expYearIn.value == "") {
            expYearOut.innerText = dateExe;
        } else if ( checkYear > maxValididty || checkYear < currentYear){
            expYearIn.classList.add("error");
            errDate.innerHTML = "Invalid date";
        } else {
            expYearIn.classList.remove("error");
            errDate.innerHTML = "";
            expYearOut.innerText = expYearIn.value;
        }
    }
    
    // cvc
    function validateCVV(cvcIn) {
        const cvvPattern = /^[0-9]{3}$/;
        return cvvPattern.test(cvcIn);
    }
    let cvcExe = "000";
    cvcIn.oninput = () => {
        if (cvcIn.value == "") {
            cvcOut.innerText = cvcExe;
        } else if (!validateCVV(cvcIn.value)) {
            cvcIn.classList.add("error");
            errCvc.innerHTML = "Invalid CVV";
        } else {
            cvcIn.classList.remove("error");
            errCvc.innerHTML = "";
            cvcOut.innerText = cvcIn.value;
        }
    }
};

// submit form
document.querySelector('#form-submit').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (!validateCard()) {
        cardNumIn.classList.add("error");
        errNumber.innerHTML = "Card not valid";
    } else if(!fillCheck()){
        nameIn.classList.add("error");
        expMonthIn.classList.add("error");
        expYearIn.classList.add("error");
        cvcIn.classList.add("error");
        errName.innerHTML = "Can't be empty";
        errDate.innerHTML = "Can't be empty";
        errCvc.innerHTML = "Can't be empty";
    }else {
        nameIn.classList.remove("error");
        cardNumIn.classList.remove("error");
        expMonthIn.classList.remove("error");
        expYearIn.classList.remove("error");
        cvcIn.classList.remove("error");
        errName.innerHTML = "";
        errDate.innerHTML = "";
        errCvc.innerHTML = "";
        errNumber.innerHTML = "";
        document.querySelector('.complete-state').classList.add('submitted');
    };
})

function validateCard() {
    var cardnoVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var cardnoMastercard = /^(?:5[1-5][0-9]{14})$/;
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    let checkYear = "20" + expYearIn;

    if(cardNumIn.value.match(cardnoVisa))
    {
      return true;
    } else if (cardNumIn.value.match(cardnoMastercard)){
        return true;
    } else if(expMonthIn>=currentMonth && checkYear==currentYear){
        return true;
    } else {
        return false;
    }

}

function fillCheck() {
    if (nameIn ==""){
        return false;
    } else if (expMonthIn =="") {
        return false;
    } else if (expYearIn =="") {
        return false;
    } else if(cvcIn =="") {
        return false;
    } else {
        return true;
    }
}

// reset
reset.addEventListener('click', () => {
    clearForm();
    resetCard();
    document.querySelector('.complete-state').classList.remove('submitted');
})

function clearForm() {
    const inputContainers = document.querySelectorAll('.card-details');
    for (let i=0; i < inputContainers.length; i++) {
      inputContainers[i].value = "";
    }
  }

function resetCard() {
    nameOut.innerHTML = "Jane Appleseed";
    cardNumOut.innerHTML = "0000 0000 0000 0000";
    expMonthOut.innerHTML = "00";
    expYearOut.innerHTML = "00";
    cvcOut.innerHTML = "000";
}

updateValues();