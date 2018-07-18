import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    console.log(value);
    let regHour = /\d{1,2}(?=hh)/;
    let regMinut = /\d{1,2}(?=mm)/;
    /*\s\d\d[mm]*/
    let strHour =  value.match(regHour);
    let strMinut =  value.match(regMinut);
    return strHour.toString()+' h ' + strMinut.toString() + ' min';
  }

}
