// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo() {
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
        nombre.value = ""; // Limpiar el campo de entrada
        console.log(`Tienes ${amigos.length} amigos.`);
        console.log("Amigo agregado:", nombre);
        actualizarLista();
        limpiarEntrada();        
        }
        }
    }   


    function limpiarEntrada() {
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    }


    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpiar la lista actual
        amigos.forEach(function(amigo) {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }else{
            let aleatorioAmigo = amigos[Math.floor(Math.random() * amigos.length)];
            console.log(amigos);
            console.log(aleatorioAmigo);
            console.log("Amigo sorteado:", aleatorioAmigo);
            let resultado = document.getElementById("resultado");
            resultado.textContent = `El amigo sorteado es: ${aleatorioAmigo}`;
        }
    }


   

