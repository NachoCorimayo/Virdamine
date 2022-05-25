function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function validacion(){
  if (document.fvalida.nombre.value.length == 0) {
    alert("Por favor, escriba su Nombre")
    document.fvalida.nombre.focus()
    return 0;
}
  if (document.fvalida.apellido.value.length == 0) {
    alert("Por favor, escriba su Apellido")
    document.fvalida.apellido.focus()
    return 0;
}
  if (document.fvalida.email.value.length == 0) {
    alert("Usted no ingresó un mail para recibir notificaciones")
    document.fvalida.email.focus()
    return 0;
}
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}


