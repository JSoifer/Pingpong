var numberList = []
var pingpong = (function(number1) {
  if (isNAN(number1)) {
    alert("Enter a number");
  } else if (number1 % 3 === 0); {
    numberList.push("ping");

  };
});





$(document).ready(function() {
  $("#ping-pong form").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#number").val());
  //  var result = function(number1);
  //  $("#result").show(result);
  pingpong(numberList);
  });
});
