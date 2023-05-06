// ELEMENTOS DE TIEMPO

const tiempoContador = document.querySelector('.tiempo-contador');
const tiempoTotal = document.querySelector('.tiempo-total');
const controles = document.querySelector('.controles');



// BOTONES

const btnSwitch = document.querySelector('button.continuar-pausar');
const btnEmpezar = document.querySelector('button.empezar');
const btnReiniciar = document.querySelector('button.reiniciar');



// VARIABLES GLOBALES

let activo = false;
let msTranscurridos = 0;
let reiniciado = true;
let horaDeInicio, temporizador, segundosTotales;



// FUNCIONES SECUNDARIAS

const pad = numero => (numero + '').length > 1 ? '' + numero : '0' + numero;

// No fue el mejor nombre... Basicamente transforma una cantidad 'x' de segundos al siguiente formato de hora:
// 21505 (number) => 5h 58m 25s (string)
function minutizar(segundosTot) {
    let horas = Math.floor((segundosTot / 60 / 60));
    let minutos = Math.floor((segundosTot / 60) % 60);
    let segundos = Math.floor((segundosTot) % 60);

    return `${horas === 0 ? '' : horas + 'h '}${minutos === 0 ? '' : minutos + 'm '}${segundos === 0 ? '' : segundos + 's'
        }`
}



// FUNCIONES PRINCIPALES

function empezar() {
    console.log("EMPEZAR");
    segundosTotales = Array.from(tiempoContador.children)
        .filter(elemento => elemento.classList.contains('tiempo'))
        .map(texto => texto.textContent * 1)
        .map((numero, indice) => numero * Math.pow(60, 2 - indice))
        .reduce((acumulador, actual) => acumulador + actual)

    if (segundosTotales === 0) return
    
    activo = true;
    reiniciado = false;

    tiempoTotal.textContent = minutizar(segundosTotales);

    horaDeInicio = new Date();
    temporizador = setInterval(actualizar, 1000);

    btnSwitch.textContent = "Pausar";

    controles.children[0].classList.add('no-mostrar');
    controles.children[1].classList.remove('no-mostrar');
    controles.children[2].classList.remove('no-mostrar');
}

function continuar() {
    console.log("CONTINUAR");

    // clearInterval(temporizador)

    segundosTotales = Array.from(tiempoContador.children)
        .filter(elemento => elemento.classList.contains('tiempo'))
        .map(texto => texto.textContent * 1)
        .map((numero, indice) => numero * Math.pow(60, 2 - indice))
        .reduce((acumulador, actual) => acumulador + actual)

    activo = !activo;

    horaDeInicio = new Date();
    temporizador = setInterval(actualizar, 1000);

    btnSwitch.textContent = "Pausar";
}

function switchx() {
    if (!activo) {
        continuar()
    } else {
        pausar("Continuar")
    }
}

function pausar(textoBoton) { 
    console.log("PAUSAR");

    activo = !activo;
    clearInterval(temporizador);
    msTranscurridos = 0;

    btnSwitch.textContent = textoBoton;
}

function reiniciar(necesitaSonido) { 
    if (necesitaSonido) (new Audio("success.wav")).play()

    clearInterval(temporizador);

    tiempoContador.innerHTML = `
        <span class="tiempo efecto horas">00</span><span>:</span>
        <span class="tiempo efecto minutos">00</span>:
        <span class="tiempo efecto segundos">00</span>
    `

    reiniciado = true;
    activo = false;

    controles.children[0].classList.remove('no-mostrar');
    controles.children[1].classList.add('no-mostrar');
    controles.children[2].classList.add('no-mostrar');
}

function actualizar() {
    msTranscurridos = new Date() - horaDeInicio;
    console.log(msTranscurridos)

    let diferencia = Math.ceil(segundosTotales - msTranscurridos / 1000);

    let horas = Math.floor((diferencia / 60 / 60));
    let minutos = Math.floor((diferencia / 60) % 60);
    let segundos = Math.floor((diferencia) % 60);

    tiempoContador.innerHTML = `
        <span class="tiempo horas ${horas === 0 ? "no-mostrar" : ""}">${pad(horas)}</span>
        <span class="${horas === 0 ? "no-mostrar" : ""}">:</span>
        <span class="tiempo minutos ${horas === 0 && minutos === 0 ? "no-mostrar" : ""}">${pad(minutos)}</span>
        <span class="${horas === 0 && minutos === 0 ? "no-mostrar" : ""}">:</span>
        <span class="tiempo segundos">${pad(segundos)}</span>
    `

    if (diferencia === 0) reiniciar(true)
}



// EVENTOS

btnEmpezar.addEventListener('click', empezar)
btnSwitch.addEventListener('click', switchx)
btnReiniciar.addEventListener('click', () => reiniciar(false))



// RUEDITA DEL RATON CAMBIANDO TIEMPO

function configuracionDeTiempo(e) {
    let value = e.target.textContent * 1;

    if (e.deltaY < 0) value++;
    else value--;

    value = value === 60 ? 0 : value;
    value = value === -1 ? 59 : value;

    e.target.textContent = pad(value)
}

function ruedaHandler(e) {
    configuracionDeTiempo(e);
}

tiempoContador.addEventListener('mouseover', (e) => {
    if (reiniciado && e.target.classList.contains('tiempo')) {
        e.target.addEventListener('wheel', ruedaHandler)
    }
})

tiempoContador.addEventListener('mouseout', (e) => {
    if (reiniciado && e.target.classList.contains('tiempo')) {
        e.target.removeEventListener('wheel', ruedaHandler)
    }
})
