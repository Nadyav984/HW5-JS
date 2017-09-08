function ButtonFunction() {
  var txt;
  if (confirm("Do you want to check my HomeWork?") == true) {
      txt = "";
      alert("Choose the task")
  } else {
      txt = "Sorry, I can't show you my HW!";
  }
  document.getElementById("demo").innerHTML = txt;
}
// Tsk 1
document.getElementById('content1').onclick=()=>{
  var person = prompt("Pleas, enter your name" , "Nadia");
  var event = prompt("Do you have to meet with someone?" , "Ostap");
  var time = "20:00";
  var date = "September/30/2020";
  var day = "Sunday";
  var place = "PANORAMA";
  function resultTsk1() {
      return (person + " have a meeting with " + event + " in " + place + " on " + day + " " + date + " at " + time);
  }

  document.getElementById('cnt1').innerHTML=resultTsk1();
};

// Tsk2
document.getElementById('content2').onclick=()=>{
const USD = 26.60;
const EUR = 31.70;
const EURvsUSD = 1.19;


var usdInput = prompt ("How much $ you have", "1");
var eurInput = prompt ("How much € you have", "1");

function resultMoneyCalc() {
if (isNaN(+usdInput) || isNaN(+eurInput)) { 
alert("Not a number") 
} else {
 return (eurInput + " Euros are equal " + eurInput * EUR + " UAH, "+
    usdInput + " Dollars are equal " + usdInput * USD + " UAH, "  +
    "one Euro is equal " + EURvsUSD + " Dollars.");
}
}
console.log(resultMoneyCalc());
document.getElementById('cnt2').innerHTML=resultMoneyCalc();
}
