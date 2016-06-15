var sum = 0;
do{
  var i = prompt("Ingresa un numero");
  if (isNaN(i)){

  }else{
  sum = sum + parseInt(i);
  }
}while(i != "fin");
console.log(sum)



