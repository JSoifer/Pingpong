var pingpong = (function(number1) {
  if (isNAN(number1)) {
    alert("Enter a number");
  } else if (number1 % 3 === 0);
    alert("Ping");
});





$(document).ready(function() {
  $("form#ping-Pong").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#number").val());
    var numberList = []
  //  var result = function(number1);
    $("#result").show(result);
  });
});
