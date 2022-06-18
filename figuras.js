//Codigo del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado*lado;
}
console.groupEnd();
//Codigo del cuadrado

//Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
} 
function areaTriangulo(base,altura){
    return (base*altura)/2;
} 
console.groupEnd(0);
//Codigo triangulo

//Codigo circulo
console.group("Circulo");
const pi = Math.PI;
function diametroCirculo(radio) {
    return radio*2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro*pi;
}
function areaCirculo(radio) {
    return (radio*radio)*pi;
}
console.groupEnd();
//Codigo circulo


//html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function alturaIsosceles(lado1,lado2,lado3){
    if(lado1 == lado2 ){
        altura= Math.sqrt(lado1*lado1-((lado3*lado3)/4)) ;
        return altura;
    }
    else if(lado1==lado3){
        altura= Math.sqrt(lado1*lado1-((lado2*lado2)/4)) ;
        return altura;
    }
    else if(lado2==lado3){
        altura= Math.sqrt(lado2*lado2-((lado1*lado1)/4)) ;
        return altura;
    }
    else{
        alert("No es un triangulo isosceles si no tiene 2 lados iguales")
    }
}

// ------------------------
function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("ladoTriangulo1");
    const value1 = lado1.value;
    const lado2 = document.getElementById("ladoTriangulo2");
    const value2 = lado2.value;
    const lado3 = document.getElementById("ladoTriangulo3");
    const value3 = lado3.value;

    const altura = alturaIsosceles(value1,value2,value3);
    
}