let loaderDataNamePPS = ['- Выходной',
'ППС Люберцы Октябрьский пр-т',
'Егор Порохов (сотрудник ТО)',
'Денис Ткачук (стажер ТО)',
'Игорь Григоров (сотрудник ТО)',
'Владислав Ражев (Хаус-Мастер)',
'Евгений Городнов (Хаус-Мастер)'];

let loaderDATAColleagues = ['Джейк Айв (сотрудник ТО)',
'Вадим Перегудов (электронщик ТО)',
'Егор Порохов (сотрудник ТО)',
'Денис Ткачук (стажер ТО)',
'Игорь Григоров (сотрудник ТО)',
'Владислав Ражев (Хаус-Мастер)',
'Евгений Городнов (Хаус-Мастер)'];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Colleagues = loaderDATAColleagues;
var allNamePPS = loaderDataNamePPS;


///
let textFromDateTXTbox = document.getElementById('datePlane').innerHTML; // текстблок ДАТЫ 
let signatureMAIL = document.getElementById('signatureMAIL'); // текстблок Подпись для е мейла

///////////////////////////////////////////////////////////////////////////////////////////////////
 let txtFromPlaneFLELD = document.getElementById('FLELDplan'); // текстблок для внесения плана для выездных
 let txtFromPLANjob = document.getElementById('MAILplan'); // текст бокс для внемения плана для е мейл сообщения
///////////////////////////////////////////////////////////////////////////////////////////////////

let textForFLELDplan;
let textForMAILplan;

let textForMail = [`Здравствуйте. <p> <p>
Сотрудники ТО планируют посетить Ваш ППС <b>`,
`</b>. 
<p> Уточните у Администратора, Менеджера, старшего кассира какие дополнительные работы нужно выполнить на вашем ППС. 
<p> В письме на почту <strong>help@mo-fonbet.ru</strong> просьба перечислить дополнительные работы. 
<p> Так же, при наличии оборудования, которое необходимо забрать в ТО, прошу приготовить это оборудование и сопровождающую его накладную. 
<p><p>
Ответственный сотрудник ТО и список ППС для проведения работ:   `];

let textSIGNATURE = `
<p> --------------------
<p> С уважением,
<p> Ткачук Денис,
<p> сотрудник ТО"
<p> Подмосковного филиала ООО "ФОНКОР"
`;

/////////////////////////////////////////////////////////////////////////////
// Добавим в бокс подпись
function editSIGNATURE() {
    signatureMAIL.innerHTML = textSIGNATURE;
}
//////////////////////////////////////////////////////////////////////////////
// Загрузить в бокст для даты - дату завтрашнего дня
function editDate(){
let datePlane = document.getElementById('datePlane');
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate() +1;
var year = dateObj.getUTCFullYear();
newdate = day + "." + month + "." + year;
datePlane.innerText =  newdate;
}

//////////////////////////////////////////////////////////////////////////////
//                       обновление плана для ПОЧТЫ

function createMAILplan(){
    let textFromDateTXTbox = document.getElementById('datePlane').innerHTML; // текстблок ДАТЫ 
    let standartTEXTforMAIL = textForMail[0] + textFromDateTXTbox + textForMail[1];    
    let standartTEXTMAIL = standartTEXTforMAIL;
     const textFromPLANjob = document.getElementById('MAILplan').innerHTML; // текст бокс для внемения плана для е мейл сообщения
     let textFromSIGNATURE = document.getElementById('signatureMAIL').innerHTML;
     textForMAILplan = standartTEXTMAIL + ' <p> <p> ' + textFromPLANjob + textFromSIGNATURE;
     
     const boxTEXTFORMAIL = document.getElementById('planforMAIL')
     boxTEXTFORMAIL.innerHTML = textForMAILplan;
    
}

function UpdateTextPlan(){
    //обновление плана для е-мейла
    createMAILplan();
        setTimeout(UpdateTextPlan, 1000);
}
//////////////////////////////////////////////////////////////////////////////
//                       обновление плана для выездных
function createFLELDplan(){
    let textFromDateTXTbox = document.getElementById('datePlane').innerHTML; // текстблок ДАТЫ 
    const textFromPlaneFLELD = document.getElementById('FLELDplan').innerHTML; // текстблок для внесения плана для выездных
    let constructorTxtFLELD = `<p><span style="text-decoration: underline;"><strong>План работ на ${textFromDateTXTbox}</strong></span></p> ${textFromPlaneFLELD}`;
    const boxEXECOTtextFORFLELD = document.getElementById('planforFLELD')
    boxEXECOTtextFORFLELD.innerHTML = constructorTxtFLELD;
}

function UpdateFLELDPlan(){
    createFLELDplan();
    setTimeout(UpdateFLELDPlan, 1000);
}
///////////////////////////////////////////////////////////////////////// 
//скопировать текст из плана для выездных в план для е мейл 
function copyPlanfromFLELinMAILplan(){
txtFromPLANjob.innerHTML = txtFromPlaneFLELD.innerHTML ;
}
/////////////////////////////////////////////////////////////////////////////
//скрыть/показать объекст
function show(id) {
    let el = document.getElementById(id);
    if (el.style.display === 'none') {el.style.display = 'initial';
} else  {el.style.display = 'none'}
}
//////////////////////////////////////////////////////////////////////////////
// 
function nextStep(step){
if (step === '3') {
document.getElementById('standartTEXT').style.display = 'none';
document.getElementById('editerPLAN').style.display = 'initial';
document.getElementById('EXECUTBOX').style.display = 'initial';
} else if (step === '2'){
  alert('шаг на реализации');
} else if (step === 'execut'){
  
 }

}

function AddDatainPLAN(){//старая логика - не подключена
    Colleague = document.getElementById('Name-Colleague').innerText;
let htmlColleague = '<b>' + Colleague + '</b>';
PPS = document.getElementById('LISTJOBS-NamePPS').innerText;
let htmlPPS = '<b> - ' + PPS + '</b>';
JobsList = document.getElementById('LISTJOBS-JOBS').innerHTML;

newDataJobs = htmlColleague + '<p>' + htmlPPS + '<p>' + JobsList;
let FromPlaneFLELD = document.getElementById('FLELDplan'); // текстблок для внесения плана для выездных
    FromPlaneFLELD.innerHTML = FromPlaneFLELD.innerHTML + newDataJobs;
}

function ADDallPLAN() {
    let PPS = document.querySelectorAll('#LISTJOBS-NamePPS');
    let Jobs = document.querySelectorAll('#LISTJOBS-JOBS');
    let FromPlaneFLELD = document.getElementById('FLELDplan'); // текстблок для внесения плана для выездных
// добавим коллегу

const Colleague = document.getElementById('Name-Colleague').value;
let htmlColleague = '<b>' + Colleague + '</b><p>';
FromPlaneFLELD.innerHTML = FromPlaneFLELD.innerHTML + htmlColleague;
// добавим все ППС и их работы
    for (let i = 0; i < PPS.length; i++) {
        let exePPS = '<b> - '+PPS[i].value+'</b><p>';
    FromPlaneFLELD.innerHTML = FromPlaneFLELD.innerHTML + exePPS + Jobs[i].innerText;
      }

}

let cardPPSjob = `
<div id="CARDplan-BOXnewPPSlistJobs">
<input id="LISTJOBS-NamePPS"  class="boxTEXT"  list="NamePPS"></input>
<datalist id="NamePPS"></datalist>
<div id="LISTJOBS-JOBS" class="boxTEXT" contenteditable="true" style="min-height: 60px;"></div>
</div>
 `;

function addCardPPSJob(){
    // let div = document.createElement(cardPPSjob);
let el = document.getElementById('allPPSjobs');
el.innerHTML += cardPPSjob;

}

function clearCardPPSjob() {
    const Colleague = document.getElementById('Name-Colleague');
    Colleague.value = '';
   let allPPSjobs = document.getElementById('allPPSjobs');
   allPPSjobs.innerHTML = cardPPSjob;
   DATAlistload() ;
}
//////////////////////////////////////////////////////////////////////////////////
//варианты в списке 

function DATAlistload() {
var listColleague = document.getElementById('Colleague');
Colleagues.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   listColleague.appendChild(option);
});


var listNamePPS = document.getElementById('NamePPS');
allNamePPS.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   listNamePPS.appendChild(option);
});
}


//////////////////////////////////////////////////////////////////////////////
// Vue.js

/////////////////////////////////////////////////////////////////////////////
// действия, когда код для страницы будет загружен полностью и страница будет полносью готова
window.onload = function() {
editDate();
editSIGNATURE();
UpdateTextPlan();
UpdateFLELDPlan();
DATAlistload();
addCardPPSJob();
}