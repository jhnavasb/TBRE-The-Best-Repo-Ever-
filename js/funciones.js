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