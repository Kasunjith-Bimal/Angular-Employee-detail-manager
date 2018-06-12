import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http, RequestOptions, Headers, Response, Jsonp} from '@angular/http'
import { employee } from './employee';
@Injectable()
export class EmployeeService {
EmployeeObjs;
  constructor(private http :Http) { }
getAllemployee(){

  return this.http.get('http://localhost:4200/api/Employee').map((response : Response)=>response.json());
}

addEmployee(Employeeobj:any){
  console.log(Employeeobj+"SSSSSSSS");
  console.log(JSON.parse(Employeeobj));
  console.log(Employeeobj+"SSSSSSSS");
this.EmployeeObjs =Employeeobj
return this.http.post('http://localhost:4200/api/Employee/AddUser',this.EmployeeObjs).map((response:Response)=> response.json());
}
}
