function copiar(array){
  var a = array;
  var b = a.map(function(e,i){
    return e;
  })
  console.log ("Array A is " + a)
  console.log ("Array B is " + b)
}

copiar([1,2,3,4,5])