// OBJECTS
const dateControl = document.querySelector('input[name="queenday"]');


// EVENT LISTENERS
dateControl.addEventListener("change", changeDateValue);

// FUNCTIONS
let submitVal = new Date();
dateControl.value = submitVal.getFullYear() + "-" + 
                    pad(submitVal.getMonth(), 2) + "-" + 
                    pad(submitVal.getDay(), 2);

function changeDateValue (event) {
    submitVal = event.target.valueAsNumber;
    console.log(submitVal);
}

function getQueenCalendar () {
    if (submitVal !== null) {
        console.log(submitVal)
    }  
} 

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}