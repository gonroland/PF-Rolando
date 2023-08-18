// JavaScript Document

function handleSubmit(event) {
	
    event.preventDefault()
	
    var fllInput = document.getElementById("fecha-llegada")
    var fsaInput = document.getElementById("fecha-salida")
	
    var fsa = fsaInput.value
    var fll = fllInput.value
	
    var fechaLlegada = new Date(fll + " 00:00 -0300")
    var fechaSalida = new Date(fsa + " 00:00 -0300")
	
    async function validarFechas() {
        return new Promise((resolve, reject) => {
            if (fechaSalida < fechaLlegada) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Check-in date should be before the check-out date.'
                })
				
                fllInput.style.backgroundColor = "red"
                fsaInput.style.backgroundColor = "red"
                reject(new Error('Check-in date should be before the check-out date.'))
				
            } else {
				
                fllInput.style.backgroundColor = ""
                fsaInput.style.backgroundColor = ""
                resolve()
            }
        })
    }
	
    

	
    async function procesoPrincipal() {
        try {
			
            await validarFechas()

			
            var formato = { day: 'numeric', month: '2-digit', year: 'numeric' }
            var fechaLlegadaFormato = fechaLlegada.toLocaleDateString('es-ES', formato)
            var fechaSalidaFormato = fechaSalida.toLocaleDateString('es-ES', formato)
			
            localStorage.setItem('fechaArrival', JSON.stringify(fechaLlegadaFormato))
            localStorage.setItem('fechaExit', JSON.stringify(fechaSalidaFormato))
			
            var selectedIndex = hab.selectedIndex
            var habitacionSeleccionada = tiposHabitaciones[selectedIndex]
			
            localStorage.setItem('habitacion', JSON.stringify(habitacionSeleccionada))
            window.location.href = "roomRatesList.html"
        } catch (error) {
            console.error(error)
        }
    }
    
    procesoPrincipal()
}

        async function cargarTiposHabitaciones() {
            try {
                const response = await fetch('data.json')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                return data
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

            const tiposHabitaciones = await cargarTiposHabitaciones()
                var hab = document.getElementById("habitacion")

                hab.innerHTML = ""
                tiposHabitaciones.forEach((tipo, index) => {
                    var option = document.createElement("option")
                    option.value = index
                    option.text = tipo.nombre
                    hab.appendChild(option)
            })

document.getElementById("reservas-form").addEventListener("submit", handleSubmit)