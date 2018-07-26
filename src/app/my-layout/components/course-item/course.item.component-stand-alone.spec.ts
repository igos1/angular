import { CourseItemComponent } from './course-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationPipe } from "../../pipes";
import { By } from '@angular/platform-browser';
describe('CourseItemComponent', () => {    
    let cmp: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent,DurationPipe]
        })
            .compileComponents();
            
    });

    let  cours = {
        "id": 1234,
        "title": "Video Course 2",
        "creationDate": new Date('10/10/2010'),
        "duration": 27,
        "description": "If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.",
        "topRated": false
    }  
      
       beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        cmp = fixture.componentInstance;     
        cmp.courseItem = cours;        
    });      

       it('should display course title in uppercase', () => {
        fixture.detectChanges();
        const titleDeb  = fixture.debugElement.query(By.css('.title'));
        const title = titleDeb.nativeElement;
        const courseTitleUpper  = cours.title.toUpperCase();
        expect(title.textContent).toContain(courseTitleUpper);
      });
})