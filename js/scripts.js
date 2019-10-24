$(document).ready(function(){
  $("#charecterButton").click(function(event) {
    var foodAnswer = parseInt($("#food").val())
    var movieAnswer = parseInt($("#movie").val())
    var colorAnswer = parseInt($("#color").val())
    var timeAnswer = parseInt($("#time").val())

    var totalValue = foodAnswer + movieAnswer + colorAnswer + timeAnswer;




    if (totalValue <= 5 ){
      prompt("hi")

    }

    event.preventDefault();
  });
});
