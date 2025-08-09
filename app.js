// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function addFriend() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }else{
        if (amigos.includes(nombre)) {
            alert("El nombre ya existe en la lista.");
            return;
        } else{
        amigos.push(nombre);
        ingresarNombre.value = ""; // Limpiar el campo de entrada
        console.log(`Tienes ${amigos.length} amigos.`);
        console.log("Amigo agregado:", nombre);
        }
    }


   

}