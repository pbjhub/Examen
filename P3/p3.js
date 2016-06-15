function Telefono(numero,marca,color){
 this.numero = numero
 this.marca = marca
 this.color = color
 this.cont = 0

 this.marcar = function (num){
  this.cont = this.cont + 1
  console.log ("Has realizado " + this.cont + " llamadas")
 }
};

var iphone = new Telefono(8119168826,"Apple","gris");
iphone.marcar(8333005496);
iphone.marcar(8332182727);
iphone.marcar(8331881081);



