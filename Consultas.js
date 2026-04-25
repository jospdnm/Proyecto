
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    let respuesta = document.getElementById("respuesta");

    // Validación simple
    if(nombre === "" || correo === "" || mensaje === ""){
        alert("Completa todos los campos");
        return;
    }

    // Simulación de envío
    respuesta.style.display = "block";
    respuesta.innerHTML = `✅ Gracias ${nombre}, tu consulta fue enviada correctamente.<br>Te responderemos pronto al correo: ${correo}`;

    // Limpiar formulario
    document.getElementById("formulario").reset();
});