// OBJECTS
const dateControl = document.querySelector('input[name="queenday"]');


// EVENT LISTENERS
dateControl.addEventListener("change", changeDateValue);

// FUNCTIONS
let submitVal = new Date();
dateControl.value = submitVal.getFullYear() + "-" + 
                    pad(submitVal.getMonth() + 1, 2) + "-" + 
                    pad(submitVal.getDate(), 2);
submitVal = addDays(submitVal, -4);

function changeDateValue (event) {
    submitVal = event.target.value.toString().replaceAll("-","/");
    submitVal = new Date(submitVal);
    submitVal = addDays(submitVal, -4);
}

/*function getQueenCalendar () {
    if (submitVal !== null) {
        console.log(submitVal)
    }  
} */

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

//----------------------------
const download = function (data) {

	// Creating a Blob for having a csv file format
	// and passing the data with type
	const blob = new Blob([data], { type: 'text/csv' });

	// Creating an object for downloading url
	const url = window.URL.createObjectURL(blob);

	// Creating an anchor(a) tag of HTML
	const a = document.createElement('a')

	// Passing the blob downloading url
	a.setAttribute('href', url);

	// Setting the anchor tag attribute for downloading
	// and passing the download file name
	a.setAttribute('download', 'queen_calendar.csv');

	// Performing a download with click
	a.click();
}

const csvmaker = function (data1, data2) {

	// Empty array for storing the values
	csvRows = [];
    for ( let i = 0; i < data1.length; i++) {
        csvRows.push([data1[i], data2[i]]);
    }
	return csvRows.join('\n');
}

const getQueenCalendar = async function () {
    
    const significant_days = [0, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 17, 23, 30, 39];
    const column2 = ["Queen lays fertilized egg", 
                    "Prepare queenless swarm box", 
                    "Grafting day", 
                    "Transfer started cells into the finished colony", 
                    "Cull sealed cells", 
                    "Queen cells should be sealed today", 
                    "Queens are in a delicate state do not disturb the hive", 
                    "Queens are in a delicate state do not disturb the hive",
                    "Queens are in a delicate state do not disturb the hive", 
                    "Make up your queenless mating nucs or dequeen the hives you are putting the cells into.", 
                    "Transfer your ripe queen cells near the top of a center brood frame. 1 cell per hive is ok. But, 2 cells is insurance.", 
                    "Virgin queens should start emerging over the next couple of days.", 
                    "Check your nuc/hives to verify the queens have hatched. Discard the cell cups.", 
                    "The queen is sexually mature now and will start making mating flights.", 
                    "In an ideal world the queen would start laying eggs today. Weather can absolutely delayed mating flights and impact when she starts laying.",  
                    "This is a great day to check on your queen. The presence of capped worker brood today means the virgin queen you placed in the hive is mated and laying. Again, weather can impact this date."];
    
    const column1 = significant_days.map((val, index) => {
        const next_date = addDays(submitVal, val);
        return ((next_date.getMonth() + 1).toString() + "/" + next_date.getDate().toString());
    });

	const csvdata = csvmaker(column1, column2);
	download(csvdata);
}

function addDays(date, days) {

    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
}


