import { TrainingCours } from './training-cours';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: TrainingCours[] = [
    new TrainingCours(1234, 'Video Course 2', new Date(), 27, 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', false),
    new TrainingCours(123, 'Video Course 1', new Date('7.20.2018'), 85, 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', true),
    new TrainingCours(12345, 'Video Course 3', new Date(), 60, 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', true),
    new TrainingCours(123456, 'Video Course 4', new Date('7.29.2018'), 180, 'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.', false)
  ];
  getCourses(): TrainingCours[] {
    return this.courses;
  }
  
  addCourse(id: number, title: string, creationDate: Date, duration: number, description: string, topRated: boolean) {
    this.courses.push(new TrainingCours(id, title, creationDate, duration, description, topRated));
  }

  getCourseById(id: number) {

    this.courses.forEach(element => {
      if (element.id == id) {
        return element;
      }
    });
    return;
  }
  updateCourse(id: number, title: string, creationDate: Date, duration: number, description: string, topRated: boolean) {
    this.courses.forEach(element => {
      if (element.id == id) {
        if (title) { element.title = title; }
        if (creationDate) { element.creationDate = creationDate; }
        if (duration) { element.duration = duration; }
        if (description) { element.description = description; }
        if (topRated) { element.topRated = topRated; }
      }
    });
  }

  removeCourse(id: number) {
    //  let removeIndex;
    // this.courses.forEach((element, index) => {
    //   if (element.id == id) {
    //     removeIndex = index;
    //   }
    // });
    // this.courses.splice(removeIndex,1); 
    this.courses = [...this.courses.filter((el)=> el.id !== id)];
  }
  constructor() { }
}
