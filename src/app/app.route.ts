import { AuthGuard } from './auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { DashboradComponent } from './dashboard/dashborad/dashborad.component';
import { Routes } from '@angular/router';
import { UsersComponent } from 'src/app/users/users/users.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



export const ROUTES: Routes = [
  { path: 'Dashboard', component: DashboradComponent},
  { path: 'Users', component: UsersComponent},
  { path: 'Admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  { path: 'Userdashboard', component: UserdashboardComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'Dashboard'}
];
