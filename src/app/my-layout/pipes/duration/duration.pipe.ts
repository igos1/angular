import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {  
   
    let minute = value % 60;
    let Hour = Math.trunc( value / 60);
    
    if(Hour == 0){
      if (minute!=0){
        return minute + 'min';
      }
    }
    if(minute == 0){
      if (Hour!=0){
        return Hour + 'h';
      }     
    }
     return Hour + 'h ' + minute + 'min';
  
}

}
