let textForFLELDplan;
let textForMAILplan;



let textSIGNATURE = "<p> --------------------" +
"<p> С уважением,"+
"<p> Ткачук Денис,"+
"<p> сотрудник ТО"+
'<p> Подмосковного филиала ООО "ФОНКОР"'+
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

function updateMAILplan(){
 //обновление плана для е-мейла
 const textFromDateTXTbox = document.getElementById('datePlane').innerHTML;
    
 let standarTextMail = "Здравствуйте."+
 "<p> Сотрудники ТО планируют посетить Ваш ППС "+`<b>${textFromDateTXTbox}</b>`+". <p> Уточните у Администратора, Менеджера, старшего кассира какие дополнительные работы нужно выполнить на вашем ППС. <p> В письме на почту  просьба перечислить дополнительные работы. <p> Так же, при наличии оборудования, которое необходимо забрать в ТО, прошу приготовить это оборудование и сопровождающую его накладную."+
 "<p> Ответственный сотрудник ТО и список ППС для проведения работ:";
 
 const textFromPLANjob = document.getElementById('allplan').innerHTML;
 textForMAILplan = standarTextMail + ' <p> <p> ' + textFromPLANjob + textSIGNATURE;
 
 const boxTEXTFORMAIL = document.getElementById('planforMAIL')
 boxTEXTFORMAIL.textContent = textForMAILplan;

}

function UpdateTextPlan(){
//обновление плана для е-мейла
updateMAILplan();
// обновление инфы для плана выездных
// let textDateForFLELDPlan = 'План на '+ textFromDateTXTbox + '.';

    setTimeout(UpdateTextPlan, 1000);
}



window.onload = function() {
editDate();
editSIGNATURE();
UpdateTextPlan();
}

