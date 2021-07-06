$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let number = $("#number").val();
    $("#output").append(function() {
      return $("<p>" + name +"<span class='hidden'>"+ " " + number + "</span>" + "</p>").click(function() {
        $(this.firstElementChild).toggle("hidden");
      });
    });
  });
});