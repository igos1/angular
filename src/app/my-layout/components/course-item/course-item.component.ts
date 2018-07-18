import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrainingCours } from '../courses-list/training-cours';
@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})

export class CourseItemComponent implements OnInit {

  @Input() CourseItem: TrainingCours;
  
  @Output() CourseClick = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  
  CourseClickDelete(id: number) {
    this.CourseClick.emit(id);
   
  }

}
