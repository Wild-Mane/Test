// Rekursif
function hapusRekursifHelper(n) {
  if (n === 0) return;
  hapusRekursifHelper(n - 1);
}

function hapusRekursif() {
  const total = Number(document.getElementById("rekursifInput").value);

  const start = performance.now();
  hapusRekursifHelper(total);
  const end = performance.now();

  document.getElementById("rekursifTime").innerText =
    "Waktu: " + (end - start).toFixed(4) + " ms";
}

// Iteratif
function hapusIteratif() {
  const total = Number(document.getElementById("iteratifInput").value);

  const start = performance.now();
  for (let i = total; i > 0; i--) {}
  const end = performance.now();

  document.getElementById("iteratifTime").innerText =
    "Waktu: " + (end - start).toFixed(4) + " ms";
}
