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

            cardNumOut.innerText = cardNumIn.value.match(/(\d{4})/g).join(" ");
        }
    }

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

// // validate form

//     // Luhn Algorithm
//     function validateLuhnAlgorithm(cardNumIn) {
//         let nCheck = 0, bEven = false;

//         for (var n = cardNumIn.length - 1; n >= 0; n--) {
//             var cDigit = cardNumIn.charAt(n),
//                 nDigit = parseInt(cDigit, 10);

//             if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

//             nCheck += nDigit;
//             bEven = !bEven;
//         }

//         return (nCheck % 10) == 0;
//     }

//     // Card Number Validation

//     cardNumIn.addEventListener("input", (e) => {
//         if (!validateLuhnAlgorithm(e.target.value)) {
//             cardNumIn.classList.add("error");
//             errNumber.innerHTML = "Wrong format, numbers only";
//         } else {
//             cardNumIn.classList.remove("error");
//             errNumber.innerHTML = "";
//         }
//     });
    
//     // Card expiry date
    
//         // Expiration Date Validation
    
//         function validateExpirationDate(expMonthIn, expYearIn) {
//             const currentDate = new Date();
//             const currentYear = currentDate.getFullYear();
//             const currentMonth = currentDate.getMonth() + 1; // January is 0
            
//             console.log(currentYear + 4);
            
//             expYearIn.setAttribute('max', currentYear);
//             expYearIn.attr.max = currentYear + 4;

//             console.log(expYearIn.attr.max);
             
//             if (expYearIn > currentYear) {
//                 return true;
//             } else if (expYearIn === currentYear && expMonthIn >= currentMonth) {
//                 return true;
//             }
    
//             return false;
//         }
//         validateExpirationDate();

//         // Event Listener
//     // expireDate.addEventListener("input", (e) => {
//         //     const dateExpression = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$");
//         //     if (dateExpression.test(e.target.value)) {
//             //         expireDateWarning.classList.add("hidden");
//             //         let data = e.target.value.split("/");
//             //         let expirationMonth = data[0];
//     //         let expirationYear = '20' + data[1];
//     //         // Validate expiration date
//     //         if (!validateExpirationDate(expirationMonth, expirationYear)) {
//     //             expireDateWarning.classList.remove("hidden");
//     //             return "Card has expired";
//     //         } else {
//     //             expireDateWarning.classList.add("hidden");
//     //         }
//     //     } else {
//     //         expireDateWarning.classList.remove("hidden");
//     //     }
//     // });

// // CVC Validation
//     function validateCVV(cvcIn) {
//         const cvvPattern = /^[0-9]{3}$/;
//         return cvvPattern.test(cvcIn);
//     }

//     cvcIn.addEventListener("input", (e) => {
//         if (!validateCVV(e.target.value)) {
//             cvcIn.classList.add("error");
//             errCvc.innerHTML = "Invalid CVV";
//         } else {
//             cvcIn.classList.remove("error");
//             errCvc.innerHTML = "";
//         }
//     });


// // reset

// // function clearForm() {
// //     const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
// //     for (let i=0; i < inputContainers.length; i++) {
// //       inputContainers[i].innerHTML = "";
// //     }
// //   }
// // budgetNumberInput.value = '';
// // 

updateValues();