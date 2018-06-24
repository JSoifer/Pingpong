var pingPong = (function(number1) {
  var numberList = []

    for ( var index = 1; index <= number1; index ++);{
  //} else {
    numberList.push(index);

  };

    //numberList.push("ping");


});





$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var number1 = parseInt($("input#number").val());
    if (isNaN(number1)) {
      alert("Enter a number");
    }
    var returnedArray = pingPong(number1);
    $("#result").show();
  pingpong(numberList);
  event.preventDefault();

  });
});
