import { Directive, ElementRef, Renderer2, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appCreatedDateBorder]'
})
export class CreatedDateBorderDirective implements OnInit  { 

  @Input() CourseDate: Date ;
 
  constructor(private el: ElementRef, private renderer: Renderer2) { 
 
    
  }

  ngOnInit(){
    if((this.CourseDate < new Date() && (this.CourseDate >= new Date(new Date().getMonth().toString() +'.'+ (new Date('7.1.2018').getDay() - 14).toString()+'.'+new Date().getFullYear().toString())))) 
    {
    this.renderer.setStyle(this.el.nativeElement.firstChild,'border','1px solid green' )   ;
    }
    if((this.CourseDate > new Date())){
      this.renderer.setStyle(this.el.nativeElement.firstChild,'border','1px solid blue' )   ;
    }
  }
  
}
