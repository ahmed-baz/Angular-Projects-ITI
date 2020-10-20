import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'index',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'tasks',component:TasksComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
