import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http, RequestOptions, Headers, Response} from '@angular/http'
@Injectable()
export class EmployeeService {

  constructor(private http :Http) { }
getAllemployee(){

  return this.http.get('http://localhost:4200/api/Employee').map((response : Response)=>response.json());
}
}
