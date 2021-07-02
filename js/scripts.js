$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let number = $("#number").val();
    $("#output").append("<p>" + name +"<span class='hidden'>"+ " " + number + "</span>" + "</p>");
    $("p").click(function(){
      $(this.firstElementChild).removeClass("hidden");
    });
  });
});