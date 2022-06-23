//utils
function esPar(numero){
    return (numero%2===0)
};
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcomulado=0, nuevoElemnto){
            return valorAcomulado + nuevoElemnto;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    };
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
//ORDENAR SALARIOS
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);
//calculadora mediana
function medianaSalario(lista){
    const mitad = parseInt(lista.length / 2);0

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const medianaGeneralCol = medianaSalario(salariosColSorted);

//mediana top 10%

const spliceStart = parseInt(salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length;
const salariosColTop10 = salariosColSorted.slice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalario(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col
)