function validacion_al_enviar_datos() {

    if (document.fcontacto.nombre.value.length == 0) {
        alert("Falta escribir el nombre")
        document.fcontacto.nombre.focus()
        return 0;
    }


    if (document.fcontacto.apellido.value.length == 0) {
        alert("Falta escribir el apellido")
        document.fcontacto.apellido.focus()
        return 0;
    }

    if (document.fcontacto.email.value.length == 0) {
        alert("Falta escribir el email")
        document.fcontacto.email.focus()
        return 0;
    }     


     if (document.fcontacto.consulta.value.length == 0) {
        alert("Falta escribir el mensaje")
        document.fcontacto.consulta.focus()
        return 0;
    }
}