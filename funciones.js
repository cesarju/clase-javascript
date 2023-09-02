/* function areaCircunferencia(radio) {
  const pi = 3.1415169;
  const resultado = pi * radio * radio;
  // console.log(resultado)
  return resultado;
}

const result = areaCircunferencia(520);

function total() {
  console.log(pi);
}
total();

console.log(result); */

//funciones

function mayorDeDosNumeros(ingresoUno, ingresoDos) {
  if (ingresoUno > ingresoDos) {
    return ingresoUno + " es mayor que " + ingresoDos;
  } else {
    return ingresoDos + " es mayor que " + ingresoUno;
  }
}

const resultado = mayorDeDosNumeros(40, 391);
// console.log(resultado + "");

mayorDeDosNumeros(400, 391);

// let mensaje = "Hola clase de javascript Ada School";

// console.log(mensaje.indexOf);

function containsWord(mensaje, texto) {
  const resultado = mensaje.indexOf(texto);
  console.log(resultado);
  if (resultado !== -1) {
    console.log("La palabra " + texto + " se encuentra en el mensaje");
  } else {
    console.log("No de encuentra el mesaje");
  }

  // console.log(texto);
}

containsWord("Hola classe de javascript Ada School", "clase");
