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
    
let standarTextMail = "Здравствуйте."+
"\n Сотрудники ТО планируют посетить Ваш ППС "+textFromDateTXTbox+". \n Уточните у Администратора, Менеджера, старшего кассира какие дополнительные работы нужно выполнить на вашем ППС. \n В письме на почту  просьба перечислить дополнительные работы. Так же, при наличии оборудования, которое необходимо забрать в ТО, прошу приготовить это оборудование и сопровождающую его накладную."+
"Ответственный сотрудник ТО и список ППС для проведения работ:";

    let textDateForPlan = 'План на '+ textFromDateTXTbox+'.';

textForMAILplan = standarTextMail + textSIGNATURE;

const boxTEXTFORMAIL = document.getElementById('planforMAIL')
boxTEXTFORMAIL.innerText = textForMAILplan;

    setTimeout(UpdateTextPlan, 1000);
}

window.onload = function() {
editDate();
editSIGNATURE();
UpdateTextPlan();
}

