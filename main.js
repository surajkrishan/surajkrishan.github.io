    let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';


    let massPopChart = new Chart(myChart, {
      type: 'radar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ['0', 'JavaScript', 'Typescript', 'React', 'Node.js', 'Express.js','GraphQL', 'REST API', 'MongoDB', 'Bash Scripting','Azure Cloud', 'AWS','Serverless', '& many more'],
        datasets: [{
          label: 'Skills',
          data: [
            0,
            90,
            80,
            80,
           80,
            80,
              80,
            80,
              80,
            80,
              80,
            80,
              80,
            80,
            100
          ],

          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 45, 45, 0.6)',
            'rgba(255, 21, 113, 0.6)',
            'rgba(54, 162, 89, 0.6)',
            'rgba(255, 206, 76, 0.6)',
            'rgba(75, 192, 34, 0.6)',
            'rgba(153, 102, 21, 0.6)',
            'rgba(255, 159, 67, 0.6)'
          ],
          borderWidth: 2,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000'

        }]
      },
      options: {
        tooltips: {
          enabled: true
        },
      }
    });
