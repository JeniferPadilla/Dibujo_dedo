// var teclas ={
//     UP:38,
//     DOWN:40,
//     LEFT:37,
//     RIGHT: 39
// }; //para crear variables con variables por dentro es asi con {} con jjs

// console.log(teclas);
//document.addEventListener("keydown", dibujarTeclado);//ketup sirve para guardar solo por tecla y no si se deja oprimida.

var estado = 0;
var colorcito= "blue";

var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;

document.addEventListener("mousedown", clickMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);


dibujarLinea("yellow", 0, 0, 300, 0, papel);
dibujarLinea("yellow", 300, 0, 300, 300, papel);
dibujarLinea("yellow", 300, 300, 0, 300, papel);
dibujarLinea("yellow", 0, 300, 0, 0, papel);

function dibujarMouse(evento){
    
    if(estado==1){
        dibujarLinea(colorcito,x,y,evento.layerX,evento.layerY,papel);
    }
    x = evento.layerX;
y = evento.layerY;

}

function clickMouse(evento){
estado=1;
x=evento.layerX;
y=evento.layerY;

}
function soltarMouse(evento){
estado= 0;
x=evento.layerX;
y=evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfin, yfin, lienzo) {
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth=3; //para la linea ancha
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
  }


// function dibujarTeclado(evento){

// var colorcito= "blue";
// var movi= 5;

// switch (evento.keyCode) //funciona solo para comparar
//  {
//   case teclas.UP:
//     dibujarLinea(colorcito, x, y, x, y - movi, papel);
//     y = y - movi;
//     break;
//   case teclas.DOWN:
//     dibujarLinea(colorcito, x, y, x, y + movi,papel);
//     y = y + movi;
//     break;
//   case teclas.LEFT:
//     dibujarLinea(colorcito, x, y, x - movi, y, papel);
//     x = x - movi;
//     break;
//   case teclas.RIGHT:
//     dibujarLinea(colorcito, x, y, x + movi, y,papel);
//     x = x + movi;
//     break;
//   default:
//     break;
// }
// console.log(evento.keyCode);//key code para obtener el numero que tiene cada tecla

//}