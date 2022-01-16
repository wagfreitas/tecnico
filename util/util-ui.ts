import {FormGroup} from '@angular/forms';

export class UtilUi {

  public static defaultLocaleCalendar: any = {
    // date
    closeText: 'Fechar',
    prevText: '<Anterior',
    nextText: 'Próximo>',
    currentText: 'Hoy',
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    // time
    timeOnlyTitle: 'Escolher uma  hora',
    timeText: 'Hora',
    hourText: 'Horas',
    minuteText: 'Minutos',
    secondText: 'Segundos',
    millisecText: 'Milisegundos',
    microsecText: 'Microsegundos',
    timezoneText: 'Fuso horário',
    timeFormat: 'HH:mm',
    timeSuffix: '',
    amNames: ['a.m.', 'AM', 'A'],
    pmNames: ['p.m.', 'PM', 'P'],
  };


  /**
   * Prepara uma lista para o dropdownlist
   */
  static forDropdown(label, descriptionProperty, valueProperty, list) {
    const dropdownList = [{label: label, value: undefined}];
    list.forEach(item => {
      dropdownList.push({label: item[descriptionProperty], value: item[valueProperty]});
    });
    return dropdownList;
  }

  static forDropdownWithoutValueProperty(label, descriptionProperty, list) {
    const dropdownList = [{label: label, value: undefined}];
    list.forEach(item => {
      dropdownList.push({label: item[descriptionProperty], value: item});
    });
    return dropdownList;
  }

  /**
   * Prepara uma lista para o multiSelect
   */
  static forMultiSelect(descriptionProperty, valueProperty, list) {
    const multiSlectList = [];
    list.forEach(item => {
      multiSlectList.push({label: item[descriptionProperty], value: item[valueProperty]});
    });
    return multiSlectList;
  }

  static forMultiSelectWithoutValueProperty(descriptionProperty, list) {
    const multiSlectList = [];
    list.forEach(item => {
      multiSlectList.push({label: item[descriptionProperty], value: item});
    });
    return multiSlectList;
  }


  static getPageableRequest(event?): any {
    const sorting: { [key: string]: string } = {};
    const retorno: any = {};
    let page = 0;
    if (event && event.first > 0) {
      page = event.first / event.rows;
    }
    const size = event && event.rows > 0 ? event.rows : 10;

    if (event) {
      sorting[event.sortField] = event.sortOrder === -1 ? 'desc' : 'asc';
    }
    retorno['sorting'] = sorting;
    retorno['page'] = page;
    retorno['size'] = size;
    if (event && event['filters']) {
      for (const k in event['filters']) {
        if (event['filters'][k]) {
          retorno[k] = event['filters'][k]['value'];
        }
      }
    }
    return retorno;
  }

  static formModelValueToDTO(formModel: {}, dtoModel: {}, ignoreProperties?: string[]): {} {
    for (const k in formModel) {
      if (ignoreProperties && (ignoreProperties.indexOf(k) > -1)) {
        continue;
      }
      dtoModel[k] = formModel[k];
    }
    return dtoModel;
  }

  static validarIntervaloDatas(dataInicio: any, dataFim: any) {
    if (UtilUi.stringToDate(dataInicio) <= UtilUi.stringToDate(dataFim)) {
      return true;
    } else {
      return false;
    }
  }

  static stringToDate(dateStr) {
    if (dateStr) {
      const parts = dateStr.split('/');
      return new Date(parts[2], parts[1] - 1, parts[0]);
    }
  }

  static dateToString(date: any) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;

    const yyyy = date.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    const dateString = dd + '/' + mm + '/' + yyyy;

    return dateString;
  }


  static intervaloDataInvalido(campoA: string, campoB: string) {
    return (group: FormGroup): { [key: string]: boolean } => {
      const dataInicio = group.controls[campoA]['value'];
      const dataFim = group.controls[campoB]['value'];
      if (!dataFim && !dataInicio) {
        return null;
      } else if (!dataFim && dataInicio || dataFim && !dataInicio) {
      } else if (UtilUi.stringToDate(dataInicio) > UtilUi.stringToDate(dataFim)) {
        console.log('invalido');
        return {intervaloDataInvalido: true};
      }
    };
  }

  static camposDiferentes(campoA: string, campoB: string) {
    return (group: FormGroup): { [key: string]: boolean } => {
      const email = group.controls[campoA];
      const confirmEmail = group.controls[campoB];

      if (email.value !== confirmEmail.value) {
        return {
          camposDiferentes: true
        };
      }
    };
  }

  public static formatSize(bytes) {
    if (bytes < 1024) {
      return bytes + ' Bytes';
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(3) + ' KB';
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(3) + ' MB';
    } else {
      return (bytes / 1073741824).toFixed(3) + ' GB';
    }
  }

}
