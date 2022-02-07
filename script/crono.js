let s = 00
let mi = 00
let mil = 00
let contar;

function zero(numero){
    if(numero < 10){
        return (numero = "0"+numero)
    } else {
        return numero
    }
}
function iniciar(){ //botao de inicio
    contar = setInterval(contando, 10)
    document.querySelector(".title").style.color = "#0f0"
}

function pausar(){ //botao para pausar
    clearInterval(contar)
    document.querySelector(".title").style.color = "#f00"
}

function parar(){ //botao para parar
    clearInterval(contar)
    s=0
    min=0
    mil=0
    document.querySelector(".title").innerHTML = "00:00:00"
    document.querySelector(".title").style.color = "#000"
}
function contando(){
    mil++
    if(mil == 100){
        s++
        mil = 0
    } else if(s == 60){
        mi++
        s = 0
    }
    document.querySelector(".title").innerHTML = `${zero(mi)}:${zero(s)}:${zero(mil)}` 
}