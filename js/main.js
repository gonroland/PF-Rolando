// JavaScript Document

function handleSubmit(evento) {

event.preventDefault()
var fllInput = document.getElementById("fecha-llegada")
var fsaInput = document.getElementById("fecha-salida")

var fsa = fsaInput.value;
var fll = fllInput.value;
    
var fechaLlegada = new Date(fll + " 00:00 -0300")
var fechaSalida = new Date(fsa + " 00:00 -0300")

if (fechaSalida < fechaLlegada) {
  alert("La fecha de salida debe ser posterior a la fecha de llegada.")
  fllInput.style.backgroundColor = "red"
  fsaInput.style.backgroundColor = "red"
    return false
        }
    else {
        fllInput.style.backgroundColor = ""
        fsaInput.style.backgroundColor = ""
        alert("Usted ingresará al hotel el día " + fechaLlegada.toLocaleDateString())
        alert("Usted saldrá del hotel el día " + fechaSalida.toLocaleDateString())
    }

//var hab = document.getElementById("habitacion")
//alert("Usted eligió la habitación " + hab.options[hab.selectedIndex].text)

let valid = false

do {
    let habitacionIngresada = prompt("Ingresar Habitación")
    if (!isNaN(parseInt(habitacionIngresada))) {
        alert("El dato ingresado es erróneo. Ingrese un tipo de habitación")
        }
    else {
        valid = true
        alert("La habitación seleccionada es " + habitacionIngresada)
        }
    }while(!valid)
}

document.getElementById("reservas-form").addEventListener("submit",handleSubmit)

