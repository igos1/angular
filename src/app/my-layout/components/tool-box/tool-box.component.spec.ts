import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToolBoxComponent } from './tool-box.component';
import { Component } from "@angular/core";
import { By } from '@angular/platform-browser';
@Component({
  template: `
      <app-tool-box (sortSearchClick)="filterByName($event)">
      </app-tool-box>
        `
})
class TestHostComponent {
  inputValue;
  filterByName(value) {
    this.inputValue = value;
  }
}


describe('ToolBoxComponent', () => {
  let TestHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ToolBoxComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    TestHost = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(TestHost).toBeTruthy();
  });

  it('should output sortSearchClick', () => {

    const toolInplDeb = fixture.debugElement.query(By.css('.toolInput'));
    let toolInput = toolInplDeb.nativeElement;
    toolInput.value = '123';
    toolInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const SearchBut = fixture.debugElement.query(By.css('.SearchBut'));
    SearchBut.triggerEventHandler('click', null);
    expect(TestHost.inputValue).toBe(toolInput.value);
  })


});
