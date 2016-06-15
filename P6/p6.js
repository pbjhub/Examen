$(document).ready(function() {
var i = 6
$("#a").click( function(event){
  $("#ul").append("<li>"+ i++ + "</li>");
  });

$("#b").click( function(event){
  $("ul li:eq(0)").remove();
  });
});
