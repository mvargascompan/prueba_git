var i 
for (i=1;i<4;i++) { 
    var nota1html = +prompt("Ingrese la nota " + i + " de HMTL", "")   	
    var html1 = document.getElementById("html1");
    html1.innerHTML = nota1html; 
}

