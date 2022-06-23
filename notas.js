const promedio  = [{
    nota: 3,
    porcentaje: 30,
},{
    nota: 3,
    porcentaje: 30,
},{
    nota: 4,
    porcentaje: 50,
}]
var notasPorcentuadas = promedio.map(
    function(notaObject){
        return (notaObject.nota*notaObject.porcentaje)/100;
    }
)
var promedioFinal = 0;

for (let i = 0; i < notasPorcentuadas.length; i++) {
    promedioFinal += notasPorcentuadas[i];
}
console.log(promedioFinal);
