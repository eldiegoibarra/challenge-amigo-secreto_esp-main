// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []; // Guardar nombres

// Function para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Usando el DOM
    let nombre = input.value;
    console.log(nombre); // verificando nombres ingresan a la consola

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Mensaje cuando no hay input
        return;
    }

    nombres.push(nombre);
    input.value = ""; // Limpiar el input
    mostrarLista();
}

// Function para elegir un nombre al azar
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para sortear."); // Si no hay nombres y el usuario hace click en el boton sorteo...
        return;
    }
    let index = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent = "El amigos secreto es: " + nombres[index];
    console.log(index); // ver que posicion de los nombres es elegida (de 0 a X )
}

// Function para mostrar la lista
function mostrarLista() {
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}

// Resetear cuando la pagina recarga
window.onload = function () {
    nombres = [];
    document.getElementById("resultado").innerHTML = "";
};

