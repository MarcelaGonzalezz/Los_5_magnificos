let datos = [];
let totalCompras = 0; 

function calcularDescuento() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correoelectronico').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let categoria = document.getElementById('categoria').value;
    
    let descuento = 0;
    if (categoria === 'Estudiante') {
        descuento = 0.8;
    } else if (categoria === 'Junior') {
        descuento = 0.5;
    } else if (categoria === 'Trainee') {
        descuento = 0.15;
    }
    
    let totalConDescuento = 200 * cantidad * (1 - descuento);

    document.getElementById('monto').value = 'Total a Pagar: $' + totalConDescuento.toFixed(2);
    
    totalCompras += cantidad;

    let nuevoDato = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        cantidad: cantidad,
        categoria: categoria,
        totalConDescuento: totalConDescuento
    };
    
    datos.push(nuevoDato);
    console.log("Compras totales: " + totalCompras);
    console.log(datos);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularDescuento();
});

