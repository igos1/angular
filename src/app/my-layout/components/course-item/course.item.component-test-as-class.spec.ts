import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
    let sut: CourseItemComponent;

    beforeEach(() => {
        sut = new CourseItemComponent();
    })

    it('should create', () => {
        expect(sut).toBeTruthy();
      });
})