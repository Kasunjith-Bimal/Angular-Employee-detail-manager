import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private employeeServise:EmployeeService) { }
  EmployeeList;
  ngOnInit() {
    this.employeeServise.getAllemployee().subscribe(data=>{


      this.EmployeeList = data;
    });
  }

}
