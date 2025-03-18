const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

// Data penjualan
const data = [
  { name: 'Bayam', sales: 120 },
  { name: 'Wortel', sales: 90 },
  { name: 'Kubis', sales: 150 },
  { name: 'Brokoli', sales: 75 },
  { name: 'Kentang', sales: 180 }
];

// Warna batang
const colors = ['#4CAF50', '#FF9800', '#2196F3', '#FF5722', '#9C27B0'];

// Menggambar diagram batang
function drawBarChart(data) {
  const chartHeight = canvas.height - 50;
  const chartWidth = canvas.width - 50;
  const barWidth = chartWidth / data.length - 20;
  const maxSales = Math.max(...data.map(d => d.sales));
  
  // Sumbu y dan x
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(40, 10);
  ctx.lineTo(40, chartHeight);
  ctx.lineTo(chartWidth + 20, chartHeight);
  ctx.strokeStyle = "#000";
  ctx.stroke();

  // Batang dan label
  data.forEach((item, index) => {
    const barHeight = (item.sales / maxSales) * (chartHeight - 50);
    const x = 50 + index * (barWidth + 20);
    const y = chartHeight - barHeight;

    // Batang
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(x, y, barWidth, barHeight);

    // Label nama
    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.fillText(item.name, x + barWidth / 4, chartHeight + 20);

    // Label nilai
    ctx.fillText(item.sales, x + barWidth / 4, y - 5);
  });
}

drawBarChart(data);
