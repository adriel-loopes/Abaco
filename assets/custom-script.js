// Aguardar o carregamento completo da página
$(document).ready(function () {
  
    // Exemplo de manipulação de clique em uma conta
    $(".conta").click(function() {
      $(this).toggleClass("selecionada");
      console.log("Conta clicada!", $(this));
    });
  
    // Exemplo de animar uma conta
    $(".conta").on("dragstart", function(e) {
      e.originalEvent.dataTransfer.setData("text", $(this).attr("id"));
      $(this).addClass("em-arrasto");
    });
  
    $(".conta").on("dragend", function() {
      $(this).removeClass("em-arrasto");
    });
  
    // Exemplo de mostrar valor total ao mover as contas
    $(".haste").on("dragover", function(e) {
      e.preventDefault(); // Impedir o comportamento padrão
      $(this).css("background-color", "lightgray");
    });
  
    $(".haste").on("dragleave", function() {
      $(this).css("background-color", "transparent");
    });
  
    $(".haste").on("drop", function(e) {
      e.preventDefault();
      const idConta = e.originalEvent.dataTransfer.getData("text");
      const conta = $("#" + idConta);
      $(this).append(conta);
      $(this).css("background-color", "transparent");
      console.log("Conta movida para a haste!");
    });
  
    // Exemplo de adição de sons
    $(".conta").on("dragstart", function() {
      var som = new Audio('assets/sounds/drag-sound.mp3');
      som.play();
    });
  
    $(".haste").on("drop", function() {
      var som = new Audio('assets/sounds/drop-sound.mp3');
      som.play();
    });
  });
  