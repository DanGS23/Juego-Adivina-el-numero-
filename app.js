let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Funcion con parametros para asignar el texto en pantalla
function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarElementoTexto('p',`Acertaste el número secreto en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
        //Activa el botón nuevo juego cuando se acierta el número
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarElementoTexto('p','El número secreto es menor');
        }else{
            asignarElementoTexto('p','El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
}

//funcion para limpiar los input
function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

//Generar numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p','Ya se sortearon todos los numeros posibles');    
    } else{
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Funcion para reiniciar juego
function reiniciarJuego() {
    //limpiar caja o input
    limpiarInput();
    //Indicar mensaje de intervalo de números
    //Generar numero secreto
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del número secreto!');
    asignarElementoTexto('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

condicionesIniciales();

