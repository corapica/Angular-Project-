import { LoginAuthService } from './../../login-auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/user.service';


declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: any = {};

  constructor(private userService: UserService, private router: Router, private authService: LoginAuthService ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
      $(() => {
          $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' /* optional */
          });
      });
  }

  loginUser(user: any) {
    this.userService.loginUser(user).subscribe((response) => {
      if (response) {
       if (response.token){
         localStorage.setItem('currentUser', JSON.stringify(response)) ;
         if (response.user.role === 'ADMIN') {
            this.router.navigate(['/Admindashboard']) ;
         } else {
          this.router.navigate(['/Userdashboard']) ;
         }
       }
      }
    });
  }

}
