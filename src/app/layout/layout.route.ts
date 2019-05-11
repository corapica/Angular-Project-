import { BotsComponent } from './../bots/bots.component';
import { ProjectKeyComponent } from './../project-key/project-key.component';
import { UploadComponent } from './../upload/upload.component';
import { Routes } from '@angular/router';
import { UsersComponent } from '../users/users/users.component';
import { DashboradComponent } from '../dashboard/dashborad/dashborad.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { AuthGuard } from '../auth.guard';



export const ROUTES: Routes = [
  { path: 'Dashboard', component: DashboradComponent},
  { path: 'Users', component: UsersComponent},
  { path: 'Upload', component: UploadComponent},
  { path: 'ProjectKey', component: ProjectKeyComponent},
  { path: 'Bots', component: BotsComponent},
  { path: 'Admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  { path: 'Userdashboard', component: UserdashboardComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'Dashboard'}
];
