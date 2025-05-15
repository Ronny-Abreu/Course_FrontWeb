function obtenerNumeros() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return [num1, num2];
}

function sumar() {
  const [a, b] = obtenerNumeros();
  alert("Resultado: " + (a + b));
}

function restar() {
  const [a, b] = obtenerNumeros();
  alert("Resultado: " + (a - b));
}

function multiplicar() {
  const [a, b] = obtenerNumeros();
  alert("Resultado: " + (a * b));
}

function dividir() {
  const [a, b] = obtenerNumeros();
  if (b === 0) {
    alert("No se puede dividir por cero.");
  } else {
    alert("Resultado: " + (a / b));
  }
}

