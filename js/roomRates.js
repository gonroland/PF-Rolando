// JavaScript Document

// Obtener los datos de localStorage
var fechaLlegada = JSON.parse(localStorage.getItem('fechaArrival'));
var fechaSalida = JSON.parse(localStorage.getItem('fechaExit'));
var habitacionSeleccionada = JSON.parse(localStorage.getItem('habitacion'));

var roomRatesTableBody = document.getElementById('roomRatesTableBody');

var row = document.createElement('tr');
var arrivalCell = document.createElement('td');
var exitCell = document.createElement('td');
var roomTypeCell = document.createElement('td');

arrivalCell.textContent = fechaLlegada;
exitCell.textContent = fechaSalida;
roomTypeCell.textContent = habitacionSeleccionada.nombre;

row.appendChild(arrivalCell);
row.appendChild(exitCell);
row.appendChild(roomTypeCell);

roomRatesTableBody.appendChild(row);