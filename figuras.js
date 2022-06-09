// CÓDIGO DEL CUADRADO

console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
} 
/* console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm^2");*/

function areaCuadrado(lado) {
    return lado *lado;
}
/* console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");*/
console.groupEnd();

// CÓDIGO DEL TRIANGULO

console.group("Triangulos");
/* const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, "); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
/* console.log("El perímetro del triangulo es de: " + perimetroTriangulo + "cm");*/

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
/* console.log("La altura del triangulo es de: " + areaTriangulo + "cm^2");*/

console.groupEnd();

// CÓDIGO DEL CÍRCULO

console.group("Círculos");
/* const radioCirculo = 5;
console.log("El radio del círculo es de: " + radioCirculo + "cm"); */

function diametroCirculo(radio) {
    return radio * 2; 
} 
/* console.log("El díametro del círculo es de: " + diametroCirculo + "cm");*/

const pi = Math.PI;
console.log("El valor de PI es: " + pi + "cm");

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi 
}
/* console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm");*/

function areaCirculo(radio) {
    return (radio * radio) * pi; 
}
/* console.log("El área del círculo es de: " + areaCirculo + "cm^2");*/

console.groupEnd();