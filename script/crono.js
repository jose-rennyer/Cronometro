let s = 00
let mi = 00
let mil = 00
let contar;
let start = document.querySelector(".start_button_1")
let pause = document.querySelector(".pause_button_2")
let stop = document.querySelector(".stop_button_3")

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
    start.style.display = "none"
}

function pausar(){ //botao para pausar
    clearInterval(contar)
    document.querySelector(".title").style.color = "#f00"
    start.style.display = "block"
}

function parar(){ //botao para parar
    clearInterval(contar)
    s=0
    mi=0
    mil=0
    document.querySelector(".title").innerHTML = "00:00:00"
    document.querySelector(".title").style.color = "#000"
    start.style.display = "block"
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

