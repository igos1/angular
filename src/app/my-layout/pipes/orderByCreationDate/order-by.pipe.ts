import { Pipe, PipeTransform } from '@angular/core';
import { TrainingCours } from '../../services/course-serv/training-cours';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByPipe implements PipeTransform {

  transform(allCourses: TrainingCours[], args?: any): any {

    allCourses.sort(function (a : any, b : any) {
     
      return b.creationDate - a.creationDate ;

    });
    return allCourses;
    
  }

}
