var nota1html = +prompt("Ingrese la nota 1 de HMTL", "")
var nota2html = +prompt("Ingrese la nota 2 de HMTL", "")
var nota3html = +prompt("Ingrese la nota 3 de HMTL", "")
var phtml=(nota1html+nota2html+nota3html)/3;
var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");
var promediohtml = document.getElementById("promediohtml");

html1.innerHTML = nota1html; 
html2.innerHTML = nota2html; 
html3.innerHTML = nota3html; 
promediohtml.innerHTML=phtml;


var nota1css = +prompt("Ingrese la nota 1 de CSS", "")
var nota2css = +prompt("Ingrese la nota 2 de CSS", "")
var nota3css = +prompt("Ingrese la nota 3 de CSS", "")
var pcss=(nota1css+nota2css+nota3css)/3;
var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");
var promediocss = document.getElementById("promediocss");

css1.innerHTML = nota1css; 
css2.innerHTML = nota2css; 
css3.innerHTML = nota3css; 
promediocss.innerHTML=pcss;

var nota1js = +prompt("Ingrese la nota 1 de JS", "")
var nota2js = +prompt("Ingrese la nota 2 de JS", "")
var nota3js = +prompt("Ingrese la nota 3 de JS", "")
var pjs=(nota1js+nota2js+nota3js)/3;
var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");60
var js3 = document.getElementById("js3");
var promediojs = document.getElementById("promediojs");

js1.innerHTML = nota1js; 
js2.innerHTML = nota2js;
js3.innerHTML = nota3js; 
promediojs.innerHTML=pjs;
