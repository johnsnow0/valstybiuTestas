function registracija() {
  document.getElementById("pradinis").innerHTML = "display:none";
  document.getElementById("rekvizitai").innerHTML = "display:block";
}

var modal = document.getElementById("rekvizitai");

var btn = document.getElementById("regBut");

btn.onclick = function () {
  pradinis.style.display = "none";
  rekvizitai.style.display = "block";
}
var modal = document.getElementById("1klausimas");

var testBtn = document.getElementById("testBut");

var taimeris = document.getElementById("taimeris");

testBtn.onclick = function () {
  rekvizitai.style.display = "none";
  modal.style.display = "block";
  taimeris.style.display = "block"
}

function eitii(klausimas) {
  var kl1 = document.getElementById("1klausimas");
  var kl2 = document.getElementById("2klausimas");
  var kl3 = document.getElementById("3klausimas");
  var kl4 = document.getElementById("4klausimas");
  var kl5 = document.getElementById("5klausimas");
  var kl6 = document.getElementById("6klausimas");
  var kl7 = document.getElementById("7klausimas");
  var kl8 = document.getElementById("8klausimas");
  var kl9 = document.getElementById("9klausimas");
  var kl10 = document.getElementById("10klausimas");

  if (klausimas == 2) {
    kl1.style.display = "none"
    kl2.style.display = "block"
  }
  if (klausimas == 3) {
    kl2.style.display = "none"
    kl3.style.display = "block"
  }
  if (klausimas == 4) {
    kl3.style.display = "none"
    kl4.style.display = "block"
  }
  if (klausimas == 5) {
    kl4.style.display = "none"
    kl5.style.display = "block"
  }
  if (klausimas == 6) {
    kl5.style.display = "none"
    kl6.style.display = "block"
  }
  if (klausimas == 7) {
    kl6.style.display = "none"
    kl7.style.display = "block"
  }
  if (klausimas == 8) {
    kl7.style.display = "none"
    kl8.style.display = "block"
  }
  if (klausimas == 9) {
    kl8.style.display = "none"
    kl9.style.display = "block"
  }
  if (klausimas == 10) {
    kl9.style.display = "none"
    kl10.style.display = "block"
  }
}

function eitiAtgal(klausimas) {
  var kl1 = document.getElementById("1klausimas");
  var kl2 = document.getElementById("2klausimas");
  var kl3 = document.getElementById("3klausimas");
  var kl4 = document.getElementById("4klausimas");
  var kl5 = document.getElementById("5klausimas");
  var kl6 = document.getElementById("6klausimas");
  var kl7 = document.getElementById("7klausimas");
  var kl8 = document.getElementById("8klausimas");
  var kl9 = document.getElementById("9klausimas");
  var kl10 = document.getElementById("10klausimas");

  if (klausimas == 1) {
    kl1.style.display = "block"
    kl2.style.display = "none"
  }
  if (klausimas == 2) {
    kl2.style.display = "block"
    kl3.style.display = "none"
  }
  if (klausimas == 3) {
    kl3.style.display = "block"
    kl4.style.display = "none"
  }
  if (klausimas == 4) {
    kl4.style.display = "block"
    kl5.style.display = "none"
  }
  if (klausimas == 5) {
    kl5.style.display = "block"
    kl6.style.display = "none"
  }
  if (klausimas == 6) {
    kl6.style.display = "block"
    kl7.style.display = "none"
  }
  if (klausimas == 7) {
    kl7.style.display = "block"
    kl8.style.display = "none"
  }
  if (klausimas == 8) {
    kl8.style.display = "block"
    kl9.style.display = "none"
  }
  if (klausimas == 9) {
    kl9.style.display = "block"
    kl10.style.display = "none"
  }

  }

  function patikra() {
   var c=0;
   var q1=document.getElementById("1klausimas")
   if (q1=="Luanda") {c++}
  document.write(c)}
  