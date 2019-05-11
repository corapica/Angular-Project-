import { Router } from '@angular/router';
import { LoginAuthService } from './login-auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public currentstatus: any ;

  constructor(private authService: LoginAuthService, private router: Router) {
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus => {
      this.currentstatus = this.currentstatus ;
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
