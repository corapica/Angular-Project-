import { LoginAuthService } from './../login-auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  public loginuser: any = {};
  public users: any = [];

  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
   }

   ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
      this.users = users ;
    });
  }

    ngOnDestroy(): void {
        document.body.className = '';
    }
}
