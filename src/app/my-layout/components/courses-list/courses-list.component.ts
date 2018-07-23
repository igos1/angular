
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { OrderByNamePipe } from '../../pipes/orderByTitle/order-by-name.pipe';
import { CourseService } from '../../services/course-serv/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CourseService]
})


export class CoursesListComponent implements OnInit {

  @Input() coursesItems;
  @Input() dataExists;
  @Input() deletePopUp: boolean = false;
  private deleteId:number;

  constructor(private dataService: CourseService) {
    this.coursesItems = [];
  }

  ngOnInit() {
    this.coursesItems = this.dataService.getCourses();
    if (this.coursesItems.length == 0) { this.dataExists = true; }

  }

  sortByName(Value) {

    if (Value) { this.coursesItems = new OrderByNamePipe().transform(this.coursesItems, Value) };

  }


  onCourseClick(id) {
    this.deleteId = id;
    this.deletePopUp = true;
  }
  yesDeleteClick() {
    this.dataService.removeCourse(this.deleteId);
    this.deletePopUp = false;
  }
  noDeleteClick() {
    this.deletePopUp = false;
  }
  LoadMoreClick() {
    console.log('Load more clicked');
  }


}
