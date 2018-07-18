
import { TrainingCours } from './training-cours';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})


export class CoursesListComponent implements OnInit {

  @Input() coursesItems;
  dataExists = false;

  constructor() {
    this.coursesItems = [];
  }

  ngOnInit() {
    this.coursesItems = [
      new TrainingCours(123, 'Video Course 1', new Date('7.20.2018'), '01hh 25mm', 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', true),
      new TrainingCours(1234, 'Video Course 2', new Date(), '00hh 27mm', 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', false),
      new TrainingCours(12345, 'Video Course 3', new Date(), '00hh 43mm', 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', true),
      new TrainingCours(123456, 'Video Course 4', new Date(), '00hh 35mm', 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', false)
    ];
  }



  onCourseClick(id) {
    console.log(id);
  }
  LoadMoreClick() {
    console.log('Load more clicked');
  }
  noDataClick() {
    console.log(this.dataExists);
    this.dataExists = (this.dataExists == true) ? false : true;
  }

}
