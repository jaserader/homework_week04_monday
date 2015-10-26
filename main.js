'use strict';

var y;
// var operators;
// var answer;


$(".digit").click(function(){
  var value = this.value;

  // if (x === undefined){
  //   x = value;
  // } else if (x && !operators){
  //   x = x + value;
  // }
          // console.log( x );
      // console.log( value );

  var operators = $(".operator").click(function(){
    var value = this.value;
      return;
  })

  if (y === undefined && operators){
    y = value;
    answer.innerText = y;
  } else if (y) {
    y = y + value;
  }

  document.getElementById('answer').innerText = y;
});

$(".equals").click(function(){
   var value = this.value;

   if(y) {
     var answer = eval(y);
     document.getElementById('answer').innerText = answer;
     return;
   }
});

$(".clear").click(function(){
  console.log("click")
  document.getElementById('answer').innerText = "";
})
