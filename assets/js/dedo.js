let miCan = document.querySelector('#pizarra');
let lineas = [];
let correX=0;
let correY=0;
let pintarL=false;

let nuevaposX=0;
let nuevaposY=0;

let posicion = miCan.getBoundingClientRect()
correX= posicion.x;
correY=posicion.y;

miCan.width =500;
miCan.heigth= 500;

function empDibujo(){
pintarL=true;
lineas.push([]);
};

function guardarL(){
    lineas[lineas.length-1].push({
        x:nuevaposX,
        y:nuevaposY
    });
}

function dibujarLinea(evento){

    evento.preventDefault();

    if(pintarL){
        let ctx =miCan.getContext('2d')
        // estilos de la linea
        ctx.lineJoin = ctx.LineCap='round';
        ctx.lineWidth= 8;
        // color de la linea
        ctx.strokeStyle ='#fff';
        // marca el nuevo punto
        if(evento.changedTouches == undefined){
            // version raton 
            nuevaposX=evento.layerX;
            nuevaposY=evento.layerY;
        }else{
            //version touch, pantalla tactil
            nuevaposX=evento.changedTouches[0].pageX - correX;
            nuevaposY=evento.changedTouches[0].pageY - correY;
        }
        // guardar linea
        guardarL();
        //pone las todas las lineas guardadas
        ctx.beginPath();
        lineas.forEach(function(segmento){
            ctx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function(punto, index){
                ctx.lineTo(punto.x, punto.y);
            });
        });
        ctx.stroke();
    }

}

function pararD(){
    pintarL= false;
    guardarL();
}

miCan.addEventListener('mousedown', empDibujo, false);
miCan.addEventListener('mousemove', dibujarLinea, false);
miCan.addEventListener('mouseup', pararD, false);

miCan.addEventListener('touchstart', empDibujo, false);
miCan.addEventListener('touchmove',dibujarLinea, false);