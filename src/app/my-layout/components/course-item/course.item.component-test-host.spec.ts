import { Component } from "@angular/core";
import { CourseItemComponent } from './course-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationPipe } from "../../pipes";
import { By } from '@angular/platform-browser';
@Component({
    template: `
        <app-course-item [courseItem] = "cours" (courseClick) = "DeleteClick($event)">
        </app-course-item>
          `
})
class TestHostComponent {
    cours = {
        "id": 1234,
        "title": "Video Course 2",
        "creationDate": new Date('10/10/2010'),
        "duration": 27,
        "description": "If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension.",
        "topRated": false
    }
    deletedId: number;
    DeleteClick(id) {
        this.deletedId = id;
    }
}

describe('CourseItemComponent', () => {
    let TestHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent, TestHostComponent, DurationPipe]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        TestHost = fixture.componentInstance;
    })

    it('should output deleteId', () => {
        fixture.detectChanges();
        const delId = 1234;
        const deleteButton = fixture.debugElement.query(By.css('.Delete'));
        deleteButton.triggerEventHandler('click', null);
        expect(TestHost.deletedId).toBe(delId);
    })
})