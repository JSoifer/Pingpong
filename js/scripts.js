$(document).ready(function() {
  $("form#ping-Pong").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#number").val());
    var result = function(number1);
    $("#result").text(result);
  });
});
