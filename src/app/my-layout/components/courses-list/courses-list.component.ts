
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { OrderByNamePipe } from '../../pipes/orderByTitle/order-by-name.pipe';
import { CourseService } from '../../services/course-serv/course.service';
import {TrainingCours} from '../../services/course-serv/training-cours';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})


export class CoursesListComponent implements OnInit {

  public coursesItems: TrainingCours[];
  public dataExists: boolean;
  public deletePopUp: boolean = false;
  private deleteId:number;

  constructor(private courseService: CourseService) {
    this.coursesItems = [];
  }

  ngOnInit() {
    this.coursesItems = this.courseService.getCourses();
    if (this.coursesItems.length == 0) { this.dataExists = true; }
  }

  filterByName(Value) {
    if (Value) { this.coursesItems = new OrderByNamePipe().transform(this.coursesItems, Value) };
  }

  onCourseDeleteClick(id) {
    this.deleteId = id;
    this.deletePopUp = true;
  }

  yesDeleteClick() {
    this.courseService.removeCourse(this.deleteId);
    this.deletePopUp = false;
    this.coursesItems = this.courseService.getCourses();
  }

  noDeleteClick() {
    this.deletePopUp = false;
  }

  loadMoreClick() {
    console.log('Load more clicked');
  }

}
