import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { LoginAuthService } from './login-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {MatDialogModule} from '@angular/material/dialog';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { UploadComponent } from './upload/upload.component';
import { ProjectKeyComponent } from './project-key/project-key.component';
import { BotsComponent } from './bots/bots.component';
import {  ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    UploadComponent,
    ProjectKeyComponent,
    BotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [
    UserService,
     AuthGuard,
     LoginAuthService
    ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
