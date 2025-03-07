// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim(); // usando DOM para extraer la informacion desde HTML
    console.log(nombre); // revisando si los nombres se guardan en la consola

    if (nombre === ""){
        alert("Por favor ingresa un nombre válido."); // Alerta si no hay nombre ingresado
        return;
    }

    let losNombres = JSON.parse(localStorage.getItem("losNombres")) || []; // Para los nombres agregados
    losNombres.push(nombre); // agregar nuevo nombre
    localStorage.setItem("losNombres", JSON.stringify(losNombres)); // Guarda y actualiza la lista 
     document.getElementById("amigo").value = ""; // limpia la caja
    listaAmigos(); // Update the list on screen
   // alert("Nombre guardado") -  opcional

}

function listaAmigos() {
    let losNombres = JSON.parse(localStorage.getItem("losNombres"))
}
