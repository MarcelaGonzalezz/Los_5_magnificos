let datos = []; // Declarar datos fuera de la función para que mantenga su estado
let totalCompras = 0; // Declarar totalCompras fuera de la función para que mantenga su estado

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
    
    totalCompras += cantidad; // Acumular la cantidad en totalCompras

    let nuevoDato = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        cantidad: cantidad,
        categoria: categoria,
        totalConDescuento: totalConDescuento
    };
    
    datos.push(nuevoDato); // Agregar el nuevo dato al array datos
    console.log("Compras totales: " + totalCompras);
    console.log(datos);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularDescuento();
});

