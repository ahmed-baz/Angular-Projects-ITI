import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { TasksComponent } from './tasks/tasks.component';
import { MaxLengthPipe } from './max-length.pipe';
import { TaskService } from './tasks/task.service';
import {HttpClientModule} from '@angular/common/http'
import {  Route, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { RatingComponent } from './rating/rating.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,StudentComponent, ProjectComponent, EmployeeComponent, TasksComponent, MaxLengthPipe
    ,
    HomeComponent,AboutUsComponent,ContactUsComponent,DetailsComponent,PageNotFoundComponent, HeaderComponent, LoginComponent, RatingComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
