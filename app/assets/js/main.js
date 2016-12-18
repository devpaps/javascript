

//Sortera ut en sträng så att den blir i rätt ordning.



//document.getElementById('word').innerHTML = reverse;


//Räknar ut Arean av en triangel med sidorna
//funktionen håller två parametrar tal1 (4) och tal2 (6), som sedan räknas ut och returneras i variabeln beräkna
var beräkna = function (tal1,tal2) {
 return tal1 * tal2;
}
//Placerar informationen i triangle elmentet i DOM.
document.getElementById("triangle").innerHTML = "Area of the triangle is " + beräkna(4,6);



//Skriver ut den aktuella sidan. Här behöver jag inte kalla på min funktion,
//eftersom jag har angett att den ska köra min funktion när knappen trycks ned.
function utskrift() {
  window.print();
}

//Skriver ut dagens datum samt tid
function today_Date() {

  // Lagrar dagens datum (year, month, date, hours, minutes, seconds, milliseconds) från objektet Date();
  var day = new Date();

  // Här lagrar jag dagarna i "lådor" som sedan ska hämtas utifrån vilket nummer som objektet getDay() visar.
  var what_Day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // Skriver ut informationen i current_Day elementet. Hämtar data från variabeln getDay och slänger in det passande numret i arrayen what_Day.
  document.getElementById("current_Day").innerHTML = "Today is: " + what_Day[day.getDay()];


  var time = new Date();

  var hours = time.getHours();
  var what_Hours = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];

  var minutes = time.getMinutes();
  var what_Minutes = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","00"];

  var seconds = time.getSeconds();
  var what_Seconds = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","00"];

  document.getElementById("current_Time").innerHTML = "Current time is " + what_Hours[time.getHours()] + ":" + what_Minutes[time.getMinutes()] + ":" + what_Seconds[time.getSeconds()];
}

//Kallar på funtionen
today_Date();


//Nedräknare
/*(function (){

"use strict";

var countdown = document.getElementById('countdown');
var counter = 5;

var counter_Interval = window.setInterval(function () {
  countdown.innerHTML = counter;

  counter--;

  if (counter === -1) {
    window.clearInterval(counter_Interval);
  }

}, 1000);
})();*/
