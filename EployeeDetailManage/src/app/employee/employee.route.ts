import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee.component";
import { EmployeeeditComponent } from "./employeeedit.component";
import { EmployeeaddComponent } from "./employeeadd.component";
import { EmployeelistComponent } from "./employeelist.component";


export const Approuter:Routes =[
    { path: '', component: EmployeelistComponent },
    { path: 'new', component: EmployeeaddComponent },
 { path: 'edit/:id', component: EmployeeeditComponent }
]

