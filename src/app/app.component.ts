import { Component } from '@angular/core';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';

  i18n = {
    week: 'viikko',
    calendar: 'kalenteri',
    clear: 'tyhjennä',
    today: 'tänään',
    cancel: 'peruuta',
    firstDayOfWeek: 1,
    monthNames:
      'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    formatDate: date => moment(date).format('D.M.YYYY'),
    formatTitle: (monthName, fullYear) => monthName + ' ' + fullYear,
    parseDate: dateString => {
      const parsed = moment(dateString, 'D.M.YYYY');
      return {
        day: parsed.date(),
        month: parsed.month(),
        year: parsed.year()
      };
    }
  };
}
