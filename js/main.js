// JavaScript Document

function handleSubmit() {

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
const tiposHabitaciones = ["Suite", "Exclusive", "Superior"]

do {
  const busqueda = prompt("Ingrese su habitación")
  const resultados = tiposHabitaciones.filter(habitacion => habitacion === busqueda)

  if (resultados.length > 0) {
        valid = true
        alert("La habitación seleccionada es " + resultados.join(","))
                            } 
  else {
    alert("El dato ingresado no corresponde con una de nuestra selección de habitaciones. Ingrese un tipo de habitación válido.")
        }
    }while (!valid)
}



document.getElementById("reservas-form").addEventListener("submit",handleSubmit)

