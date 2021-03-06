import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MyLayoutModule } from './my-layout/my-layout.module';
import {CoursesPageComponent} from './my-layout/components/courses-page/courses-page.component';
import {LoginPageComponent} from './my-layout/components/login-page/login-page.component';
import {AddCoursePageComponent} from './my-layout/components/add-course-page/add-course-page.component';
 
const appRoutes: Routes =[
  { path: '', component: CoursesPageComponent},
  { path: 'Login', component: LoginPageComponent },
  { path: 'AddCourse', component:  AddCoursePageComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
