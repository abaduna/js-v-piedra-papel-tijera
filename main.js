let jugada_n_1 = ""
let jugador_n_2 =""
const agregarJugada=(valor,jugador)=>{

    if (jugador === "jugador_1") {
        jugada_n_1 = valor

    } else if (jugador === "jugador_2") {
        jugador_n_2 = valor
        
    }


    ganar()
}
const borrar=()=>{

    if (jugada_n_1 !="") {
        jugada_n_1 = ""
    }
    if (jugador_n_2 !="") {
        jugador_n_2 = ""
    }

}
const ganar =()=>{

    if (jugada_n_1 ==="tijera") {
     if (jugador_n_2==="tijera")  { mostrarResultado("empate")  }   
     if (jugador_n_2==="rock") {mostrarResultado("gano el jugador n2") }   
     if (jugador_n_2==="paper") {mostrarResultado("gano el jugador n1") }   
     }
    if (jugada_n_1 ==="paper") {
        if (jugador_n_2==="tijera") {mostrarResultado("gano el jugador n2") }   
        if (jugador_n_2==="rock") {mostrarResultado("gano el jugador n1") }   
        if (jugador_n_2==="paper") {mostrarResultado("empate") }   
       }
       if (jugada_n_1 ==="rock") {
        if (jugador_n_2==="tijera") {mostrarResultado("gano el jugador n1") }   
        if (jugador_n_2==="rock") {mostrarResultado("empate") }   
        if (jugador_n_2==="paper") {mostrarResultado("gano el jugador n2") }   
       }


    }
const mostrarResultado =(resultado)=>{
    console.log(resultado)
    mostrarResultadodiv = document.getElementById("mostrarResultado")
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