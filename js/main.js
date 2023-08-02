// JavaScript Document

function handleSubmit() {

//Seleccion de fecha de llegada y salida

event.preventDefault()
var fllInput = document.getElementById("fecha-llegada")
var fsaInput = document.getElementById("fecha-salida")

var fsa = fsaInput.value;
var fll = fllInput.value;
    
var fechaLlegada = new Date(fll + " 00:00 -0300")
var fechaSalida = new Date(fsa + " 00:00 -0300")

if (fechaSalida < fechaLlegada) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: 'Check-in date should be before the check-out date.'
    })
  fllInput.style.backgroundColor = "red"
  fsaInput.style.backgroundColor = "red"
    return false
        }
    else {
        fllInput.style.backgroundColor = ""
        fsaInput.style.backgroundColor = ""
    }
    
var formato = { day: 'numeric', month: '2-digit', year: 'numeric' };
var fechaLlegadaFormato = fechaLlegada.toLocaleDateString('es-ES', formato);
var fechaSalidaFormato = fechaSalida.toLocaleDateString('es-ES', formato);

localStorage.setItem('fechaArrival', JSON.stringify(fechaLlegadaFormato))
localStorage.setItem('fechaExit', JSON.stringify(fechaSalidaFormato))

//Seleccion de Habitacion

const tiposHabitaciones = [
  { nombre: "Superior"},
  { nombre: "Exclusive"},
  { nombre: "Suite"}
]

var hab = document.getElementById("habitacion")
var selectedIndex = hab.selectedIndex

var habitacionSeleccionada = tiposHabitaciones[selectedIndex]

localStorage.setItem('habitacion', JSON.stringify(habitacionSeleccionada))

window.location.href = "roomRatesList.html";
    
}

document.getElementById("reservas-form").addEventListener("submit",handleSubmit)
