// Practica #3 – Bucles 
// Realizar diferentes ejercicios utilizando bucles. 
// 1.  Imprimir números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2.  Suma de los primeros 5 números.
let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma += i;
}
console.log("La suma de los primeros 5 números es:", suma);


// 3.  Contar hasta 5.
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}

// 4.  Imprimir números pares del 2 al 10.
let numero = 2;
while (numero <= 10) {
    console.log(numero);
    numero += 2;
}

// 5.  Imprimir "Hola" 3 veces. 
let veces = 0;
do {
    console.log("Hola");
    veces++;
} while (veces < 3);

// 6.  Contar regresivamente del 5 al 1.
let n = 5;
do {
    console.log(n);
    n--;
} while (n >= 1);
