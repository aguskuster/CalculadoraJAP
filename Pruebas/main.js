function init (){
    var resultado= document.getElementById("resultado");
    var uno=document.getElementById("1");
    var dos=document.getElementById("2");
    var tres=document.getElementById("3");
    var cuatro=document.getElementById("4");
    var cinco=document.getElementById("5");
    var seis=document.getElementById("6");
    var siete=document.getElementById("7");
    var ocho=document.getElementById("8");
    var nueve=document.getElementById("9");
    var cero=document.getElementById("0");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var divi=document.getElementById("divi");
    var multi=document.getElementById("multi");
    var igual=document.getElementById("igual");
    var borrar=document.getElementById("borrar");
    var a ;
    var b;
    var simbolo;

    //Eventos

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1"
    } 
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent+"2"
    } 
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent+"3"
    } 
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent+"4"
    } 
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent+"5"
    } 
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent+"6"
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent+"7"
    } 
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent+"8"
    } 
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent+"9"
    } 
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent+"0"
    } 
    borrar.onclick= function(e) {
        resetear();
    }

    suma.onclick= function(e) {
        a=resultado.textContent
        simbolo="+"
        limpiar();  
    }
    resta.onclick= function(e) {
        a=resultado.textContent
        simbolo="-"
        limpiar();  
    }
    divi.onclick= function(e) {
        a=resultado.textContent
        simbolo="/"
        limpiar();  
    }
    multi.onclick= function(e) {
        a=resultado.textContent
        simbolo="*"
        limpiar();  
    }
    igual.onclick= function(e){
        b= resultado.textContent
        resolver();
    }


function limpiar(){
 resultado.textContent=" ";
}
function resetear(){
    resultado.textContent=" ";
    a=0
    b=0
    simbol=" "
}

function resolver(){
    var res= 0;
    
    switch(simbolo){
        case "+":
                    res= parseFloat(a) + parseFloat(b)
                    break;
        case "-":
                    res= parseFloat(a) - parseFloat(b)
                    break;
        case "*":
                    res= parseFloat(a) * parseFloat(b)
                    break;
        case "/":
                    res= parseFloat(a) / parseFloat(b)
                    break;
            
    }
    resetear();
    resultado.textContent=res; 
}

}