let textForFLELDplan;
let textForMAILplan;



let textSIGNATURE = "\n --------------------" +
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
datePlane.innerText =  newdate;
}

function editSIGNATURE() {
    let signatureMAIL = document.getElementById('signatureMAIL');
    signatureMAIL.innerText = textSIGNATURE;
}



function UpdateTextPlan(){
    const textFromDateTXTbox = document.getElementById('datePlane').innerText;
    let textDateForPlan = 'План на '+ textFromDateTXTbox+'.';
textForMAILplan = textDateForPlan + textSIGNATURE;


const boxTEXTFORMAIL = document.getElementById('planforMAIL')
boxTEXTFORMAIL.innerText = textForMAILplan;

    setTimeout(UpdateTextPlan, 1000);
}

window.onload = function() {
editDate();
editSIGNATURE();
UpdateTextPlan();
}

