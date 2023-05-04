let textSIGNATURE = "--------------------" +
"\n С уважением,"+
"\n Ткачук Денис,"+
"\n сотрудник ТО"+
'\n Подмосковного филиала ООО "ФОНКОР"'+
"";




function editDate(){
let datePlane = document.getElementById('datePlane');
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate() +1;
var year = dateObj.getUTCFullYear();
newdate = day + "." + month + "." + year;
datePlane.value =  newdate;
}

function editSIGNATURE() {
    let signatureMAIL = document.getElementById('signatureMAIL');
    signatureMAIL.innerText = textSIGNATURE;
}

window.onload = function() {
editDate();
editSIGNATURE()
}
