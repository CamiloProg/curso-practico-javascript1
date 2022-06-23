
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento))/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice =document.getElementById("inputPrice");
    const price=inputPrice.value;
    const inputDiscount =document.getElementById("inputDiscount");
    const discount=inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price,discount);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}