import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { Approuter } from './employee/employee.route';




const APP_ROUTE_PROVIDER: Routes =[

    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'employee',component:EmployeeComponent,children:Approuter}
]

export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);