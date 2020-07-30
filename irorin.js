var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['Red', 'bule', 'Yellow'],
        datasets: [{
        type:'bar',
        data:[34, 31, 28],
        backgroundColor: [
            'raba(255, 99, 132, 0.2)',
            'raba(54, 162, 235, 0.2)',
            'raba(255, 206, 86, 0.2)',
        ]
    }
        
        
        ]
    },
    
});