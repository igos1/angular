import { CreatedDateBorderDirective } from './created-date-border.directive';
import {ElementRef, Renderer2} from '@angular/core';
describe('CreatedDateBorderDirective', () => {
  it('should create an instance', () => {
    let  el: ElementRef;
    let renderer: Renderer2;
    const directive = new CreatedDateBorderDirective(el,renderer);
    expect(directive).toBeTruthy();
  });
});
