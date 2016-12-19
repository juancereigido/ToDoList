// Añadir el efecto de tachado a los items completados
$("ul").on("click", ".ok", function(){
  $(this).toggleClass("completado");
  $(this).parent().toggleClass("completado");
});

// Borrar los items completados
$(".del").on("click", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
  //filtrar para que sólo se active cuando aprietan Enter
  if(event.key == "Enter") {
    $("ul").append("<li><span class='del'><i class='fa fa-trash-o' aria-hidden='true'></i></span><span class='ok'><i class='fa fa-check' aria-hidden='true'></i></span>"+ $(this).val() + "</li>");
    // se borra el contenido del input
    $(this).val("");
    event.stopPropagation();
  }
});

// Esconder/Mostrar el input
$(".fa-arrows-v").click(function(){
  $("input").slideToggle();
});
