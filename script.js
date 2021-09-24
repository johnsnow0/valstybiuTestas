

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function registracija() {
    document.getElementById("pradinis").innerHTML = "display:none";
    document.getElementById("rekvizitai").innerHTML = "display:block";
  }

var modal = document.getElementById("rekvizitai");

var btn = document.getElementById("regBut");

btn.onclick = function(){
    pradinis.style.display="none";
    rekvizitai.style.display="block";
}
var modal = document.getElementById("testas");

var testBtn = document.getElementById("testBut");

var taimeris = document.getElementById("taimeris");

testBtn.onclick = function(){
        rekvizitai.style.display="none";
        testas.style.display="block";
        taimeris.style.display="block"
}