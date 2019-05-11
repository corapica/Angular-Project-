import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  public loginuser: any = {};
  constructor(private router: Router) {

    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
