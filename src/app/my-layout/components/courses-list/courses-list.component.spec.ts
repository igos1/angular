import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseService } from '../../services/course-serv/course.service';
import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {OrderByPipe} from '../../pipes/orderByCreationDate/order-by.pipe';
describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let courseService: Partial<CourseService>
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent,OrderByPipe  ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [CourseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change deletePopUp after yesDeleteClick click', () => {
    component.yesDeleteClick();
    expect(component.deletePopUp).toBe(false);
  });
  it('should delete course', () => {
    let coursesCount = component.coursesItems.length;
    component.onCourseDeleteClick(component.coursesItems[0].id)
    component.yesDeleteClick();
    expect(component.coursesItems.length).toBe(coursesCount - 1 );
  });

});
