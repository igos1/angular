import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import { TrainingCours } from '../../services/course-serv/training-cours';
@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})

export class CourseItemComponent implements OnInit {

   @Input() courseItem: TrainingCours;
  
   @Output() courseClick = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  
  courseClickDelete(id: number) {   
    this.courseClick.emit(id);
  }

}
