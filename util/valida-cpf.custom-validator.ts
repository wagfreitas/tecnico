import { AbstractControl } from '@angular/forms';

export class ValidaCPFCustom {
  static ValidaCpf(controle: AbstractControl) {

    const strCPF = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido = true;

    if(strCPF == null)
      return null;

  if (strCPF == "00000000000") valido = false;

  for (var i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)) ) valido = false;

  soma = 0;
    for (var i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11) ) )valido = false;

    console.log(valido);
    if (valido){
      return null;
    }else{
      return { cpfInvalido: true };
    }



  }

}
