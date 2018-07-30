import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToolBoxComponent, BreadcrumbsComponent, CoursesListComponent , HeaderComponent , FooterComponent, 
  CourseItemComponent, CoursesPageComponent, LogoComponent, LoginPageComponent,AddCoursePageComponent,DateInputComponent,
  DurationComponent, AuthorsComponent} from './components';
import { CreatedDateBorderDirective } from './directives';
import { DurationPipe, OrderByPipe, OrderByNamePipe } from './pipes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, BreadcrumbsComponent, CoursesListComponent, ToolBoxComponent, FooterComponent, CourseItemComponent, CoursesPageComponent, LogoComponent,CreatedDateBorderDirective, DurationPipe, OrderByPipe, OrderByNamePipe, LoginPageComponent, AddCoursePageComponent, DateInputComponent, DurationComponent, AuthorsComponent],
  exports : [BreadcrumbsComponent,CoursesListComponent, HeaderComponent, ToolBoxComponent, FooterComponent, CoursesPageComponent, CreatedDateBorderDirective, LoginPageComponent],

})
export class MyLayoutModule { }
