var n = parseInt(prompt("Dame el número"))
for (var i = 1; i<=n; i++){
  var fila =""
  x=1
  if (i==1){
    while(x<=n){
      fila = fila +"*"
      x++
       } console.log(fila)
    }else if (i ==n){
    while(x<=n){
      fila = fila +"*"
      x++
       } console.log(fila)
     }else {
     while(x<=n){
      if (x == 1 || x==n){
      fila = fila + "*"
      x++

      } else{
      fila = fila + " "
      x++
         }
       }
     console.log(fila)
     }

    }




