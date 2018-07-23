import { Pipe, PipeTransform } from '@angular/core';
import { TrainingCours } from '../../services/course-serv/training-cours';

@Pipe({
  name: 'orderByName'
})
export class OrderByNamePipe implements PipeTransform {

  transform(allCourses: TrainingCours[], substr:string): any {
   let result =  allCourses.filter(function (cours) {
    
      return cours.title.indexOf(substr) + 1;

    });
    
    return result;
  }

}
