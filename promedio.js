function calcularMediaAritmetica(lista){
const sumaLista = lista.reduce(
    function(valorAcomulado=0, nuevoElemnto){
        return valorAcomulado + nuevoElemnto;
    }
);


const promedioLista = sumaLista / lista.length;
return promedioLista;
};