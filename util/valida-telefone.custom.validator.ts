import { AbstractControl } from '@angular/forms';

export class ValidaTelefoneCustom {
  static Celular(controle: AbstractControl) {
    var value = controle.value.toString();

    console.log(value);

    if(value.length > 0){
      var pattern = new RegExp(/(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/);
      var res = pattern.test(controle.value);

      console.log(res);

      if(res){
        return null;
      }
      else{
        return {telefoneInvalido:true};
      }
    }
  }

  static Fixo(controle: AbstractControl) {
    var value = controle.value.toString();
    if(value.length > 0){
      var pattern = new RegExp("[0-9 ]{10}");
      var res = pattern.test(controle.value);

      if(res){
        return null;
      }
      else{
        return {telefoneInvalido:true};
      }
    }

  }

}
