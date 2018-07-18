import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolBoxComponent, BreadcrumbsComponent, CoursesListComponent , HeaderComponent , FooterComponent, CourseItemComponent, CoursesPageComponent, LogoComponent} from './components';
import { CreatedDateBorderDirective } from './directives';
import { DurationPipe } from './pipes/duration.pipe';




@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, BreadcrumbsComponent, CoursesListComponent, ToolBoxComponent, FooterComponent, CourseItemComponent, CoursesPageComponent, LogoComponent,CreatedDateBorderDirective, DurationPipe],
  exports : [BreadcrumbsComponent,CoursesListComponent, HeaderComponent, ToolBoxComponent, FooterComponent, CoursesPageComponent, CreatedDateBorderDirective]
})
export class MyLayoutModule { }
