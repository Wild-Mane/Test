let rekursifTime = 0;
let iteratifTime = 0;

function hapusRekursifHelper(n) {
  if (n === 0) return;
  hapusRekursifHelper(n - 1);
}

function hapusRekursif() {
  const total = Number(document.getElementById("rekursifTotal").value);
  const start = performance.now();
  hapusRekursifHelper(total);
  rekursifTime = performance.now() - start;
  updateChart();
}

function hapusIteratif() {
  const total = Number(document.getElementById("iteratifTotal").value);
  const start = performance.now();
  for (let i = total; i > 0; i--) {}
  iteratifTime = performance.now() - start;
  updateChart();
}

const ctx = document.getElementById("chart");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Rekursif", "Iteratif"],
    datasets: [{
      label: "Execution Time (ms)",
      data: [0, 0],
      backgroundColor: ["blue", "red"]
    }]
  }
});

function updateChart() {
  chart.data.datasets[0].data = [rekursifTime, iteratifTime];
  chart.update();
}

function testJS() {
  alert("JavaScript berhasil terhubung!");
}
