// main

var engines = ["1", "2", "3","4", "5", "6", "7", "8"];


new Chart(document.getElementById('velocity'),
{"type":"line",
"data":{"labels":["January","February","March","April","May","June","July"],
"datasets":[{"label":"My First Dataset","data":[65,59,80,81,56,55,40],
"fill":false,"borderColor":"rgb(75, 192, 192)","lineTension":0.1}]},"options":{}});