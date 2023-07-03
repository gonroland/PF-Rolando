// JavaScript Document

function handleSubmit(evento) {

event.preventDefault()
var fll = document.getElementById("fecha-llegada").value
var fsa = document.getElementById("fecha-salida").value

var fechaLlegada = new Date(fll + " 00:00 -0300")
var fechaSalida = new Date(fsa + " 00:00 -0300")

if (fechaSalida < fechaLlegada) {
  alert("La fecha de salida debe ser posterior a la fecha de llegada.")
    return false
        }
    else {
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

