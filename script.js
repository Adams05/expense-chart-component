const chart = document.getElementById('chart');
const days = document.getElementById('days');

// Fetch data
fetch('data.json')
.then(response => response.json())
.then(data => {
 data.forEach(function (item) {
   console.log(item.amount)

   const h5 = document.createElement('h5');
   const content = document.createTextNode(item.day);
   h5.appendChild(content)
   chart.appendChild(h5)
   
 })
})