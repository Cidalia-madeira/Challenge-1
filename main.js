// main

var engines = ['1', '2', '3','4', '5', '6', '7', '8'];



var ctx = document.getElementById('velocity').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
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
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
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
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(109, 91, 213)',
            borderWidth: 2.5,
            data: [0,6000,5500,5300],
            lineTension:0.5,
            borderJoinStyle:'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth:2,
            pointRadius:1,
            pointHitRadius:10

      //       data: {
		    //     datasets: [{
		    //         // This dataset appears on the first axis
		    //         yAxisID: 'first-y-axis'
		    //     }, {
		    //         // This dataset appears on the second axis
		    //         yAxisID: 'second-y-axis'
		        }]
		    },
		  //   options: {
		  //       scales: {
		  //           yAxes: [{
		  //               id: 'first-y-axis',
		  //               type: 'linear'
		  //           }, {
		  //               id: 'second-y-axis',
		  //               type: 'linear'
		  //           }]
		  //       }
		  //   }
	

    //     }]
    // },

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

Chart.defaults.global.defaultFontColor = "#fff"; 
Chart.defaults.global.defaultFontFamily = "D-Din";           
