var pingPong = (function(number1) {
  var numberList = []

    for ( var i = 1; i <= number1; i ++);{
      if (i % 3 === 0 && i % 5 !== 0) {
        numberList.push("ping");
      }
      else if (i % 5 === 0 && i % 3 !== 0) {
        numberList.push("pong");
      }
      else if (i % 3 === 0 && i % 5 === 0 ) {
        numberList.push("pingpong");
      }
      else {
        numberList.push(i);
      }
  };
  return numberList;


});





$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {

    var number1 = parseInt($("input#number").val());

    if (isNaN(number1)) {
      alert("Enter a number");
    }
    $("#result").empty();

    var returnedNumberList = pingPong(number1);
    returnedNumberList.forEach(function(listItem) {
     $("<li>" + listItem + "</li>").append("#result");
   });
    //$("#result").show();
    //pingPong(numberList);
    event.preventDefault();

  });
});
