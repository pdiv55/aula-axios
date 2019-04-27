const stockInfo  = axios.create({
    baseURL: 'https://api.iextrading.com/1.0/stock/',
  });
  
  const stockTicket = "once";
  
  stockInfo.get(`${stockTicket}/chart`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
  });

  stockInfo.get(`${stockTicket}/chart`)
    .then(response => {
      printTheChart(response.data);
    })
    .catch( error => {
      console.log(error);
  });

const printTheChart = (stockData => {
  const stockLabels = stockData.map( element => element.date);
  const stockPrice = stockData.map( element => element.close);
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(0, 0, 255)',
        data: stockPrice,
      }]
    }
  });
});