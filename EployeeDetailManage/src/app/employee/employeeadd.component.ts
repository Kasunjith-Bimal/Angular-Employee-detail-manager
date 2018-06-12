import { Component, OnInit } from '@angular/core';
import { employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {

  constructor(public employeeServise:EmployeeService) { }

  ngOnInit() {
  }
  employeeobj: employee = {

    employeeId : 0,
    employeeName :"kasun",
    employeeAge:25,
    employeeTelephoneNumber :"255555555"
  }
  onSubmit(){
console.log(this.employeeobj);
   this.employeeServise.addEmployee(this.employeeobj);
  }
}
