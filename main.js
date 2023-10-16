let jugada_n_1 = ""
let jugador_n_2 =""
const agregarJugada=(valor,jugador)=>{

    if (jugador === "jugador_1") {
        jugada_n_1 = valor
    } else if (jugador === "jugador_2") {
        jugador_n_2 = valor

    }
    remarcar(valor,jugador)
    ganar()
}
const remarcar=(valor,jugador)=>{
    if (valor ==="tijera" && jugador === "jugador_1") {
        document.getElementById('id-tijera').classList.toggle('selecionada');
        document.getElementById('id-paper').classList.remove('selecionada');
        document.getElementById('id-rock').classList.remove('selecionada');
    }
    if (valor ==="rock" && jugador === "jugador_1") {
        document.getElementById('id-rock').classList.toggle('selecionada');
        document.getElementById('id-paper').classList.remove('selecionada');
        document.getElementById('id-tijera').classList.remove('selecionada');
    }
    if (valor ==="paper" && jugador === "jugador_1") {
        document.getElementById('id-paper').classList.toggle('selecionada');
        document.getElementById('id-rock').classList.remove('selecionada');
        document.getElementById('id-tijera').classList.remove('selecionada');
    }
    if (valor ==="tijera" && jugador === "jugador_2") {
        document.getElementById('id-n2-tijera').classList.toggle('selecionada-n-2');
        document.getElementById('id-n2-paper').classList.remove('selecionada-n-2');
        document.getElementById('id-n2-rock').classList.remove('selecionada-n-2');
    }
    if (valor ==="rock" && jugador === "jugador_2") {
        document.getElementById('id-n2-rock').classList.toggle('selecionada-n-2');
        document.getElementById('id-n2-paper').classList.remove('selecionada-n-2');
        document.getElementById('id-n2-tijera').classList.remove('selecionada-n-2');
    }
    if (valor ==="paper" && jugador === "jugador_2") {
        document.getElementById('id-n2-paper').classList.toggle('selecionada-n-2');
        document.getElementById('id-n2-rock').classList.remove('selecionada-n-2');
        document.getElementById('id-n2-tijera').classList.remove('selecionada-n-2');
    }


}
const borrar=()=>{

 
    jugada_n_1 = ""
  
    jugador_n_2 = ""
    document.getElementById(`id-n2-tijera`).classList.remove('selecionada-n-2');
    document.getElementById(`id-n2-paper`).classList.remove('selecionada-n-2');
    document.getElementById(`id-n2-rock`).classList.remove('selecionada-n-2');
    document.getElementById(`id-tijera`).classList.remove('selecionada');
    document.getElementById(`id-paper`).classList.remove('selecionada');
    document.getElementById(`id-rock`).classList.remove('selecionada');
}
const ganar =()=>{

    if (jugada_n_1 ==="tijera") {
     if (jugador_n_2==="tijera")  { mostrarResultado("Empate")  }   
     if (jugador_n_2==="rock") {mostrarResultado("Gano el jugador N 2") }   
     if (jugador_n_2==="paper") {mostrarResultado("Gano el jugador N 1") }   
     }
    if (jugada_n_1 ==="paper") {
        if (jugador_n_2==="tijera") {mostrarResultado("Gano el jugador N 2") }   
        if (jugador_n_2==="rock") {mostrarResultado("Gano el jugador N 1") }   
        if (jugador_n_2==="paper") {mostrarResultado("Empate") }   
       }
       if (jugada_n_1 ==="rock") {
        if (jugador_n_2==="tijera") {mostrarResultado("Gano el jugador N 1") }   
        if (jugador_n_2==="rock") {mostrarResultado("Empate") }   
        if (jugador_n_2==="paper") {mostrarResultado("Gano el jugador N 2") }   
       }
     

    }
const mostrarResultado =(resultado)=>{
    mostrarResultadodiv = document.getElementById("mostrarResultado")
    // document.getElementById(`id-n2-${jugador_n_2}`).classList.add('selecionada-n-2');
    mostrarResultadodiv.innerHTML = ` <h2 class="resultado">${resultado}</h2>`
    borrar()
   
}
const start=()=>{
    document.getElementById("tijera").addEventListener("click",()=>agregarJugada("tijera","jugador_1"))
    document.getElementById("paper").addEventListener("click",()=>agregarJugada("paper","jugador_1"))
    document.getElementById("rock").addEventListener("click",()=>agregarJugada("rock","jugador_1"))
    document.getElementById("tijera_2").addEventListener("click",()=>agregarJugada("tijera","jugador_2"))
    document.getElementById("paper_2").addEventListener("click",()=>agregarJugada("paper","jugador_2"))
    document.getElementById("rock_2").addEventListener("click",()=>agregarJugada("rock","jugador_2"))


}


window.onload = start