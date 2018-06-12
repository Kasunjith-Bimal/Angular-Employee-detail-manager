import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventService } from './event/event.service';
import { routing } from './app.route';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employee/employeelist.component';
import { EmployeeaddComponent } from './employee/employeeadd.component';
import { EmployeeeditComponent } from './employee/employeeedit.component';
import { EmployeeService } from './employee/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeaddComponent,
    EmployeeeditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule

  ],
  providers: [EventService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
