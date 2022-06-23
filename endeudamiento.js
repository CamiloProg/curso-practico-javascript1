function calcularCapaciadEndeudamiento(){
const salario1 = document.getElementById("salario");
const salarioPersona = salario1.value;

const gastos1 = document.getElementById("gastos");
const gastosPersona = gastos1.value;

if (parseInt (salarioPersona)>parseInt(gastosPersona)){
    const endeudamiento = Math.ceil((salarioPersona-gastosPersona)*0.35);
    const resul = document.getElementById("capacidad");
    resul.innerText = "Tu capacidad maxima para endeudarte, es de: $" + endeudamiento;
}
else{
    const resul = document.getElementById("capacidad");
    resul.innerText = "Tienes mas gastos que ingresos, por favor no te endeudes mas";
}

}