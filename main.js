let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let diaSemana = document.getElementById("dia");
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

setInterval(() => {
    horario()
}, 10);

function horario() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();
    let dia = days[fecha.getDay() - 1];

    mostrarContenido(horas, formatoNumero(hora));
    mostrarContenido(minutos, formatoNumero(minuto));
    mostrarContenido(segundos, formatoNumero(segundo));
    mostrarContenido(diaSemana, dia)
}

function mostrarContenido(a, b) {
    a.innerHTML = b;
}

function formatoNumero(numero) {
    return (numero < 10 ? numero.toString().padStart(2, 0) : numero);
}