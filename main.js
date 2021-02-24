// main

var engines = ['1', '2', '3','4', '5', '6', '7', '8'];



var ctx = document.getElementById('velocity').getContext('2d');
let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = 'rgb(191,15,255,49%)';
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 8;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});

var myLineChart = new Chart(ctx, {
    type: 'line',

    // dataset
    data: {
        labels: [0,200, 600, 800],
        datasets: [{
        	label:'velocity',
        	fill:false,
            borderColor: 'rgb(109, 91, 213)',
            borderWidth: 2.5,
            data: [0,6000,5500,5300],
            lineTension:0.5,
            borderJoinStyle:'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth:2,
            pointRadius:1,
            pointHitRadius:10,
            shadow:true,
            shadowColor:'rgb(191,15,255,49%)'
		        }]
		    },
	
    // Configuration options 
    options: {
    	// responsive
    	responsive: true,
    	responsiveAnimationDuration: 0,
    	maintainAspectRatio: true,
    	// pixelratio
    	devicePixelRatio:window.devicePixelRatio,
    	// title
    	title: {
            display: false,
        },

        legend:{
        	display:false,

        },

        gridLines:{
            display:true,
        },

        beginAtZero: true,
        // maxTickslimit:11,
        // stepSize:5,
		    scales: {
		        yAxes: [{
		            ticks: {
		                max: 8000,
		                min: 2000,
		                stepSize: 2000
		            }
		        }]


		    }
		


    }


});     

Chart.defaults.global.defaultFontColor = "#fff"; 
Chart.defaults.global.defaultFontFamily = "D-Din";           

var ctx = document.getElementById('acceleration').getContext('2d');

var myLineChart = new Chart(ctx, {
    type: 'line',

    // dataset
    data: {
        labels: [0,100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        datasets: [{
        	label:'acceleration',
        	fill:false,
            borderColor: 'rgb(183, 209, 165)',
            borderWidth: 2.5,
            data: [0,3000,5500,5300,3000,3000,7000,6000,3000,3500,3000],
            lineTension:0.2,
            borderJoinStyle:'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth:2,
            pointRadius:1,
            pointHitRadius:10
		        }]
		    },
	
    // Configuration options 
    options: {
    	// responsive
    	responsive: true,
    	responsiveAnimationDuration: 0,
    	maintainAspectRatio: true,
    	// pixelratio
    	devicePixelRatio:window.devicePixelRatio,
    	// title
    	title: {
            display: false,
        },

        legend:{
        	display:false,

        },


        beginAtZero: true,
        // maxTickslimit:11,
        // stepSize:5,
		    scales: {
		        yAxes: [{
		            ticks: {
		                max: 8000,
		                min: 2000,
		                stepSize: 2000
		            }
		        }]
		    }
		


    }


});     

var ctx = document.getElementById('pressure').getContext('2d');

var myLineChart = new Chart(ctx, {
    type: 'line',

    // dataset
    data: {
        labels: [0,100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        datasets: [{
            label:'pressure',
            fill:false,
            borderColor: 'rgb(205, 165, 209)',
            borderWidth: 2.5,
            data: [3,5,3,3,3,3,6,3,5,3,3],
            lineTension:0.2,
            borderJoinStyle:'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth:2,
            pointRadius:1,
            pointHitRadius:10
                }]
            },
    
    // Configuration options 
    options: {
        // responsive
        responsive: true,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: true,
        // pixelratio
        devicePixelRatio:window.devicePixelRatio,
        // title
        title: {
            display: false,
        },

        legend:{
            display:false,

        },


        beginAtZero: true,
        // maxTickslimit:11,
        // stepSize:5,
            scales: {
                yAxes: [{
                    ticks: {
                        max: 8,
                        min: 2,
                        stepSize: 2
                    }
                }]
            }
        


    }


});     

var ctx = document.getElementById('engine1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [1 , 2, 3, 4 ],
        datasets: [{
            label: 'egine1',
            data: [4000, 5000, 4000, 7000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            maxBarThickness:20
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 8000,
                    min: 2000,
                    stepSize: 2000
                }
            }]
        }
    }
});

// var ctx = document.getElementById('engine2').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [1 , 2, 3, 4 ],
//         datasets: [{
//             label: 'egine2',
//             data: [4000, 5000, 4000, 7000],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             maxBarThickness:20
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     max: 8000,
//                     min: 2000,
//                     stepSize: 2000
//                 }
//             }]
//         }
//     }
// });

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var height = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (height >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }
}