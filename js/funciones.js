console.log("Hola Mundo!");
var numero1 = 10;
var numero2 = 7;
var resultado = numero1 + numero2;
console.log(resultado);
var cadena = "El resultado es: ";
console.log(cadena);
var resultado2 = cadena + resultado;
console.log(resultado2);
cadena = "Lorem \t ipsum dolor sit \"amet\", \n consectetur adipisicing elit.";
console.log(cadena);
var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(semana[5]);
for(var i = 0; i < 7; i++)
{
    console.log(semana[i]);
}
for(a in semana)
{
    console.log(semana[a]);
}
function sum(){
    var n1 = 2;
    var n2 = 3;
    var res = n1 + n2;
    console.log("la suma es: ", res)
}
sum()

var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";

for(i in letras)
{
    if(letras[i] == 'a')
    {
        break;
    }
    else
    {
        resultado += letras[i];
    }
}
console.log(resultado);
var parrafos = document.getElementsByTagName("p");
console.log(parrafos);
parrafos[1].innerText = "Nuevo texto";

var mimensaje = document.getElementById("mensaje");
mimensaje.style.background = "gray";
console.log(mimensaje);

function refrescarvalor()
{
    var entrada = document.getElementById("entrada");
    mimensaje.innerHTML = entrada.value;
}
