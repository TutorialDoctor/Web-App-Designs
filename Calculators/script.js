function add(){
  x = Number(document.getElementById("x").value);
  y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x+y
}

function subtract(){
  x = Number(document.getElementById("x").value);
  y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x-y
}

function multiply(){
  x = Number(document.getElementById("x").value);
  y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x*y
}

function divide(){
  x = Number(document.getElementById("x").value);
  y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x/y
}

function remainder(){
  x = Number(document.getElementById("x").value);
  y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x%y
}

function power(){
  x = Number(document.getElementById("x").value);
  y = Number(document.getElementById("y").value);
  document.getElementById("output").innerHTML=x**y
}

function concat(){
  x = document.getElementById("s1").value;
  y = document.getElementById("s2").value;
  document.getElementById("concatch").innerHTML=x+" "+y
}

function dToC(){
  temp = document.getElementById("temp").value;
  document.getElementById("temperature").innerHTML=(temp-32)*.5556
}

function cToD(){
  temp = document.getElementById("temp").value;
  document.getElementById("temperature").innerHTML=(temp*1.8)+32
}