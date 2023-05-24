const labels = ['01/01/2020', '03/06/2020','05/12/2020','07/11/2021','08/03/2023']
    const data1 = [6.5, 7.1, 6.9, 8.6, 7.3];
    const data2 = [153.2, 158.0, 178.4, 176.5, 157.9];
    const data3 = [231.5, 230.0, 290.1, 293.1, 220.1];
    const data4 = [6.1, 6.1, 6.4, 7.2, 6.6]
    
// Configuración de los datos para los gráficos de línea

const lineChartData1 = {
  labels: labels,
  datasets: [{
    label: 'Histórico Glóbulos Blancos',
    data: data1,
    borderColor: 'lightpink',
    fill: false
  }]
};

const lineChartData2 = {
  labels: labels,
  datasets: [{
    label: 'Histórico Trigliceridos',
    data: data2,
    borderColor: 'lightgreen',
    fill: false
  }]
};

// Configuración de los datos para los gráficos de barra
const barChartData1 = {
  labels: labels,
  datasets: [{
    label: 'Histórico Colesterol',
    data: data3,
    backgroundColor: 'gray'
  }]
};

const barChartData2 = {
  labels: labels,
  datasets: [{
    label: 'Histórico Proteínas Orina',
    data: data4,
    backgroundColor: 'lightblue'
  }]
};

// Crear los gráficos de línea
new Chart(document.getElementById('line-chart1'), {
  type: 'line',
  data: lineChartData1,
  options: {}
});

new Chart(document.getElementById('line-chart2'), {
  type: 'line',
  data: lineChartData2,
  options: {}
});

// Crear los gráficos de barra
new Chart(document.getElementById('bar-chart1'), {
  type: 'bar',
  data: barChartData1,
  options: {}
});

new Chart(document.getElementById('bar-chart2'), {
  type: 'bar',
  data: barChartData2,
  options: {}
});