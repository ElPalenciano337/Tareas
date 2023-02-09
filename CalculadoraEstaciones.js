let mes = prompt("Ingrese el número de un mes");

if(mes > 0 && mes < 13){
  if((mes == 12) || (mes == 1) || (mes == 2)){
    alert("Es Invierno");
  }else if((mes == 3) || (mes == 4) || (mes == 5)){
    alert("Es Primavera");
  }else if((mes == 6) || (mes == 7) || (mes == 8)){
    alert("Es Verano");
  }else if((mes == 9) || (mes == 10) || (mes == 11)){
    alert("Es Otoño");
  }
}else{
  alert("Valor Inválido");
}

alert("Brandon Steve Palencia Hernandez" + " - 22011436");