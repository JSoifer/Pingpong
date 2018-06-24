var numberList = []
var pingpong = (function(number1) {
  if (isNaN(number1)) {
    alert("Enter a number");
  } else {
    for (index = 0; index<= number1; index +=1); {
    var total = index += 1
    numberList.push(total);
    $(".result").show(numberList);
  };

    //numberList.push("ping");

  };
});





$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#number").val());
  //  var result = function(number1);
  //  $("#result").show(result);
  pingpong(numberList);
  });
});
