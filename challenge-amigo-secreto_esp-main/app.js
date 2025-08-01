
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// lista de amigos secretos
let amigoSecreto = [];

//funcion para agregar un amigo secreto
function agregarAmigo() {
    let nombreDigitado = document.getElementById('amigo').value;
    
    if (!nombreDigitado) {
        alert('Debes ingresar un nombre');
        return;
    }
    // Solo letras y espacios (incluye tildes y ñ)
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombreDigitado)) {
        asignarTexto ('H2', 'Solo se permiten letras, sin números ni símbolos, Digite de nuevo el nombre.');
        limpiarCaja();
        return;
    }else{
         amigoSecreto.push(nombreDigitado);
         mostrarAmigos();
         limpiarCaja();
         // Mostrar la lista
        console.log('Lista de amigos:', amigoSecreto)
    }
}

//funcion para limiíar la caja de texto
function limpiarCaja() {
        document.getElementById('amigo').value = '';
}

//funcion para asignar texto a un elemento HTML
function asignarTexto(Elemento , Texto) {
    let ElementoHTML = document.querySelector(Elemento);
    ElementoHTML.innerHTML = Texto ;    
}

//funcion para mostrar a los amigos en la pagina 
function mostrarAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';


    amigoSecreto.forEach(function(amigo) {
        let Li = document.createElement('li');
        Li.textContent = amigo;
        listaDeAmigos.appendChild(Li);
    });
}

//funcion amigo aleatorio
function amigoAleatorio(){
    if (amigoSecreto.length === 0){
        alert('No hay amigos para sortear');
        return;
    }else {
        let indice = Math.floor(Math.random()*amigoSecreto.length);
        let nombreSeleccionado = amigoSecreto[indice];
        asignarTexto('H2', `Tu amigo secreto es: ${nombreSeleccionado}`);
        eliminarAmigo(indice);
        mostrarAmigos();
        console.log('actualizacion de la array:', amigoSecreto);
    }
}

// funcion eliminar amigo en la array
function eliminarAmigo(indice) {
   amigoSecreto.splice(indice, 1);
}

