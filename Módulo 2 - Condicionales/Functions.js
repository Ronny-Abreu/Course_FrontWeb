function mostrarInputs() {
    const seleccion = document.getElementById('ejercicio').value;
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = '';

    const input = (label, id, type = 'number') =>
    `<label>${label}<input type="${type}" id="${id}" required></label>`;

    switch (seleccion) {
    case '1': inputsDiv.innerHTML = input('Número:', 'num1'); break;
    case '2': inputsDiv.innerHTML = input('Edad:', 'edad'); break;
    case '3': inputsDiv.innerHTML = input('Número:', 'num3'); break;
    case '4': inputsDiv.innerHTML = input('Calificación (0-100):', 'calif'); break;
    case '5': inputsDiv.innerHTML = input('Número (1-7):', 'dia'); break;
    case '6': inputsDiv.innerHTML = input('Primer número:', 'numA') + input('Segundo número:', 'numB'); break;
    case '7': inputsDiv.innerHTML = input('Hora (0-24):', 'hora'); break;
    case '8': inputsDiv.innerHTML = input('Número:', 'rango'); break;
    case '9': inputsDiv.innerHTML = input('Número (1-12):', 'mes'); break;
    case '10': inputsDiv.innerHTML = input('Primer número:', 'mult1') + input('Segundo número:', 'mult2'); break;
    }
}

function ejecutarEjercicio() {
    const res = document.getElementById('resultado');
    const sel = document.getElementById('ejercicio').value;
    let msg = '';

    switch (sel) {
    case '1': {
        const n = parseFloat(document.getElementById('num1').value);
        msg = n > 0 ? 'Positivo' : n < 0 ? 'Negativo' : 'Cero';
        break;
    }
    case '2': {
        const edad = parseInt(document.getElementById('edad').value);
        msg = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
        break;
    }
    case '3': {
        const n = parseInt(document.getElementById('num3').value);
        msg = n % 2 === 0 ? 'Par' : 'Impar';
        break;
    }
    case '4': {
        const c = parseFloat(document.getElementById('calif').value);
        msg = c >= 60 ? 'Aprobado' : 'Reprobado';
        break;
    }
    case '5': {
        const d = parseInt(document.getElementById('dia').value);
        const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
        msg = dias[d-1] || 'Número inválido';
        break;
    }
    case '6': {
        const a = parseFloat(document.getElementById('numA').value);
        const b = parseFloat(document.getElementById('numB').value);
        msg = a > b ? 'El primero es mayor' : b > a ? 'El segundo es mayor' : 'Son iguales';
        break;
    }
    case '7': {
        const h = parseInt(document.getElementById('hora').value);
        if (h >= 0 && h <= 11) msg = 'Mañana';
        else if (h <= 18) msg = 'Tarde';
        else if (h <= 24) msg = 'Noche';
        else msg = 'Hora inválida';
        break;
    }
    case '8': {
        const n = parseFloat(document.getElementById('rango').value);
        msg = n >= 1 && n <= 100 ? 'Está en el rango' : 'Fuera del rango';
        break;
    }
    case '9': {
        const m = parseInt(document.getElementById('mes').value);
        const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        msg = meses[m-1] || 'Número inválido';
        break;
    }
    case '10': {
        const a = parseFloat(document.getElementById('mult1').value);
        const b = parseFloat(document.getElementById('mult2').value);
        const p = a * b;
        msg = p > 100 ? `Producto: ${p}` : 'Producto menor o igual a 100';
        break;
    }
    default: msg = 'Seleccione un ejercicio';
    }

    res.textContent = msg;
}