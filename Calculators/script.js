function add(){
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x+y
}

function subtract(){
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x-y
}

function multiply(){
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x*y
}

function divide(){
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x/y
}

function remainder(){
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x%y
}

function power(){
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x**y
}

function concat(){
  var x = document.getElementById("s1").value;
  var y = document.getElementById("s2").value;
  document.getElementById("concatch").innerHTML=x+" "+y
}

function dToC(){
  var temp = document.getElementById("temp").value;
  document.getElementById("temperature").innerHTML=(temp-32)*.5556
}

function cToD(){
  var temp = document.getElementById("temp").value;
  document.getElementById("temperature").innerHTML=(temp*1.8)+32
}

function membership(){
  var min = parseInt(document.getElementById("min").value,10);
  var val = parseInt(document.getElementById("val").value,10);
  var max = parseInt(document.getElementById("max").value,10);
  var top = val-min
  var bottom = max-min
  var M = top/bottom
  document.getElementById("membership").innerHTML=M
}